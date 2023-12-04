const express = require("express");
const adminRoutes = require("./Routes/admin");
const shopRoutes = require("./Routes/shop");
const contactRoutes = require("./Routes/contact");
const successRoutes = require("./Routes/success");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
app.use(successRoutes);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "pages", "error.html"));
});
app.listen(3000);
