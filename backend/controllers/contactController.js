const Contact = require("../models/Contact");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const isDbConnected = () => mongoose?.connection?.readyState === 1;

const canSendMail = () =>
  !!(
    process.env.SMTP_HOST &&
    process.env.SMTP_PORT &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS &&
    process.env.MAIL_TO
  );

const sendContactEmail = async ({ name, email, mobile, city, message }) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailFrom = process.env.MAIL_FROM || process.env.SMTP_USER;
  const subject = `New Contact Form: ${name}`;
  const text = `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nCity: ${city}\n\nMessage:\n${message}\n`;

  await transporter.sendMail({
    from: mailFrom,
    to: process.env.MAIL_TO,
    replyTo: email,
    subject,
    text,
  });
};

exports.createContact = async (req, res) => {
  try {
    const { name, email, mobile, city, message } = req.body;

    // 1) Save to DB if connected
    let contact = null;
    if (isDbConnected()) {
      contact = await Contact.create({ name, email, mobile, city, message });
    }

    // 2) Send email if SMTP is configured
    if (canSendMail()) {
      await sendContactEmail({ name, email, mobile, city, message });
    }

    return res.status(201).json({
      ok: true,
      savedToDb: !!contact,
      emailed: canSendMail(),
      contact,
    });
  } catch (error) {
    console.error("Error creating contact:", error);
    return res.status(500).json({ message: "Failed to submit contact form" });
  }
};

exports.getContacts = async (req, res) => {
  try {
    if (!isDbConnected()) {
      return res.json([]);
    }
    const contacts = await Contact.find().sort({ createdAt: -1 }).lean();
    return res.json(contacts);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return res.json([]);
  }
};
