import React from "react";

const WaitingForDriver = (props) => {
  return (
    <div>
      {" "}
      <h5
        onClick={() => {
          props.waitingForDriver(false);
        }}
        className="p-2 text-center w-[93%] absolute top-0 "
      >
        {" "}
        <i className="text-2xl text-gray-600 ri-arrow-down-wide-line"></i>
      </h5>
      <div className=" flex items-center justify-between">
      <img
          className="h-28 "
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646935/assets/64/93c255-87c8-4e2e-9429-cf709bf1b838/original/3.png"
          alt=""
        />
        <div className="text-right">
          <h2 className="text-lg font-medium">Driver Name</h2>
          <h4 className="text-xl font-semibold -mt-1 -mb-1"> Vehicle PlateNo</h4>
          <p className="text-sm text-gray-600">Vehicle name</p>
        </div>
      </div>
      {/* <h3 className="text-2xl font-medium mb-5">Looking for Driver</h3> */}
      <div className="flex gap-2 flex-col justify-between items-center">
        {/* <img
          className="h-28 "
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646935/assets/64/93c255-87c8-4e2e-9429-cf709bf1b838/original/3.png"
          alt=""
        /> */}
        <div className="w-full mt-5">
          <div className="flex items-center gap-5  p-3 border-b-1">
            <i className="text-lg ri-user-location-fill"></i>
            <div>
              <h3 className="text-lg font-medium">Your Location</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Your destination address here
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-1">
            {" "}
            <i className=" text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">To destination:</h3>
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
      </div>
    </div>
  );
};

export default WaitingForDriver;
