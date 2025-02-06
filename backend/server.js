require("dotenv").config();

const express = require("express");
const app = express();

const Router = require("./router");
const PORT = process.env.PORT || 5001;

/** ---------- MIDDLEWARE ---------- **/
app.use(express.json()); // needed for axios requests (front end)
app.use(express.static("build"));

/** ---------- EXPRESS ROUTES ---------- **/
app.use("/", Router);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
});
