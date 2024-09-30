import React, { useState } from 'react';
import { Button, Flowbite } from 'flowbite-react'; 
import messeag from '/messag.svg'

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Yuborilgan ma\'lumotlar:', formData);
    setFormData({ name: '', email: '' });
  };

  const customTheme = {
    button: {
      color: {
        primary: "w-[273px] py-2 bg-[#FD560B] text-nowrap w-full  text-white  rounded-[7px] shadow-[0_4px_10px_rgba(105, 81, 255, 0.05)]", 
      },
    },
  };

  return (
    <div className="bg-[#161618] p-[42px] rounded-md w-full">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="text-[rgba(255,255,255,0.4)]">Name</label>
        <input 
          type="text" 
          id='name' 
          placeholder='Alex Johnson' 
          value={formData.name} 
          onChange={handleChange} 
          className="bg-[#202022] text-white placeholder:text-gray-400 px-[14px] py-[17px] rounded-lg w-full mb-4 outline-none "
        />
        
        <label htmlFor="email" className="text-[rgba(255,255,255,0.4)]">Email</label>
        <input 
          type="email" 
          id='email' 
          placeholder='youremail@gmail.com' 
          value={formData.email} 
          onChange={handleChange} 
          className="bg-[#202022] text-white placeholder:text-gray-400 px-[14px] py-[17px] outline-none rounded-lg w-full mb-4"
        />
        
        <Flowbite theme={{ theme: customTheme }}>
          <div className="flex items-center mt-[60px] gap-[26px]">
            <Button color="primary" type='submit'>
              <span className="flex items-center text-[18.95px] font-sf-pro-display font-medium gap-2">
              Submit Inquiry
                <img src={messeag} alt="messag icon" />
              </span>
            </Button>
          </div>
        </Flowbite>
      </form>
    </div>
  );
}

export default Form;
