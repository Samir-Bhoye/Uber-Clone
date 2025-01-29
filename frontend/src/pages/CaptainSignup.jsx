import React, { useState, useContext, createContext } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Captainsignup = () => {

  const navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  // const [userData, setUserData] = useState({});
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const { captain, setCaptain } = React.useContext(CaptainDataContext);

  const submitHandler = async(e) => {
    e.preventDefault();
    // console.log(firstname,lastname,email,password);
    const captainData={
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle:{
       color:vehicleColor,
       plate:vehiclePlate,
       capacity:vehicleCapacity,
       vehicleType: vehicleType
      }
    };
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`,captainData)
    if (response.status===201){
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
    navigate('/captain-home');
    }
    
    // console.log(userData);
    setfirstName("");
    setlastName("");
    setEmail("");
    setPassword("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  };
  return (
    <div className="p-7 h-screen  flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://imgs.search.brave.com/eA5nj3bNS3Y0-OuLBzhoxAmfSYwG9q5si02flB0HFXs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzAx/L1ViZXItTG9nby0y/MDA5LTUwMHgzMzMu/cG5n"
          alt="img processing"
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">
            What's our Captain Name ?
          </h3>
          <div className="flex gap-4 mb-5">
            <input
              className="bg-[#eeeeee] w-1/2  rounded px-4 py-2  border text-base placeholder:text-sm"
              required
              value={firstName}
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
              type="text"
              placeholder="First Name"
            />
            <input
              className="bg-[#eeeeee] w-1/2  rounded px-4 py-2  border text-base placeholder:text-sm"
              required
              value={lastName}
              onChange={(e) => {
                setlastName(e.target.value);
              }}
              type="text"
              placeholder="Last Name"
            />
          </div>
          <h3 className="text-base font-medium mb-2">
            What's our captain's email ?
          </h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2  border w-full text-base placeholder:text-sm"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-base font-medium  mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2  border w-full text-base placeholder:text-sm"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
          />
            <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>
          <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2   w-full text-lg placeholder:text-base">
            Create Account
          </button>
        </form>
        <p className="text-center">
          Already have a Account?
          <Link to="/captain-login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight ">
          By signing up, you agree to the{" "}
          <span className="underline">Terms of Service </span> and{" "}
          <span className="underline"> Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default Captainsignup;
