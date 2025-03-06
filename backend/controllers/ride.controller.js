const mapService = require("../services/maps.services");
const rideModel = require("../models/ride.model.js");
const { sendMessageToSocketId } = require("../socket.js");
const rideService = require("../services/ride.service");
const { validationResult } = require("express-validator");

module.exports.createRide = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { userId, pickup, destination, vehicleType } = req.body;
  try {
    const ride = await rideService.createRide({
      user: req.user._id,
      pickup,
      destination,
      vehicleType,
    });
    res.status(201).json({ ride });

    const pickupCoordinates = await mapService.getAddressCoordinate(pickup);

    const captainsInRadius = await mapService.getCaptainsInTheRadius(
      pickupCoordinates.lat,
      pickupCoordinates.lng,
      50
    );
    ride.otp = "";

    const rideWithUser = await rideModel
      .findOne({ _id: ride._id })
      .populate("user");
    captainsInRadius.map((captain) => {
      sendMessageToSocketId(captain.socketId, {
        event: "new-ride",
        data: rideWithUser,
      });
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports.getFare = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { pickup, destination } = req.query;
  try {
    const fare = await rideService.getFare(pickup, destination);
    return res.status(200).json(fare);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
module.exports.confirmRide = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
  }
  console.log("🚀 Captain Data:", req.captain);

  if (!req.captain || !req.captain._id) {
    console.error("❌ Captain not authenticated!");
    return res.status(401).json({ message: "Captain not authenticated" });
  }
  const { rideId } = req.body;

  try {
      const ride = await rideService.confirmRide({ rideId, captainId: req.captain._id });

      console.log("✅ Ride after assigning captain:", ride);
      sendMessageToSocketId(ride.user.socketId, {
          event: 'ride-confirmed',
          data: ride
      })

      return res.status(200).json(ride);
  } catch (err) {

    console.log("🔥 Error in confirmRide:", err);
      return res.status(500).json({ message: err.message });
  }
}

module.exports.startRide = async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status400.json({errors: errors.array()});
  }
  const { rideId ,otp}= req.query;
  try {
    const ride = await rideService.startRide({rideId ,otp ,captain:req.captain})
    sendMessageToSocketId(ride.user.socketId,{
      event:'ride-started',
      data:ride
    })
  
  } catch (error) {
    console.log(error);
  }
}
module.exports.endRide = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
  }

  const { rideId } = req.body;

  try {
      const ride = await rideService.endRide({ rideId, captain: req.captain });

      sendMessageToSocketId(ride.user.socketId, {
          event: 'ride-ended',
          data: ride
      })



      return res.status(200).json(ride);
  } catch (err) {
      return res.status(500).json({ message: err.message });
  } 
}