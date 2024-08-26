"use client"
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-screen h-fit border-b border-b-white fixed top-0 flex justify-between items-center z-50 text-white backdrop-blur-md px-4 md:px-8" ref={menuRef}>
      <a href="/" className="text-xl font-semibold my-2">razz</a>
      
      {/* Hamburger menu for mobile */}
      <button 
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Desktop menu */}
      <ul className="hidden md:flex justify-center items-center gap-5">
        <li className="text-lg font-semibold relative"><a href="#" className="hover:tracking-widest px-2 hover:px-1 duration-200">Home</a></li>
        <li className="text-lg font-semibold relative"><a href="#" className="hover:tracking-widest px-2 hover:px-1 duration-200">About</a></li>
        <li className="text-lg font-semibold relative"><a href="#" className="hover:tracking-widest px-2 hover:px-[0.30rem] duration-200">Work</a></li>
        <li className="text-lg font-semibold relative"><a href="#" className="hover:tracking-widest px-2 hover:px-[0.1rem] duration-200">Contact</a></li>
      </ul>

      {/* Mobile menu */}
      <div 
        className={`absolute top-full left-0 right-0 bg-zinc-900 border-b border-white md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center py-4">
          <li className="w-full"><a href="#" className="block py-2 px-4 text-center hover:bg-zinc-800 transition duration-200">Home</a></li>
          <li className="w-full"><a href="#" className="block py-2 px-4 text-center hover:bg-zinc-800 transition duration-200">About</a></li>
          <li className="w-full"><a href="#" className="block py-2 px-4 text-center hover:bg-zinc-800 transition duration-200">Work</a></li>
          <li className="w-full"><a href="#" className="block py-2 px-4 text-center hover:bg-zinc-800 transition duration-200">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}