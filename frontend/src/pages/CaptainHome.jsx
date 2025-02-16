import React, { useEffect, useContext, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import ConfirmRidePopUp from "./../components/ConfirmRidePopUp";
import { CaptainDataContext } from "../context/CaptainContext";
import { SocketContext } from "./../context/SocketContext";
import axios from "axios";
const CaptainHome = () => {
  const [ridePopUpPanel, setRidePopUpPanel] = useState(false);
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);
  const [ride, setRide] = useState(null);
  const ridePopUpPanelRef = useRef(null);
  const confirmRidePopUpPanelRef = useRef(null);

  const { socket } = useContext(SocketContext);
  const { captain } = useContext(CaptainDataContext);

  useEffect(() => {
    if (!socket || !captain?._id) return;
    socket.emit("join", {
      userId: captain._id,
      userType: "captain",
    });
    const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          socket.emit("update-location-captain", {
            userId: captain._id,

            location: {
              ltd: position.coords.latitude,
              lng: position.coords.longitude,
            },
          });
        });
      }
    };

    const locationInterval = setInterval(updateLocation, 90000);
    updateLocation();
  }, [socket, captain?._id]);

  socket.on("new-ride", (data) => {
    console.log(data);
    setRide(data);

    setRidePopUpPanel(true);
  });

  async function confirmRide() {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/rides/confirm`,
      {
        rideId: ride._id,
        captainId: captain._id,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    setRidePopUpPanel(false);
    setConfirmRidePopUpPanel(true);
    console.log(response);
  }

  useGSAP(
    function () {
      if (ridePopUpPanel) {
        gsap.to(ridePopUpPanelRef.current, {
          y: 0,
        });
      } else {
        gsap.to(ridePopUpPanelRef.current, {
          y: "100%",
        });
      }
    },
    [ridePopUpPanel]
  );
  useGSAP(
    function () {
      if (confirmRidePopUpPanel) {
        gsap.to(confirmRidePopUpPanelRef.current, {
          y: 0,
        });
      } else {
        gsap.to(confirmRidePopUpPanelRef.current, {
          y: "100%",
        });
      }
    },
    [confirmRidePopUpPanel]
  );
  return (
    <div className="h-screen">
      <div className=" fixed p-6 top-0 w-screen flex items-center justify-between">
        <img
          className="w-16 "
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to="/captain-login"
          className="  h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className=" text-lg font-semibold ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className=" h-3/5 ">
        <img
          className="h-full w-full object-cover"
          src="https://cdn.dribbble.com/users/914217/screenshots/4506553/media/66b3d16f627edc27b44c023e4ec40b28.gif"
          alt=""
        />{" "}
      </div>
      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>
      <div
        ref={ridePopUpPanelRef}
        className="fixed w-full z-10 bottom-0 bg-white  px-3 py-10 pt-12"
      >
        <RidePopUp
          ride={ride}
          setRidePopUpPanel={setRidePopUpPanel}
          setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}
          confirmRide={confirmRide}
        />
      </div>
      <div
        ref={confirmRidePopUpPanelRef}
        className="fixed w-full h-screen z-10 bottom-0 bg-white  px-3 py-10 pt-12"
      >
        <ConfirmRidePopUp
          ride={ride}
          setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}
          setRidePopUpPanel={setRidePopUpPanel}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
