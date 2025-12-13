import React from 'react'
import img2 from '../../src/assets/image/separatorBlack.png'
import { useState } from 'react';
import axios from 'axios';
function Contact() {
  console.log(import.meta.env.VITE_REACT_APP_API_URL);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phoneno: '',
    message: ''
  })
  const [responseMessage, setResponseMessage] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phoneno || !formData.message) {
      setResponseMessage('Please fill in all fields.');
      return;
    }
    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('phoneno', formData.phoneno);
    form.append('message', formData.message);
    try {
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/contact`, form, {
        headers: {
          'Content-Type': 'application/json'
        },
      });
      console.log(response.data);
      setResponseMessage(response.data.message);
    } catch (error) {
      console.error('Error sending message:', error);
      setResponseMessage('An error occurred while sending the message.');
    }
  };
  return (
    <>
    <div className='flex flex-col gap-20 justify-center items-center w-full h-[1000px] lg:h-[1178px]  '> 
   
          <div className='w-[80%] lg:w-[50%]  gap-10 flex flex-col items-center text-center mt-15'>
          <div className='font-bold  text-[14px] lg:text-[30px] uppercase tracking-[0.5rem] border-8 lg:border-4 w-fit py-4 px-10 items-center monsterrant'>Contact </div>
               <p className='opensans text-[15px]'>Swing by for a cup of coffee, or leave me a message</p>
               <div className=''>
                 <img src={img2} alt="" />
               </div>
           </div>
    <div>
    <form onSubmit={handleSubmit} className='flex flex-col gap-5 justify-center items-center monsterrant text-[14px] '>
      <input
        type="text"
        placeholder="ENTER YOUR NAME"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="monsterrant border-l-4 border-b-4 p-2  lg:w-[400px]"
      />
      <input
        type="email"
        placeholder="ENTER YOUR EMAIL"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="border-l-4 border-b-4 p-2 lg:w-[400px]"
      />
      <input
        type="text"
        placeholder="ENTER YOUR PHONENO"
        name="phoneno"
        value={formData.phoneno}
        onChange={handleChange}
        className="border-l-4 border-b-4 p-2 lg:w-[400px]"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        cols="30"
        rows="10"
        placeholder="MESSAGE"
        className="border-l-4 border-b-4  p-2 w-[200px] lg:w-[400px]"
      ></textarea>

      <button type="submit" className="border-l-4 border-r-4 w-fit p-2 cursor-pointer">
        SUBMIT
      </button>

      {responseMessage && <p className="mt-4">{responseMessage}</p>}
    </form>
    </div>
 
      
    </div>
    </>
  )
}

export default Contact