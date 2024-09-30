import React from 'react';
import { Link } from 'react-router-dom';
import arr from '/arr.svg'

function ImgCard({imageCardRef}) {
  const cardData = [
    {
      title: 'Transportation / Logistics',
      link: 'Explore Transportation Services',
      img: 'https://s3-alpha-sig.figma.com/img/521a/44f0/4118d25acbf1c5ffc169aea7fc01817f?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CaRsTL~FrcQ3W~0AFpxtLuIwInCYWvoauxj38l8a55UJ0ziNGLET7RLmFW3rGW~q5eUpFiw~TorGH8mZQeOFQ2LyqVxjnAgvgDwDU0Zi8USDKZ1ajmcMYQDyYJmRkAlgHoF4TjERupqPCaBjMeJOTjjO9ed1CRnjN~Qyr8MAkHbOd75GacQ~fJcwJM58vh7-5zr9siy4epTomkkFqE0GDGut6udN1EczoGe2p3oPD4uMx~eVJcqtmANvSsCAp5khZfPeEyJ6-i7Kvv21ZPhXuH0-9AFIzHdWB-ybRw4vfkgAkWIpuhVzorD7fAEGR7QWujrrn~5XnPo3021N7JRDTA__',
    },
    {
      title: 'Dispatch Service',
      link: 'Explore Dispatch Services',
      img: 'https://s3-alpha-sig.figma.com/img/29ec/539a/dfe2ef82447560be96be8f9d6e80c72d?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZjR~fk-KIGZAwa4WzjkCdpLahCD6WDNUMOwbA9VXonExxWe1jSspkL2AH-FcO7VpZht7qX51lB6xpMxDbWeQxPcBW20vw3WdEaYFLtc8EtwbQfeEEtNQzidFZy5IFx-oODAnFYwjuUDd0WZHnxaew3QvpuqzjDQ3rwHoE9YsR-PznLZZotmjY2qo65r3rb~mKJ8JrOjEPbtlE0A58cZN0NNsWx6-MY~9JdDo-JuZ1EwSnrsybiT5zsFUjXvSaRBypXu2SEE3OPBNGbuUrbcETgMAR9d7H7Gbt5MddGOXNskaXkqcqUQ9uOI2r8qRrK5FYkHEm-qYmoh0Aop4n-KghQ__',
    },
    {
      title: 'ELD Service',
      link: 'Explore ELD Services',
      img: 'https://s3-alpha-sig.figma.com/img/e74c/1906/983ce3c1a551f1c6183bd87eb263ef86?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bqHAYJwKtxVAeWSX6~1X~IxmS3OzgSmSfKxOwta9Da49Jy1~jkNlNbzr4iTFYjxsVogPGhbAPZfTm3a5oFXZ1JxLj8USeTaXAKvgh~hZHL0MY8DvDfglGwE0aCw8h1kItWKq9cZeDVrHa1-GdJQXOn45nO-goCc25fSB46U3FzxC2HbnM0isjpG1W8foJ8Z4sEvWqLNAd52pwCrUNfZj0JY2LxI9MwvwUuuLoMkb4OotrrpYNU8WwaQFM6eeu5gTWFzuXzyiJgV1bCKmFRvhuOKLbVH7c-zHV67JTk9vHeZqffSK6HB4VoMgHA41gX~H1CPpxEwEGfLhmqMtN1Q1cQ__',
    },
    {
      title: 'Accounting Service',
      link: 'Explore Accounting Services',
      img: 'https://s3-alpha-sig.figma.com/img/7fe4/7f23/bc02619c8bd091654078f5034a1ccb4e?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DzyBzfNbQP1mHgoDgJ1oONfneLRCIe~yCkBfVMWadmMNTc4Ip8kBiTzQ8UMp1R-Cxi7zc~DMVv~WuUu4ENslG-zoP~gmdvDeROSXn68d1h7E0q7B05HYBJFG1nR2u9eUlX8~SEhicL0yNxZE4PJtsdEQYOtGvVES~gMf3GanbuBZ2Grk~si0o1g90UdRSTbN4XlfPNZN1M2IgUNu1R-x0BhbN2qtzIpZ-OHZre4kQXEQ4V21UF0DXPRYVZZTh9n3axzWoaabEwDYaiAw0Z-OUZydHfa7so2-SAQRTQoQWXdA0DdR12Rxb7J1u02PZvV32ULlu-gikuleLo6CpYoIMQ__',
    },
    {
      title: 'Safety & Fleet Service',
      link: 'Explore Safety & Fleet Services',
      img: 'https://s3-alpha-sig.figma.com/img/5528/5793/7c8ba08779630454380ba449cb42fc3b?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OdvjdT-sNOpsvtYfi4MHVJI4gHNmqNEKXnEnm5ID5ox4zrLENcsZ1kb8eOxg95oQuuBxr0YCWajytzSv9UOANwDfSi5JuxPiIBPrZVMqrvHsXZJ5XvwBwbhkKX5BIfMEVTJOrK-ry-kI90vqSGqAMgeiuCVpcTAOQ6Uv6w6AhifyxXyhCWxLNhT4ndgU3R2~bbMw1Jg0Vh1CbIHgIv7vzcdk1sGfciDFIcY~tZSnzCp3-UrnH~VQKLHu5yCGbIXjuouTzb~1LZqJ7ziE000qHrd6QAUNdUL1EwxcmholZoI23aWq6wLSjQgl3QGZSkN3CIqa17wQ8~4~uS0Ci1TKtA__',
    },
  ];

  return (
    <div ref={imageCardRef} className='max-w-[1261px] mx-auto w-full overflow-x-scroll scrollbar-hide mt-10 pb-[130px]'>
     <div className="flex items-center gap-5 w-full">
      {cardData.map((card, index) => (
        <div key={index} className="relative max-w-xs rounded-lg shadow-lg w-full ">
          <div style={{ backgroundImage: `url(${card.img})` }} className="h-[350px] w-[300px] bg-cover bg-center flex flex-col items-center justify-between px-[5px] pt-[5px] pb-[21px] ">
            <div className="bg-[rgba(255,255,255,0.2)] backdrop-blur-[24.1px] flex items-center pl-[30px] py-[15px]   gap-1 px-3 rounded w-full">
              <p className="text-white text-[21px] text-nowrap text-center font-sf-pro-display font-normal">{card.title}</p>
            </div>
            <div className='flex items-center justify-between max-w-[250px] mx-auto w-full'> 
            <Link to="/" className=" text-center text-white border-b-2 border-white font-medium font-sf-pro-display ">
            {card.link}
          </Link>
              <img src={arr} alt="arrow rounded" />
          </div>
          </div>
        </div>
      ))}
    </div>
    </div>
   
  );
}

export default ImgCard;
