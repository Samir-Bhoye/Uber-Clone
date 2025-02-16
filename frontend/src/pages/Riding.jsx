import React from "react";
import { Link } from "react-router-dom";
import Home from './Home';
 const Riding = () => {
  return (
    <div className="h-screen">
        <Link to='/home'className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full">
            <i className=" text-lg font-semibold ri-home-3-line"></i>
        </Link>
      <div className=" h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://cdn.dribbble.com/users/914217/screenshots/4506553/media/66b3d16f627edc27b44c023e4ec40b28.gif"
          alt=""
        />{" "}
      </div>
      <div className="h-1/2 p-3">
        <div className=" flex items-center justify-between">
          <img
            className="h-28 "
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646935/assets/64/93c255-87c8-4e2e-9429-cf709bf1b838/original/3.png"
            alt=""
          />
          <div className="text-right">
            <h2 className="text-lg font-medium">Driver Name</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">
              {" "}
              Vehicle PlateNo
            </h4>
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
            {/* <div className="flex items-center gap-5  p-3 border-b-1">
              <i className="text-lg ri-user-location-fill"></i>
              <div>
                <h3 className="text-lg font-medium">Your Location</h3>
                <p className="text-sm -mt-1 text-gray-600">
                  Your destination address here
                </p>
              </div>
            </div> */}
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
        <button className="w-full bg-green-400 mt-5 text-white font-semibold p-2 rounded-lg">Make a Payment</button>
      </div>
    </div>
  );
};

export default Riding;
