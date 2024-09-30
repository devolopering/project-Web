import React, { useRef } from "react";
import HomeHero from "/truck.svg";
import Success from "/truck_n2.png";
import contact1 from "/contact1.svg";
import contact2 from "/contact2.svg";
import contact3 from "/contact3.svg";
import contact4 from "/contact4.svg";
import form1 from "/form1.svg";
import form2 from "/form2.svg";
import form3 from "/form3.svg";
import form4 from "/form4.svg";
import { Button, Flowbite } from "flowbite-react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import ImgCard from "../components/ImgCard";
import TextCard from "../components/TextCard";
import UserCard from "../components/UserCard";
import Form from "../components/Form";

function Home() {
  const cardText = [
    {
      title: "24/7 Support",
      text: "We’re always here for you, providing round-the-clock assistance, ensuring you’re never left without help.",
    },
    {
      title: "Top-Rated Services",
      text: "Our dispatch and ELD services are designed to keep you compliant and profitable with the highest-paying loads.",
    },
    {
      title: "Fleet Management",
      text: "Efficient fleet management services help you stay organized, safe, and compliant with minimal effort.",
    },
    {
      title: "Industry Partnerships",
      text: "We work with top companies like Amazon and UPS, giving you access to premium loads and opportunities.",
    },
    {
      title: "Proven Results",
      text: "Our clients consistently report increased profits and smoother operations, thanks to our tailored services.",
    },
    {
      title: "Competitive Pricing",
      text: "We offer flexible plans at competitive rates, ensuring you get exceptional value for your investment.",
    },
  ];
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
  const imageCardRef = useRef(null);

  const handleScrollRight = () => {
    if (imageCardRef.current) {
      imageCardRef.current.scrollBy({
        left: imageCardRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const handleScrollLeft = () => {
    if (imageCardRef.current) {
      imageCardRef.current.scrollBy({
        left: -imageCardRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };
  return (
    <div>
<<<<<<< HEAD
    <div className="relative bg-cover bg-right mt-5 pb-24" > 
      <div className="max-w-[1261px] mx-auto px-5 flex items-start"> 
        <div className='text-white'>
          <p className="text-lg text-gray-400 mb-4 mt-[60px] font-normal font-sf-pro-display">
            We Keep Your Truck Running, Anytime, Anywhere 
          </p>
          <h1 className="text-7xl font-bold font-sf-pro-display">
            Efficient & Reliable <br />
            <span className="text-[#FD560B]">Logistics Services</span><br />
            Tailored for Your <br />
            <span className="relative">
              Success
              <img src={Success} alt="Success background" className="absolute translate-y-[-70px] translate-x-[120px]" />
            </span>
          </h1>

          <div className="flex items-center gap-2 mt-6">
            <div className="bg-[#6A2709] flex items-center justify-center rounded-full h-6 w-6">
              <span className="bg-[#FD560B] rounded-full w-[14px] h-[14px]"></span>
            </div>
            <p className="text-[#C7C7CC] font-sf-pro-display">
              We offer comprehensive solutions for all your logistics needs, from transportation <br /> 
              to dispatch and accounting. Experience the J&J Bros advantage today! 
=======
      <div
        className="relative bg-cover bg-right mt-5 pb-24"
        style={{ backgroundImage: `url(${HomeHero})` }}
      >
        <div className="max-w-[1261px] mx-auto px-5 flex items-start">
          <div className="text-white">
            <p className="text-lg text-gray-400 mb-4 mt-[60px] font-normal font-sf-pro-display">
              We Keep Your Truck Running, Anytime, Anywhere
>>>>>>> 79f38e265d8abd6880248284d5f6ed039ad0e805
            </p>
            <h1 className="text-7xl font-bold font-sf-pro-display">
              Efficient & Reliable <br />
              <span className="text-[#FD560B]">Logistics Services</span>
              <br />
              Tailored for Your <br />
              <span className="relative">
                Success
                <img
                  src={Success}
                  alt="Success background"
                  className="absolute translate-y-[-70px] translate-x-[120px]"
                />
              </span>
            </h1>

<<<<<<< HEAD
          <Flowbite theme={{ theme: customTheme }}>
            <div className="flex items-center mt-[60px] gap-[26px]">
              <Button color="primary">
                <span className="flex items-center rounded-lg ">
                  Get Started <FaArrowUpRightFromSquare className="ml-2" /> 
                </span>
              </Button>
              <Button color="secondary" className="rounded-lg ">
                Learn More
              </Button>
=======
            <div className="flex items-center gap-2 mt-6">
              <div className="bg-[#6A2709] flex items-center justify-center rounded-full h-6 w-6">
                <span className="bg-[#FD560B] rounded-full w-[14px] h-[14px]"></span>
              </div>
              <p className="text-[#C7C7CC] font-sf-pro-display">
                We offer comprehensive solutions for all your logistics needs,
                from transportation <br />
                to dispatch and accounting. Experience the J&J Bros advantage
                today!
              </p>
>>>>>>> 79f38e265d8abd6880248284d5f6ed039ad0e805
            </div>

<<<<<<< HEAD
        <div className="relative mt-[82px] ml-[115px]">
          <img src={HomeHero} alt="hero img" />
          <div className="bg-[rgba(255,255,255,0.08)] backdrop-blur-[14px] absolute top-0 left-0 max-w-min flex items-center py-1 gap-1 px-3 rounded">
            <span className="w-[7px] h-[7px] rounded-full bg-[#FD560B]"></span>
            <p className="text-white font-sf-pro-display font-normal text-lg">Dispatching</p> 
          </div>
          
          <div className="bg-[rgba(255,255,255,0.08)] backdrop-blur-[14px] absolute top-4 left-60 max-w-min flex items-center gap-1 py-1 px-3 rounded">
            <span className="w-[7px] h-[7px] rounded-full bg-[#FD560B]"></span>
            <p className="text-white font-sf-pro-display font-normal text-[17px] text-nowrap">ELD Management</p> 
          </div>
          
          <div className="bg-[rgba(255,255,255,0.08)] backdrop-blur-[14px] absolute top-[117px] left-8 max-w-min flex py-1 items-center gap-1 px-3 rounded">
            <span className="w-[12px] h-[12px] rounded-full bg-[#FD560B]"></span>
            <p className="text-white font-sf-pro-display font-normal text-[32px] text-nowrap">ELD Service</p> 
          </div>
          
          <div className="bg-[rgba(255,255,255,0.08)] backdrop-blur-[14px] absolute top-[244px] left-[343px] py-1 max-w-min flex items-center gap-1 px-3 rounded">
            <span className="w-[12px] h-[12px] rounded-full bg-[#FD560B]"></span>
            <p className="text-white font-sf-pro-display font-normal text-[32px]">Fleet</p> 
=======
            <Flowbite theme={{ theme: customTheme }}>
              <div className="flex items-center mt-[60px] gap-[26px]">
                <Button color="primary">
                  <span className="flex items-center rounded-lg shadow-[0_4px_10px_rgba(255,186,111,0.3)]">
                    Get Started <FaArrowUpRightFromSquare className="ml-2" />
                  </span>
                </Button>
                <Button color="secondary" className="rounded-lg ">
                  Learn More
                </Button>
              </div>
            </Flowbite>
>>>>>>> 79f38e265d8abd6880248284d5f6ed039ad0e805
          </div>

          <div className="relative mt-[82px] ml-[115px]">
            <div className="bg-[rgba(255,255,255,0.08)] backdrop-blur-[14px] absolute top-0 left-0 max-w-min flex items-center py-1 gap-1 px-3 rounded">
              <span className="w-[7px] h-[7px] rounded-full bg-[#FD560B]"></span>
              <p className="text-white font-sf-pro-display font-normal text-lg">
                Dispatching
              </p>
            </div>

            <div className="bg-[rgba(255,255,255,0.08)] backdrop-blur-[14px] absolute top-4 left-60 max-w-min flex items-center gap-1 py-1 px-3 rounded">
              <span className="w-[7px] h-[7px] rounded-full bg-[#FD560B]"></span>
              <p className="text-white font-sf-pro-display font-normal text-[17px] text-nowrap">
                ELD Management
              </p>
            </div>

            <div className="bg-[rgba(255,255,255,0.08)] backdrop-blur-[14px] absolute top-[117px] left-8 max-w-min flex py-1 items-center gap-1 px-3 rounded">
              <span className="w-[12px] h-[12px] rounded-full bg-[#FD560B]"></span>
              <p className="text-white font-sf-pro-display font-normal text-[32px] text-nowrap">
                ELD Service
              </p>
            </div>

            <div className="bg-[rgba(255,255,255,0.08)] backdrop-blur-[14px] absolute top-[244px] left-[343px] py-1 max-w-min flex items-center gap-1 px-3 rounded">
              <span className="w-[12px] h-[12px] rounded-full bg-[#FD560B]"></span>
              <p className="text-white font-sf-pro-display font-normal text-[32px]">
                Fleet
              </p>
            </div>

            <div className="bg-[rgba(255,255,255,0.08)] backdrop-blur-[14px] absolute top-[285px] left-[185px] py-1 max-w-min flex items-center gap-1 px-3 rounded">
              <span className="w-[9px] h-[9px] rounded-full bg-[#FD560B]"></span>
              <p className="text-white font-sf-pro-display font-normal text-[24px]">
                Safety
              </p>
            </div>

            <div className="bg-[rgba(255,255,255,0.08)] backdrop-blur-[14px] absolute top-[352px] left-5 max-w-min py-1 flex items-center gap-1 px-3 rounded">
              <span className="w-[7px] h-[7px] rounded-full bg-[#FD560B]"></span>
              <p className="text-white font-sf-pro-display font-normal text-[18px]">
                Updating
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5">
        <SectionTitle
          title="Our Services at a Glance"
          highlightedWord="Services"
          right={<FaChevronRight />}
          left={<FaChevronLeft />}
          text=""
          handleScrollLeft={handleScrollLeft}
          handleScrollRight={handleScrollRight}
        />
        <ImgCard imageCardRef={imageCardRef} />

<<<<<<< HEAD
  <SectionTitle 
     title="Why Choose  J&J Bros?" 
     highlightedWord="J&J Bros?" 
     right={<FaChevronRight />} 
     left={<FaChevronLeft />} 
     text="Key Benefits"
/>
<TextCard cardText={cardText}/>
<SectionTitle 
     title="What Our Clients Say" 
     highlightedWord="Say" 
     right={<FaChevronRight />} 
     left={<FaChevronLeft />} 
     text=""
     handleScrollLeft={handleScrollLeft}
     handleScrollRight={handleScrollRight}
/>
<UserCard imageCardRef={imageCardRef} />
<SectionTitle 
     title="Let’s Get You on the Road" 
     highlightedWord="" 
     right={<FaChevronRight />} 
     left={<FaChevronLeft />} 
     text="Contact us"
/>
  <div className='max-w-[1261px] mx-auto flex justify-between gap-[94px] mt-14 mb-[151px]'>
    <Form/>
    <div className='grid grid-cols-2 gap-[33px] w-full'>
      <div className='flex flex-col items-start'>
        <img src={contact1} alt="contact1" />
        <h3 className='font-sf-pro-display font-bold  text-[31px] mt-[25px] mb-4 text-white '>Email</h3>
        <p className='font-sf-pro-display font-medium text-[21px] text-white'>contact@jjbros.com</p>
=======
        <SectionTitle
          title="Why Choose  J&J Bros?"
          highlightedWord="J&J Bros?"
          right={<FaChevronRight />}
          left={<FaChevronLeft />}
          text="Key Benefits"
        />
        <TextCard cardText={cardText} />
        <SectionTitle
          title="What Our Clients Say"
          highlightedWord="Say"
          right={<FaChevronRight />}
          left={<FaChevronLeft />}
          text=""
          handleScrollLeft={handleScrollLeft}
          handleScrollRight={handleScrollRight}
        />
        <UserCard />
        <SectionTitle
          title="Let’s Get You on the Road"
          highlightedWord=""
          right={<FaChevronRight />}
          left={<FaChevronLeft />}
          text="Contact us"
        />
        <div className="max-w-[1261px] mx-auto flex justify-between gap-[94px] mt-14 mb-[151px]">
          <Form />
          <div className="grid grid-cols-2 gap-[33px] w-full">
            <div className="flex flex-col items-start">
              <img src={contact1} alt="contact1" />
              <h3 className="font-sf-pro-display font-bold  text-[31px] mt-[25px] mb-4 text-white ">
                Email
              </h3>
              <p className="font-sf-pro-display font-medium text-[21px] text-white">
                contact@jjbros.com
              </p>
            </div>
            <div className="flex flex-col items-start">
              <img src={contact2} alt="contact2" />
              <h3 className="font-sf-pro-display font-bold  text-[31px] mt-[25px] mb-4 text-white ">
                Phone
              </h3>
              <p className="font-sf-pro-display font-medium text-[21px] text-white">
                +1-800-555-1234
              </p>
            </div>
            <div className="flex flex-col items-start">
              <img src={contact3} alt="contact3" />
              <h3 className="font-sf-pro-display font-bold  text-[31px] mt-6 mb-4 text-white ">
                Office
              </h3>
              <p className="font-sf-pro-display font-medium text-[21px] text-white">
                123 Logistics Ave, <br /> Dallas, TX 75001
              </p>
            </div>
            <div className="flex flex-col items-start">
              <img src={contact4} alt="contact4" />
              <h3 className="font-sf-pro-display font-bold  text-[31px] mt-[25px] mb-4 text-white ">
                Socials
              </h3>
              <div className="flex items-center gap-[33px]">
                <img src={form2} alt="form2" />
                <img src={form4} alt="form4" />
                <img src={form1} alt="form1" />
                <img src={form3} alt="form3" />
              </div>
            </div>
          </div>
        </div>
>>>>>>> 79f38e265d8abd6880248284d5f6ed039ad0e805
      </div>
    </div>
  );
}

export default Home;
