const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    logo: { type: String, required: true },
    description: { type: String, required: true },
    designation: { type: String, required: true },
    website: { type: String, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Client", clientSchema);


