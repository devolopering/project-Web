import React from 'react';
import HomeHero from '/truck.png'; 
import Success from '/truck_n2.png'; 
import { Button } from 'flowbite-react';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";


function Home() {
  return (
    <div className="relative">
      <div 
        style={{ backgroundImage: `url(${HomeHero})` }}
        className='bg-cover max-w-[1261px] mx-auto flex items-start justify-between p-10'
      >
        <div className="text-white">
          <p className="text-lg mb-4">We Keep Your Truck Running, Anytime, Anywhere</p>
          <h1 className='text-7xl font-bold'>
            Efficient & Reliable <br /> 
            <span className='text-[#FD560B]'>Logistics Services</span><br /> 
            Tailored for Your <br />
            <span >
              Success
              <img src={Success} alt="Success bg" className='absolute  translate-y-[-70px] translate-x-[120px]' />
            </span>
          </h1>
          <div className='flex items-center gap-2 mt-6'>
            <div className='bg-[#6A2709] flex items-center justify-center rounded-full h-6 w-6'>
              <span className='bg-[#FD560B] rounded-full w-[14px] h-[14px]'></span>
            </div>
            <p className='text-[#C7C7CC]'>
              We offer comprehensive solutions for all your logistics needs, from transportation to dispatch and accounting. Experience the J&J Bros advantage today!
            </p>
            <Button className='flex items-center'>Get Started<FaArrowUpRightFromSquare/></Button>
            <Button></Button>
          </div>
        </div>
        <div>
       
        </div>
      </div>
    </div>
  );
}

export default Home;
