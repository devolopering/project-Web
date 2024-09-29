import React from 'react';
import HomeHero from '/truck.svg'; 
import Success from '/truck_n2.png'; 
import { Button, Flowbite } from 'flowbite-react'; 
import { FaArrowUpRightFromSquare } from "react-icons/fa6"; 

function Home() {
  
  const customTheme = {
    button: {
      color: {
        primary: "w-[273px] py-2 bg-[#FD560B] text-nowrap rounded-[7px]", 
        secondary: "py-2 w-[197px] bg-[#F1F1F1] text-black text-nowrap rounded-[7px]", 
      },
    },
  };

  return (
    <div className=" w-[100%] bg-cover  bg-left "  style={{ backgroundImage: `url(${HomeHero})` }}> 
      <div className="max-w-[1261px] mx-auto px-5 flex items-center "> 
        <div className="flex items-start">
          
          
          <div className="text-white">
            <p className="text-lg mb-4">
              We Keep Your Truck Running, Anytime, Anywhere 
            </p>
            <h1 className="text-7xl font-bold">
              Efficient & Reliable <br />
              <span className="text-[#FD560B]">Logistics Services</span><br />
              Tailored for Your <br />
              <span>
                Success
                <img src={Success} alt="Success bg" className="absolute translate-y-[-70px] translate-x-[120px]" />
              
              </span>
            </h1>

          
            <div className="flex items-center gap-2 mt-6">
              <div className="bg-[#6A2709] flex items-center justify-center rounded-full h-6 w-6">
                <span className="bg-[#FD560B] rounded-full w-[14px] h-[14px]"></span>
              </div>
              <p className="text-[#C7C7CC]">
                We offer comprehensive solutions for all your logistics needs, from transportation <br /> 
                to dispatch and accounting. Experience the J&J Bros advantage today! 
              </p>
            </div>

      
            <Flowbite theme={{ theme: customTheme }}>
              <div className="flex items-center mt-[60px] gap-[26px]">
                <Button color="primary">
                  <span className="flex items-center rounded-lg shadow-[0_4px_10px_rgba(255,186,111,0.3)]">
                    Get Started <FaArrowUpRightFromSquare className="ml-2" /> 
                  </span>
                </Button>
                <Button color="secondary" className="rounded-lg shadow-[0_4px_10px_rgba(255,255,255,0.3)]">
                  Learn More
                </Button>
              </div>
            </Flowbite>
          </div>

         
          <div
            className="relative "
          >
            
            <div className="bg-[rgba(255,255,255,0.08)] absolute top-0 left-0 max-w-min flex items-center gap-1 px-3 rounded">
              <span className="w-[7px] h-[7px] rounded-full bg-[#FD560B]"></span>
              <p className="text-white text-lg">Dispatching</p> 
            </div>
            
            <div className="bg-[rgba(255,255,255,0.08)] absolute top-4 left-60 max-w-min flex items-center gap-1 px-3 rounded">
              <span className="w-[7px] h-[7px] rounded-full bg-[#FD560B]"></span>
              <p className="text-white text-[17px] text-nowrap">ELD Management</p> 
            </div>
            
            <div className="bg-[rgba(255,255,255,0.08)] absolute top-[117px] left-8 max-w-min flex items-center gap-1 px-3 rounded">
              <span className="w-[12px] h-[12px] rounded-full bg-[#FD560B]"></span>
              <p className="text-white text-[32px] text-nowrap">ELD Service</p> 
            </div>
            
            <div className="bg-[rgba(255,255,255,0.08)] absolute top-[244px] left-[343px] max-w-min flex items-center gap-1 px-3 rounded">
              <span className="w-[12px] h-[12px] rounded-full bg-[#FD560B]"></span>
              <p className="text-white text-[32px]">Fleet</p> 
            </div>

            <div className="bg-[rgba(255,255,255,0.08)] absolute top-[285px] left-[185px] max-w-min flex items-center gap-1 px-3 rounded">
              <span className="w-[9px] h-[9px] rounded-full bg-[#FD560B]"></span>
              <p className="text-white text-[24px]">Safety</p> 
            </div>
            
            <div className="bg-[rgba(255,255,255,0.08)] absolute top-[352px] left-5 max-w-min flex items-center gap-1 px-3 rounded">
              <span className="w-[7px] h-[7px] rounded-full bg-[#FD560B]"></span>
              <p className="text-white text-[18px]">Updating</p> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
