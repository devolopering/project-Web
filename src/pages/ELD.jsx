import { Button, Flowbite } from "flowbite-react";
import React from "react";
import Success from "/truck_n2.png";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import HeroImage from "/image.png";

const customTheme = {
  button: {
    color: {
      primary:
        "w-[273px] py-2 bg-[#FD560B] text-nowrap rounded-[7px] shadow-[0_4px_10px_rgba(255,255,255,0.3)]",
      secondary:
        "py-2 bg-[#F1F1F1] text-black text-nowrap rounded-[7px] shadow-[0_4px_10px_rgba(255,255,255,0.3)]",
    },
  },
};

function ELD() {
  return (
    <div
      className="bg-cover pb-11"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="max-w-[1220px] m-auto flex">
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
                <span className="flex items-center rounded-lg ">
                  Get Your ELD Today{" "}
                  <FaArrowUpRightFromSquare className="ml-2" />
                </span>
              </Button>
              <Button color="secondary" className="rounded-lg px-11">
                <span className="flex items-center gap-2">
                  Request a Free Consultation
                  <LuPhoneCall color="black" />
                </span>
              </Button>
            </div>
          </Flowbite>
        </div>

        <div className="relative mt-[82px] ml-[115px]">
          <div className="bg-[rgba(255,255,255,0.08)] opacity-[40%] backdrop-blur-[14px] absolute top-0 left-0 max-w-min flex items-center py-1 gap-1 px-3 rounded">
            <span className="w-[7px] h-[7px] rounded-full bg-[#FD560B]"></span>
            <p className="text-white font-sf-pro-display font-normal text-lg">
              Dispatching
            </p>
          </div>

          <div className="bg-[rgba(255,255,255,0.08)] opacity-[40%] backdrop-blur-[14px] absolute -top-4 left-[365px] max-w-min flex items-center gap-1 py-1 px-3 rounded">
            <span className="w-[7px] h-[7px] rounded-full bg-[#FD560B]"></span>
            <p className="text-white font-sf-pro-display font-normal text-[17px] text-nowrap">
              ELD Management
            </p>
          </div>

          <div className="bg-[rgba(255,255,255,0.08)] opacity-[40%] backdrop-blur-[14px] absolute top-[300px] left-8 max-w-min flex py-1 items-center gap-1 px-3 rounded">
            <span className="w-[12px] h-[12px] rounded-full bg-[#FD560B]"></span>
            <p className="text-white font-sf-pro-display font-normal text-[32px] text-nowrap">
              ELD Service
            </p>
          </div>

          <div className="bg-[rgba(255,255,255,0.08)] opacity-[40%] backdrop-blur-[14px] absolute top-[244px] left-[413px] py-1 max-w-min flex items-center gap-1 px-3 rounded">
            <span className="w-[12px] h-[12px] rounded-full bg-[#FD560B]"></span>
            <p className="text-white font-sf-pro-display font-normal text-[32px]">
              Fleet
            </p>
          </div>

          <div className="bg-[rgba(255,255,255,0.08)] opacity-[40%] backdrop-blur-[14px] absolute top-[385px] left-[385px] py-1 max-w-min flex items-center gap-1 px-3 rounded">
            <span className="w-[9px] h-[9px] rounded-full bg-[#FD560B]"></span>
            <p className="text-white font-sf-pro-display font-normal text-[24px]">
              Safety
            </p>
          </div>

          <div className="bg-[rgba(255,255,255,0.08)] opacity-[40%] backdrop-blur-[14px] absolute top-[382px] -left-32 max-w-min py-1 flex items-center gap-1 px-3 rounded">
            <span className="w-[7px] h-[7px] rounded-full bg-[#FD560B]"></span>
            <p className="text-white font-sf-pro-display font-normal text-[18px]">
              Updating
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ELD;
