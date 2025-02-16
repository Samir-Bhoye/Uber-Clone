import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ConfirmRidePopUp = (props) => {
  const [otp, setOtp] = useState('');
  const navigate =useNavigate()
  const submitHandler = async (e) =>{
    e.preventDefault();
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/confirm`,{
      rideId:props.ride._id,
      otp:otp
    },
    {
      headers:{
  Authorization:`Bearer ${localStorage.getItem('token')}`
}
})
if(response.status===200)
{
  props.setConfirmRidePopUpPanel(false);
  props.setRidePopUpPanel(false);
  navigate('/captain-riding')
}
  }
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
      <h3 className="text-2xl font-medium mb-5">Confirm This Ride to Start</h3>
      <div className="flex items-center justify-between mt-4 rounded-lg p-3 bg-yellow-400">
        <div className="flex items-center gap-3 ">
          <img
            className="h-11 w-10 rounded-full object-cover"
            src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
            alt=""
          />
          <h2 className="text-lg font-medium capitalize">{props.ride?.user.fullname.firstname}</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>
      <div className="flex gap-2 flex-col justify-between items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5  p-3 border-b-1">
            <i className="text-lg ri-user-location-fill"></i>
            <div>
              <h3 className="text-lg font-medium">Your Start Point:</h3>
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

        <div className="mt-6 w-full">
          <form
            onSubmit={
              submitHandler
            }
          >
            <input
            value={otp}
            onChange={(e)=>{
              setOtp(e.target.value);
            }}
              className="bg-[#eee] px-6 py-4 font-mono text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter OTP"
            />
            <button
             
              className="w-full mt-5 text-lg flex justify-center bg-green-700 mt-5 text-white font-semibold p-2 rounded-lg"
            >
              Confirm
            </button>
            <button
              onClick={() => {
                props.setConfirmRidePopUpPanel(false);
                props.setRidePopUpPanel(false);
              }}
              className="w-full text-lg bg-red-600 mt-1 text-white font-semibold p-2 rounded-lg"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>{" "}
    </div>
  );
};

export default ConfirmRidePopUp;
