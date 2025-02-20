const mongoose = require("mongoose");
const ReportSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  date: { type: String, required: true },
  timeSpent: { type: Map, of: Number, default: {} },
});
module.exports = mongoose.model("Report", ReportSchema);