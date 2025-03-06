import React from "react";
import { Link } from "react-router-dom";
const Start = () => {
  return (
    <div>
      <div className="bg-cover bg-center  bg-[url('https://images.unsplash.com/photo-1541376936666-59ec998f1afd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHViZXJ8ZW58MHx8MHx8fDA%3D')] h-screen pt-8 flex justify-between flex-col w-full  ">
        <img
          className="w-16 ml-8"
          src="https://imgs.search.brave.com/bBwK_Z-oR73kGRGpc6knS8LknQDarvDU0nMlGxwYhsk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZGl4LmNvbS9sb2dv/LzU5MDc2MC5wbmc"
          alt="no img"
        />
        <div className="bg-white pb-7 py-4 px-4">
          <h2 className="text-3xl font-bold">Get Started With Uber</h2>
          <Link
            to="/login"
            className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5"
          >
            Continue to order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
