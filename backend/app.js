const express = require("express");
const app = express(); // Create an instance of express
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const connectToDb = require("./db/dbs");
const userRoutes = require("./routes/user.route");
const cookieParser = require("cookie-parser");

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/users", userRoutes);
// Remove the app.listen() call as it's already handled in server.js

module.exports = app;
