const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const blacklistTokenModal = require("../models/blacklistToken.modal");
const captainModel = require("../models/captain.model");

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const isBlacklisted = await blacklistTokenModal.findOne({ token: token });
  if (isBlacklisted) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);
    req.user = user;
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports.authCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  console.log("🚀 Received Token:", token);
  if (!token) {
    return res.status(401).json({ message: "Unauthorized  - Token Missing" });
  }
  const isBlacklisted = await blacklistTokenModal.findOne({ token: token });
  // console.log(isBlacklisted);
  if (isBlacklisted) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("🔑 Decoded Token:", decoded);

    const captain = await captainModel.findById(decoded._id);
    req.captain = captain;
    console.log("👨‍✈️ Captain Found:", captain);
    if (!captain) {
      return res.status(401).json({ message: "Captain not found in database" });
    }
    console.log("👨‍✈️ Captain Found:", captain);
    return next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Unauthorized" });
  }
};
