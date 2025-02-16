const { validationResult } = require("express-validator");
const captainModel = require("../models/captain.model");
const captain = require("../services/captain.service");
// const validation = require("express-validator");
const blacklistTokenModal = require("../models/blacklistToken.modal");

module.exports.registerCaptain = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, vehicle } = req.body;
    const normalizedEmail = email.toLowerCase();
    const isCaptainAlreadyExists = await captainModel.findOne({ email });

    if (isCaptainAlreadyExists) {
      return res.status(400).json({ message: "Captain already exists" });
    }

    const hashedPassword = await captainModel.hashedPassword(password);

    const captains = await captain.createCaptain({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
      ...vehicle,
    });

    const token = captains.generateAuthToken();

    return res.status(201).json({ token, captain: captains });
  } catch (err) {
    console.error("Error in registering captain:", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports.loginCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  const captain = await captainModel.findOne({ email }).select("+password");
  if (!captain) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const isMatch = await captain.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const token = captain.generateAuthToken();
  res.cookie("token", token);
  res.status(200).json({ token, captain });
};

module.exports.getCaptainProfile = async (req, res, next) => {
   res.status(200).json({captain: req.captain});
}

module.exports.logoutCaptainProfile = async (req, res, next) => {
   const token =req.cookies?.token || req.headers.authorization?.split('')[1];
  await blacklistTokenModal.create({token});
  
   res.clearCookie('token');
   res.status(200).json({message: 'Logged out Successfully'});
}
