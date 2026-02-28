const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("bufferCommands", false);

    if (!process.env.MONGO_URI) {
      console.warn("MONGO_URI not set. Starting server without database.");
      return false;
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
    return true;
  } catch (error) {
    console.error("MongoDB connection failed. Starting server without database.");
    console.error(error);
    return false;
  }
};

module.exports = connectDB;