import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext";
const Captainlogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {captain,setCaptain} =React.useContext(CaptainDataContext);
  const navigate = useNavigate()
  const submitHandler =async  (e) => {
    e.preventDefault();
    const captain = {
      email: email,
      password: password,
    };
  const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/login`,captain)

  if (response.status === 200) {
    const { data } =  response;
    setCaptain(data.user);
    // console.log("Navigating to home page...");
    localStorage.setItem("token",data.token);
    navigate("/captain-home");
  }
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      {" "}
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
            <h3 className="text-lg font-medium mb-2">What's your Email</h3>
            <input
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2  border w-full text-lg placeholder:text-base"
              required
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="email@example.com"
            />
            <h3 className="text-lg font-medium  mb-2">Enter Password</h3>
            <input
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2  border w-full text-lg placeholder:text-base"
              required
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="Password"
            />
            <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2   w-full text-lg placeholder:text-base">
              Login
            </button>
          </form>
          <p className="text-center">
            Join a fleet?
            <Link to="/captain-signup" className="text-blue-600">
              Register as a Captain
            </Link>
          </p>
        </div>
        <div>
          <Link
            to="/login"
            className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 mb-5  w-full text-lg placeholder:text-base"
          >
            Sign in as User
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Captainlogin;
