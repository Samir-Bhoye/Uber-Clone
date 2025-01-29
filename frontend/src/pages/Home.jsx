import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocatonSearchPanel";
import VehiclePanel from "./../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";
const Home = () => {
  const [pickup, setPickp] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const vehiclePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);


  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: 24,
          // opacity:1
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          padding: 0,
          // opacity:0
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );
  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehiclePanelRef.current, {
          y: 0,
          // padding: 24,
          // opacity:1
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          y: "100%",
          // padding: 0,
          // opacity:0
        });
      }
    },
    [vehiclePanel]
  );
  useGSAP(
    function () {
      if (confirmRidePanel) {
        gsap.to(confirmRidePanelRef.current, {
          y: 0,
          // padding: 24,
          // opacity:1
        });
      } else {
        gsap.to(confirmRidePanelRef.current, {
          y: "100%",
          // padding: 0,
          // opacity:0
        });
      }
    },
    [confirmRidePanel]
  );
  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
          y: 0,
          // padding: 24,
          // opacity:1
        });
      } else {
        gsap.to(vehicleFoundRef.current, {
          y: "100%",
          // padding: 0,
          // opacity:0
        });
      }
    },
    [vehicleFound]
  );
  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
          y: 0,
          // padding: 24,
          // opacity:1
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          y: "100%",
          // padding: 0,
          // opacity:0
        });
      }
    },
    [waitingForDriver]
  );

  return (
    <div className="h-screen relative  overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5 "
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2022/08/Carbon_Maps_Figure-07.png"
          alt=""
        />
      </div>

      <div className=" flex flex-col h-screen justify-end absolute top-0  w-full">
        <div className="h-[30%] p-5 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className="absolute opacity-1 right-6 top-6 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a Trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full"></div>
            <input
              onClick={(e) => {
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickp(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5"
              type="text "
              placeholder="Add a pick-up location"
            />
            <input
              onClick={(e) => {
                setPanelOpen(true);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className=" bg-white  p-5 h-0">
          <LocationSearchPanel
            // PanelOpen={PanelOpen}
            setPanelOpen={setPanelOpen}
            // vehiclePanel={vehiclePanel}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className="fixed w-full z-10 bottom-0 bg-white translate-y-full px-3 py-12"
      >
        <VehiclePanel
          setConfirmRidePanel={setConfirmRidePanel}
          setVehiclePanel={setVehiclePanel}
        />
      </div>
      <div
        ref={confirmRidePanelRef}
        className="fixed w-full z-10 bottom-0 bg-white translate-y-full px-3 py-10 pt-12"
      >
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
        {/* <ConfirmRide setVehiclePanel={setVehiclePanel} /> */}
      </div>
      <div  
      ref={vehicleFoundRef}     
        className="fixed w-full z-10 bottom-0 bg-white translate-y-full px-3 py-10 pt-12"
      >
        <LookingForDriver  setVehicleFound={setVehicleFound}/>
      </div>
      <div  
      ref={waitingForDriverRef}
        className="fixed w-full z-10 bottom-0 bg-white  px-3 py-10 pt-12"
      >
        <WaitingForDriver waitingForDriver={waitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
