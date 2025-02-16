const express = require("express");
const app = express(); // Create an instance of express
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const connectToDb = require("./db/dbs");
const userRoutes = require("./routes/user.route");
const cookieParser = require("cookie-parser");
const captainRoutes=  require('./routes/captain.route')
const mapsRoutes = require('./routes/maps.routes');
const rideRoutes = require('./routes/ride.routes');
connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/users", userRoutes);
app.use("/captain", captainRoutes);
app.use('/maps', mapsRoutes);
app.use('/rides', rideRoutes)

// Remove the app.listen() call as it's already handled in server.js

module.exports = app;
