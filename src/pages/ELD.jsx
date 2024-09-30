import { Button, Flowbite } from "flowbite-react";
import React from "react";
import Success from "/truck_n2.png";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { MdOutlinePhone } from "react-icons/md";

const customTheme = {
  button: {
    color: {
      primary:
        "w-[273px] py-2 bg-[#FD560B] text-nowrap rounded-[7px] shadow-[0_4px_10px_rgba(255,255,255,0.3)]",
      secondary:
        "py-2 w-[197px] bg-[#F1F1F1] text-black text-nowrap rounded-[7px] shadow-[0_4px_10px_rgba(255,255,255,0.3)]",
    },
  },
};

function ELD() {
  return (
    <div className="mt-28">
      <div className="text-white">
        <p className="text-lg text-gray-400 mb-4 mt-[60px] font-normal font-sf-pro-display">
          We Keep Your Truck Running, Anytime, Anywhere
        </p>
        <h1 className="text-7xl font-bold font-sf-pro-display">
          Stay Compliant with <br />
          Our <span className="text-[#FD560B]">Top-Ranked ELD </span>
          <br />
          <span className="relative">
            Services
            <img
              src={Success}
              alt="Success background"
              className="absolute translate-y-[-70px] translate-x-[120px]"
            />
          </span>
        </h1>

        <div className="flex items-center gap-2 mt-6">
          <div className="bg-[#6A2709] flex items-center justify-center rounded-full h-6 w-6">
            <span className="bg-[#FD560B] rounded-full w-[14px] h-[14px]"></span>
          </div>
          <p className="text-[#C7C7CC] font-sf-pro-display">
            Our ELD system ensures full compliance with federal regulations,
            giving <br />
            you peace of mind on the road.
          </p>
        </div>

        <Flowbite theme={{ theme: customTheme }}>
          <div className="flex items-center mt-[60px] gap-[26px]">
            <Button color="primary">
              <span className="flex items-center rounded-lg shadow-[0_4px_10px_rgba(255,186,111,0.3)]">
                Get Your ELD Today <FaArrowUpRightFromSquare className="ml-2" />
              </span>
            </Button>
            <Button color="secondary" className="rounded-lg ">
              Request a Free Consultation <MdOutlinePhone style={{color: "black"}} />
            </Button>
          </div>
        </Flowbite>
      </div>
    </div>
  );
}

export default ELD;
