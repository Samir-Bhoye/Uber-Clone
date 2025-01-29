import React from "react";

const LocatonSearchPanel = (props) => {
  console.log(props);
  // sammple array for location
  const location = [
    "18B Near samarpan college, boys hostel gandhinagar,Gujarat",
    "19B Near sandiago college, boys hostel ahmedabad,Gujarat",
    "109B Near surat college, kishanagar hostel rajkot,Gujarat",
    "9B Near ahwa college, sabastian hostel dang,Gujarat",
  ];

  return (
    <div>
      {location.map(function (elem, idx) {
        return (
          <div
            key={idx}
            onClick={() => {
              // props.setPickup(elem)
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
            className=" flex items-center border-2 p-3 border-gray-50 active:border-black rounded-xl my-2 gap-4 my-4 justify-start"
          >
            <h2 className="bg-[#eee] flex items-center justify-center  h-8 w-9 rounded-full">
              <i className="ri-map-pin-2-fill "></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        );
      })}
      {/* this is just example */}

      {/* <div className=' flex items-center border-2 p-3 border-gray-50 active:border-black rounded-xl my-2 gap-4 my-4 justify-start'>
        <h2 className='bg-[#eee] flex items-center justify-center  h-8 w-9 rounded-full' ><i className="ri-map-pin-2-fill "></i></h2>
        <h4 className='font-medium'>24b street block near samarpan college</h4>
      </div>
      <div className=' flex items-center border-2 p-3 border-gray-50 active:border-black rounded-xl my-2 gap-4 my-4 justify-start'>
        <h2 className='bg-[#eee] flex items-center justify-center  h-8 w-9 rounded-full' ><i className="ri-map-pin-2-fill "></i></h2>
        <h4 className='font-medium'>24b street block near samarpan college</h4>
      </div>
      <div className=' flex items-center border-2 p-3 border-gray-50 active:border-black rounded-xl my-2 gap-4 my-4 justify-start'>
        <h2 className='bg-[#eee] flex items-center justify-center  h-8 w-9 rounded-full' ><i className="ri-map-pin-2-fill "></i></h2>
        <h4 className='font-medium'>24b street block near samarpan college</h4>
      </div> */}
    </div>
  );
};

export default LocatonSearchPanel;
