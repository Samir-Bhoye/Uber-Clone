import React from "react";

const RidePopUp = (props) => {
  return (
    <div>
      {" "}
      <h5
        onClick={() => {
          props.setRidePopUpPanel(false);
        }}
        className="p-2 text-center w-[93%] absolute top-0 "
      >
        {" "}
        <i className="text-2xl text-gray-600 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-medium mb-5">New Ride Available </h3>
      <div className="flex items-center justify-between mt-4 rounded-lg p-3 bg-yellow-400">
        <div className="flex items-center gap-3 ">
          <img
            className="h-11 w-10 rounded-full object-cover"
            src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
            alt=""
          />
          <h2 className="text-lg font-medium">
            {props.ride?.user.fullname.firstname +
              " " +
              props.ride?.user.fullname.lastname}
          </h2>
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
                {props.ride?.pickup}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-1">
            {" "}
            <i className=" text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">Your destination:</h3>
              <p className="text-sm -mt-1 text-gray-600">
                {props.ride?.destination}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5  p-3 ">
            <i className="ri-money-rupee-circle-fill"> </i>
            <div>
              <h3 className="text-lg font-medium">₹{props.ride?.fare}</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
        <div className="flex w-full  mt-5 items-center justify-between">
          <button
            onClick={() => {
              props.setRidePopUpPanel(false);
              //  props.setConfirmRidePopUpPanel(true);
            }}
            className=" bg-gray-200  text-gray-700 font-semibold p-3 px-8 rounded-lg"
          >
            Ignore
          </button>
          <button
            onClick={() => {
              props.setConfirmRidePopUpPanel(true);
              props.confirmRide()
            }}
            className=" bg-green-600  text-white font-semibold p-3 px-8 rounded-lg"
          >
            Accept
          </button>
        </div>
      </div>{" "}
    </div>
  );
};

export default RidePopUp;
