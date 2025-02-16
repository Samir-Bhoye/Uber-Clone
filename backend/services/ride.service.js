const rideModel = require("../models/ride.model");
const { sendMessageToSocketId } = require("../socket");
const mapService = require("./maps.services");
const bcrypt = require('bcrypt');
const crypto = require("crypto");

async function getFare(pickup, destination) {
  if (!pickup || !destination) {
    throw new Error("Pickup and destination must be provided");
  }
  const distanceTime = await mapService.getDistanceTime(pickup, destination);

  const baseFare = { auto: 25, car: 45, moto: 15 };
  const perKmRate = { auto: 10, car: 15, moto: 8 };
  const perMinuteRate = { auto: 2, car: 3, moto: 1.5 };

  const distanceInKm = parseFloat(distanceTime.distance.replace(" km", ""));
  const durationInMin = parseFloat(distanceTime.duration.replace(" mins", ""));

  if (isNaN(distanceInKm) || isNaN(durationInMin)) {
    throw new Error("Failed to parse distance or duration.");
  }

  const fare = {
    auto: Math.round(
      baseFare.auto +
        distanceInKm * perKmRate.auto +
        durationInMin * perMinuteRate.auto
    ),
    car: Math.round(
      baseFare.car +
        distanceInKm * perKmRate.car +
        durationInMin * perMinuteRate.car
    ),
    moto: Math.round(
      baseFare.moto +
        distanceInKm * perKmRate.moto +
        durationInMin * perMinuteRate.moto
    ),
  };
  return fare;
}
module.exports.getFare = getFare;
function getOtp(num) {
  return crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();
}

module.exports.createRide = async ({
  user,
  pickup,
  destination,
  vehicleType,
}) => {
  if (!user || !pickup || !destination || !vehicleType) {
    throw new Error("All fields are required");
  }
  const fare = await getFare(pickup, destination);
  console.log(fare);
  const ride = await rideModel.create({
    user,
    pickup,
    destination,
    otp: getOtp(6),
    fare: fare[vehicleType],
  });
  return ride;
 
};
module.exports.confirmRide = async ({
  rideId, captainId
}) => {
  if (!rideId) {
      throw new Error('Ride id is required');
  }
  if (!captainId) {
    throw new Error("Captain ID is required");
  }
  await rideModel.findOneAndUpdate({
      _id: rideId
  }, {
      status: 'accepted',
      captain:captainId,
  },{new : true})

  const ride = await rideModel.findOne({
      _id: rideId
  }).populate('user').populate('captain').select('+otp');

  if (!ride) {
      throw new Error('Ride not found');
  }

  return ride;

}


module.exports.startRide = async({rideId,otp,captain}) =>{
if(!rideId || !otp || !captain){
  throw new Error('Ride id and otp not found');
}
const ride = await rideModel.findOne({_id:rideId}).populate('user').populate('captain').select('+otp');

if(!ride){
  throw new Error('Ride not found');
}
if(!ride.status==='accepted'){
  throw new Error('Ride not accepted');
}
if(!ride.otp||!otp){
  throw new Error('Invalid Otp');

}
await rideModel.findOneAndUpdate({
  _id:rideId
},
{
  status:'ongoing'
})
sendMessageToSocketId(ride.user.socketId,{
  event:'ride-started',
  data:ride
})
}
module.exports.endRide = async ({ rideId, captain }) => {
  if (!rideId) {
      throw new Error('Ride id is required');
  }

  const ride = await rideModel.findOne({
      _id: rideId,
      captain: captain._id
  }).populate('user').populate('captain').select('+otp');

  if (!ride) {
      throw new Error('Ride not found');
  }

  if (ride.status !== 'ongoing') {
      throw new Error('Ride not ongoing');
  }

  await rideModel.findOneAndUpdate({
      _id: rideId
  }, {
      status: 'completed'
  })

  return ride;
}

