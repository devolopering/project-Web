import { Button, Flowbite } from 'flowbite-react';
import React from 'react';

function TextCard({ cardText }) {
  const customTheme = {
    button: {
      color: {
        primary: "w-[273px] py-2 bg-[#FD560B] text-nowrap rounded-[7px] shadow-[0_4px_10px_rgba(255,255,255,0.3)]", 
        secondary: "py-2 w-[197px] bg-[#F1F1F1] text-black text-nowrap rounded-[7px] shadow-[0_4px_10px_rgba(255,255,255,0.3)]", 
      },
    },
  };

  return (
    <div className='max-w-[1261px] mx-auto pb-[130px]'>
      <div className='grid grid-cols-1 md:grid-cols-2 mt-[50px] py-[6px] lg:grid-cols-3 gap-4'>
        {cardText && cardText.map((card) => (
          <div
            key={card.id}
            className='pl-8 pt-8 pb-10 rounded-md cursor-pointer transition-all duration-300 bg-[#161618] hover:bg-[#FD560B]'
          >
            <h3 className='text-[30px] font-bold font-sf-pro-display text-white transition-colors duration-300 hover:text-white'>
              {card.title}
            </h3>
            <p className='mt-8 font-sf-pro-display font-normal text-[19px] mr-16 text-[#A6A4A4] transition-colors duration-300 hover:text-white'>
              {card.text}
            </p>
          </div>
        ))}
      </div>
      <Flowbite theme={{ theme: customTheme }}>
        <div className='flex items-center justify-center mt-8'>
          <Button color="primary">
            <span className="flex text-white items-center rounded-lg ">
              Get Started with J&J Bros
            </span>
          </Button>
        </div>    
      </Flowbite>          
    </div>
  );
}

export default TextCard;
