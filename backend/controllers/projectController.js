const Project = require("../models/Project");
const mongoose = require("mongoose");

const isDbConnected = () =>
  mongoose?.connection?.readyState === 1;

exports.addProject = async (req, res) => {
  try {
    if (!isDbConnected()) {
      return res
        .status(503)
        .json({ message: "Database not connected. Check MONGO_URI in .env" });
    }

    const { name, description } = req.body;
    if (!req.file) {
      return res.status(400).json({ message: "Project image is required" });
    }

    const project = await Project.create({
      name,
      description,
      image: req.file.path,
    });

    return res.status(201).json(project);
  } catch (error) {
    console.error("Error adding project:", error);
    return res.status(500).json({ message: "Failed to add project" });
  }
};

exports.getProjects = async (req, res) => {
  try {
    if (!isDbConnected()) {
      return res.json([]);
    }
    const projects = await Project.find().sort({ createdAt: -1 }).lean();
    return res.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return res.json([]);
  }
};