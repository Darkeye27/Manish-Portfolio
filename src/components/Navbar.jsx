import React, { useState } from 'react'
import { Menu } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
   
  return (
    <nav className="w-full fixed top-0 bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Manish's Portfolio</h1>
      <div className="hidden md:flex gap-6">
        <a href="#about" className="hover:text-gray-300">About</a>
        <a href="#projects" className="hover:text-gray-300">Projects</a>
        <a href="#contact" className="hover:text-gray-300">Contact</a>
      </div>
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <Menu size={28} />
      </button>
      {isOpen && (
        <div className="absolute top-14 right-6 bg-gray-800 p-4 rounded-md flex flex-col gap-4 md:hidden">
          <a href="#projects" className="hover:text-gray-300">Projects</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
