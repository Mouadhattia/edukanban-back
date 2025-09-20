const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const { verifyEmailToken } = require("../utils/emailService");

// get mail verified template

router.get("/mail-verified/:token", async (req, res) => {
  const token = req.params.token;

  try {
    const user = await verifyEmailToken(token);

    if (!user || !user.isEmailVerified) {
      const html = fs.readFileSync(
        path.join(__dirname, "../templates/invalid-token.html"),
        "utf8"
      );
      return res.send(html);
    }
    
    const html = fs.readFileSync(
      path.join(__dirname, "../templates/mail-verified.html"),
      "utf8"
    );

    return res.send(html);
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong.");
  }
});

module.exports = router;
