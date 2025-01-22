const mongoose = require("mongoose");

function connectToDb() {
  mongoose
    .connect("mongodb://localhost:27017/uber-clone")
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => console.log("Failed to connect to DB:", err.message));
}
module.exports = connectToDb;
