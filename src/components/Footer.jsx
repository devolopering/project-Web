import React from 'react'
import logo from '/logo.svg';
import { Link } from 'react-router-dom';
import instagram from '/Instagram.svg'
import telegram from '/telegram.svg'
import twitter from '/Twitter.svg'
import linkedIn from '/LinkedIn.svg'
import facebook from '/Facebook.svg'

function Footer() {
  return (
    <div className='max-w-[1261px] mx-auto pt-[83px] pb-[57px] px-5  bottom-0  bg-[#070606]'>
        <div className='flex items-start justify-between'>
        <div>
            <img src={logo} alt="logo" />
            <p className='font-sf-pro-display font-normal text-lg text-[#D9D9D9] max-w-[278px] mt-[17.5px] mb-[41px] mr-auto'>Leading Logistics & Transportation Services</p>
            <p className='font-sf-pro-display text-base font-medium opacity-60 text-[#D9D9D9] '>© 2021 Flex. All rights reserved.</p>
        </div>
        <div className='flex items-start gap-[82px] text-nowrap'>
            <ul className='flex flex-col items-start gap-3'>
                <li className='font-medium opacity-60 text-[#D9D9D9] text-2xl'>Navigation</li>
                <li><Link to={"/"} className='text-sm font-sf-pro-display font-normal text-[#D9D9D9]'>Home</Link></li>
                <li><Link to={"#"} className='text-sm font-sf-pro-display font-normal text-[#D9D9D9]'>About us</Link></li>
                <li><Link to={"#"} className='text-sm font-sf-pro-display font-normal text-[#D9D9D9]'>Why us</Link></li>
                <li><Link to={"contact"} className='text-sm font-sf-pro-display font-normal text-[#D9D9D9]'>Contact us</Link></li>
            </ul>
            <ul className='flex flex-col items-start gap-3'>
                <li className='font-medium opacity-60 text-[#D9D9D9] text-2xl'>Services</li>
                <li><Link to={"#"} className='text-sm font-sf-pro-display font-normal text-[#D9D9D9]'>Transportation / Logistics</Link></li>
                <li><Link to={"#"} className='text-sm font-sf-pro-display font-normal text-[#D9D9D9]'>ELD Service</Link></li>
                <li><Link to={"#"} className='text-sm font-sf-pro-display font-normal text-[#D9D9D9]'>Dispatch Service</Link></li>
                <li><Link to={"contact"} className='text-sm font-sf-pro-display font-normal text-[#D9D9D9]'>Safety/Fleet Service</Link></li>
            </ul>
            <ul className='flex flex-col items-start gap-3'>
                <li className='font-medium opacity-60 text-[#D9D9D9] text-2xl'>Contacts</li>
                <li><Link to={"#"} className='text-sm font-sf-pro-display font-normal text-[#D9D9D9]'>+1-800-555-1234</Link></li>
                <li><Link to={"#"} className='text-sm font-sf-pro-display font-normal text-[#D9D9D9]'>contact@jjbros.com</Link></li>
                <li><i className='text-sm font-sf-pro-display font-light  text-[#D9D9D9] text-wrap'>123 Logistics Ave, <br /> Dallas, TX 75001</i></li>
            </ul>
            <div className='flex flex-col items-start gap-3'>
                <h3 className='font-medium opacity-60 text-[#D9D9D9] text-2xl'>Social links</h3>
                <ul className='flex  gap-5 flex-wrap max-w-[128px] ml-auto'>
                <li><Link to={"#"} className='text-sm font-sf-pro-display font-normal text-[#D9D9D9]'><img className='inline-block' src={facebook} alt="facebbok" /></Link></li>
                <li><Link to={"#"} className='text-sm font-sf-pro-display font-normal text-[#D9D9D9]'><img className='inline-block'  src={twitter} alt="twitter" /></Link></li>
                <li><Link to={"#"} className='text-sm font-sf-pro-display font-normal text-[#D9D9D9]'><img className='inline-block'  src={instagram} alt="instagram" /></Link></li>
                <li><Link to={"#"} className='text-sm font-sf-pro-display font-normal text-[#D9D9D9]'><img className='inline-block'  src={linkedIn} alt="linkedin" /></Link></li>
                <li><Link to={"#"} className='text-sm font-sf-pro-display font-normal text-[#D9D9D9]'><img className='inline-block'  src={telegram} alt="telegram" /></Link></li>
                </ul>
            </div>
        </div>
        </div>
      
    </div>
  )
}

export default Footer