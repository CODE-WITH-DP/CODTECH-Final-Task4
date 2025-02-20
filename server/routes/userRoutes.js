const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Save user preferences
router.post("/preferences", async (req, res) => {
  try {
    const { userId, blockedSites } = req.body;
    await User.findOneAndUpdate({ userId }, { blockedSites }, { upsert: true });
    res.status(200).json({ message: "Preferences saved" });
  } catch (error) {
    res.status(500).json({ error: "Error saving preferences" });
  }
});

module.exports = router;