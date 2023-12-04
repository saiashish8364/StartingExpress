const path = require("path");
const express = require("express");
const router = express.Router();
router.get("/contactUs", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "pages", "contact.html"));
});
router.post("/contactUs", (req, res, next) => {
  res.redirect("/success");
});
module.exports = router;
