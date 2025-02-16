import React from "react";
import { Link } from "react-router-dom";
const FinishRide = (props) => {
  return (
    <div>
      {" "}
      <h5
        onClick={() => {
          props.setFinishRidePanel(false);
        }}
        className="p-2 text-center w-[93%] absolute top-0 "
      >
        {" "}
        <i className="text-2xl text-gray-600 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-medium mb-5">Finish This Ride </h3>
      <div className="flex items-center justify-between mt-4 rounded-lg p-4 border-2 border-yellow-400">
        <div className="flex items-center gap-3 ">
          <img
            className="h-11 w-10 rounded-full object-cover"
            src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
            alt=""
          />
          <h2 className="text-lg font-medium">Harsh patel</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>
      <div className="flex gap-2 flex-col justify-between items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5  p-3 border-b-1">
            <i className="text-lg ri-user-location-fill"></i>
            <div>
              <h3 className="text-lg font-medium">Your destination:</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Your destination address here
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-1">
            {" "}
            <i className=" text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">Your destination:</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Your destination address here
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5  p-3 ">
            <i className="ri-money-rupee-circle-fill"> </i>
            <div>
              <h3 className="text-lg font-medium"> $ 193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
        <div className="mt-6 w-full">
          <Link
            to='/captain-home'
            className="w-full mt-5 flex text-lg  justify-center bg-green-700 mt-5 text-white font-semibold p-2 rounded-lg"
          >
            Finish Ride
          </Link>
          <p className=" mt-10 text-xs">Click on finish ride button if you have completd the payment</p>
        </div>
      </div>{" "}
    </div>
  );
};

export default FinishRide;
