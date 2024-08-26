"use client"

import { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function HomeForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
      const [isSubmitting, setIsSubmitting] = useState(false);
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
          const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
      
          if (response.ok) {
            alert('Email sent successfully!');
            setFormData({ name: '', email: '', message: '' });
          } else {
            const errorData = await response.json();
            alert(`Failed to send email: ${errorData.message}`);
          }
        } catch (error) {
          console.error('Error:', error);
          alert('An error occurred. Please try again.');
        } finally {
          setIsSubmitting(false);
        }
      };
      

  return (
    <div className="w-full min-h-screen md:h-screen flex flex-col items-center justify-center bg-zinc-950 text-white relative px-4 md:px-0 py-10 md:py-0">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6 md:mb-0">Get in contact</h2>
      <div className="w-fit h-fit flex justify-center items-center gap-8 text-xl md:text-2xl my-6">
        <a href="https://github.com/Rasayan"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/rasayan-chakraborty-48864b249/"><FaLinkedin /></a>
        <a href="https://www.linkedin.com/in/rasayan-chakraborty-48864b249/"><BsTwitterX /></a>
      </div>
      <form onSubmit={handleSubmit} className="w-full md:w-fit h-fit flex flex-col justify-center items-center gap-6 md:gap-10">
        <div className="w-full md:w-[40em] border relative group rounded-md focus-within:border-amber-400 duration-150">
          <label
            htmlFor="name"
            className="absolute left-2 transition-all duration-300 transform bg-black
              group-focus-within:text-lg group-focus-within:-translate-y-5
              top-1/2 -translate-y-1/2 group-focus-within:top-0"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border-none outline-none bg-transparent w-full py-2 px-2"
          />
        </div>
        <div className="w-full md:w-[40em] border relative group rounded-md focus-within:border-amber-400 duration-150">
          <label
            htmlFor="email"
            className="absolute left-2 transition-all duration-300 transform bg-black
              group-focus-within:text-lg group-focus-within:-translate-y-5
              top-1/2 -translate-y-1/2 group-focus-within:top-0"
          >
            E-Mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border-none outline-none bg-transparent w-full py-2 px-2"
          />
        </div>
        <div className="w-full md:w-[40em] border relative group rounded-md focus-within:border-yellow-400 duration-150">
          <label
            htmlFor="message"
            className="absolute left-2 transition-all duration-300 transform bg-black
              group-focus-within:text-lg group-focus-within:-translate-y-5
              top-5 -translate-y-1/2 group-focus-within:top-0"
          >
            Enter text
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="border-none outline-none bg-transparent w-full py-2 px-2"
          />
        </div>
        <button 
        className="border px-6 py-3 rounded-lg bg-gradient-to-tl from-cyan-500 to-blue-500 border-blue-300 hover:px-8 hover:tracking-wider duration-200 font-semibold"
        disabled={isSubmitting}
        >
            {isSubmitting ? 'Sending...' : 'Send Email!'}
        </button>
      </form>
    </div>
  )
}