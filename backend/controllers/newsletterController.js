const Newsletter = require("../models/Newsletter");
const mongoose = require("mongoose");

const isDbConnected = () => mongoose?.connection?.readyState === 1;

exports.subscribe = async (req, res) => {
  try {
    if (!isDbConnected()) {
      return res.status(503).json({ message: "Database not connected. Check MONGO_URI in .env" });
    }
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const existing = await Newsletter.findOne({ email });
    if (existing) {
      return res.status(200).json(existing);
    }

    const subscriber = await Newsletter.create({ email });
    return res.status(201).json(subscriber);
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    return res.status(500).json({ message: "Failed to subscribe" });
  }
};

exports.getSubscribers = async (req, res) => {
  try {
    if (!isDbConnected()) {
      return res.json([]);
    }
    const subscribers = await Newsletter.find().sort({ createdAt: -1 }).lean();
    return res.json(subscribers);
  } catch (error) {
    console.error("Error fetching subscribers:", error);
    return res.json([]);
  }
};


