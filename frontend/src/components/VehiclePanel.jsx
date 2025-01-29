import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      {" "}
      <h5
        onClick={() => {
          props.setVehiclePanel(false);
        }}
        className="p-2 text-center w-[93%] absolute top-0 "
      >
        {" "}
        <i className="text-2xl text-gray-600 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-medium mb-5">Choose a Vehicle</h3>
      <div onClick={()=>{
        props.setConfirmRidePanel(true);
      }} className="flex p-3 mb-2 active:border-2  border-black rounded-xl items-center justify-between ">
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555366873/assets/37/e0e5f7-29d6-492c-b903-2fd99353af02/original/Final_Lux.png"
          alt=""
        />
        <div className=" ml-2 w-1/2">
          <h4 className="font-medium text-sm">
            UberGo{" "}
            <span>
              <i className="ri-user-3-fill">4</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-medium text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-2xl font-semibold">$193.20</h2>
      </div>
      <div onClick={()=>{
        props.setConfirmRidePanel(true);
      }}  className="flex p-3 mb-2 active:border-2  border-black rounded-xl items-center justify-between ">
        <img
          className="h-10"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className=" ml-2 w-1/2">
          <h4 className="font-medium text-sm">
            MotoGo{" "}
            <span>
              <i className="ri-user-3-fill">2</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">5 mins away</h5>
          <p className="font-medium text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-2xl font-semibold">$93.20</h2>
      </div>
      <div onClick={()=>{
        props.setConfirmRidePanel(true);
      }}  className="flex p-3 mb-2 active:border-2  border-black rounded-xl items-center justify-between ">
        <img
          className="h-10"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className=" ml-2 w-1/2">
          <h4 className="font-medium text-sm">
            AutoGo{" "}
            <span>
              <i className="ri-user-3-fill">3</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">5 mins away</h5>
          <p className="font-medium text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-2xl font-semibold">$150.20</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
