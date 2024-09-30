import React from 'react';

function SectionTitle({ title, right, left, highlightedWord, text, handleScrollLeft, handleScrollRight }) {
  const highlightedWordsArray = highlightedWord.split(' ');
  return (
    <div>
      <div className='flex items-center justify-between max-w-[1261px] mx-auto '>
        <div className='flex items-center gap-3'>
          <span className='w-5 h-12 bg-[#FD560B] rounded-tr-[5px] rounded-br-[5px]'></span>
          <h2 className='text-[42px] font-sf-pro-display font-bold'>
          {title.split(' ').map((word, index) => {
              const isHighlighted = highlightedWordsArray.includes(word.trim()); // Har bir so'zni tekshirish
              return (
                <span key={index} className={isHighlighted ? 'text-[#FD560B]' : 'text-white'}>
                  {word}{' '}
                </span>
              );
            })}

          </h2>
        </div>
        <div className='flex items-center gap-7'>
     
          {text ? (
            <span className='text-white font-sf-pro-display font-bold text-[21px] bg-[rgba(255, 255, 255, 0.03)] text-lg'>
              {text}
            </span>
          ) : (
            <>
              <button onClick={handleScrollLeft} className='text-[#FD560B] bg-[rgba(255, 255, 255, 0.03)] text-4xl'>
                {left}
              </button>
              <button onClick={handleScrollRight} className='text-[#FD560B] bg-[rgba(255, 255, 255, 0.03)] text-4xl'>
                {right}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SectionTitle;
