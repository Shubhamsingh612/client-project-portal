const Client = require("../models/Client");
const mongoose = require("mongoose");

const isDbConnected = () =>
  mongoose?.connection?.readyState === 1;

exports.addClient = async (req, res) => {
  try {
    if (!isDbConnected()) {
      return res
        .status(503)
        .json({ message: "Database not connected. Check MONGO_URI in .env" });
    }
    const { name, description, designation, website } = req.body;

    const client = await Client.create({
      name,
      description,
      designation,
      website,
      logo: req.file ? req.file.path : "",
    });

    return res.status(201).json(client);
  } catch (error) {
    console.error("Error adding client:", error);
    return res.status(500).json({ message: "Failed to add client" });
  }
};

exports.getClients = async (req, res) => {
  try {
    if (!isDbConnected()) {
      return res.json([]);
    }
    const clients = await Client.find().sort({ createdAt: -1 }).lean();
    return res.json(clients);
  } catch (error) {
    console.error("Error fetching clients:", error);
    return res.json([]);
  }
};


