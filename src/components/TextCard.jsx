import { Button, Flowbite, theme } from 'flowbite-react';
import React, { useState } from 'react';

function TextCard({cardText}) {

    const customTheme = {
        button: {
          color: {
            primary: "w-[273px] py-2 bg-[#FD560B] text-nowrap rounded-[7px] shadow-[0_4px_10px_rgba(255,255,255,0.3)]", 
            secondary: "py-2 w-[197px] bg-[#F1F1F1] text-black text-nowrap rounded-[7px] shadow-[0_4px_10px_rgba(255,255,255,0.3)]", 
          },
        },
      };


  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className='max-w-[1261px] mx-auto  pb-[130px]'>
    <div className='grid grid-cols-1 md:grid-cols-2 mt-[50px] py-[6px]  lg:grid-cols-3 gap-4'>
      {cardText.map((card, index) => {
      
        const isSelected = selectedCard === index;
        const bgColor = isSelected ? 'rgba(253, 86, 11, 1)' : 'rgba(22, 22, 24, 1)';
        const titleColor = isSelected ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 1)';
        const textColor = isSelected ? 'rgba(255, 255, 255, 1)' : 'rgba(166, 164, 164, 1)';

        return (
          <div
            key={index}
            className={`pl-8 pt-8 pb-10   rounded-md cursor-pointer transition-all duration-300`}
            style={{ backgroundColor: bgColor }}
            onClick={() => setSelectedCard(index)}
          >
            <h3 className='text-[30px] font-bold font-sf-pro-display' style={{ color: titleColor }}>
              {card.title}
            </h3>
            <p className='mt-8 font-sf-pro-display font-normal text-[19px] mr-16' style={{ color: textColor }}>
              {card.text}
            </p>
          </div>
        );
      })}
    </div>
    <Flowbite theme={{theme:customTheme}}>
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
