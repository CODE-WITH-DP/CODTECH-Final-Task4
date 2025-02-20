const express = require("express");
const router = express.Router();
const Report = require("../models/Report");

// Get daily report
router.get("/daily", async (req, res) => {
  try {
    const reports = await Report.find({ date: new Date().toISOString().split("T")[0] });
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ error: "Error fetching reports" });
  }
});

module.exports = router;