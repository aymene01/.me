'use client'

import React, { useState } from 'react'
import { menuItems, socialIcons } from '@/lib/constant'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <h1>Aymene Bousbia</h1>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        {menuItems.map(item => (
          <li key={item.id}>
            <Link to={item.target} smooth={true} duration={500}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        {menuItems.map(item => (
          <li key={item.id} className="py-6 text-4xl">
            <Link onClick={handleClick} to={item.target} smooth={true} duration={500}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {socialIcons.map(icon => (
            <li
              key={icon.id}
              className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-${icon.color}`}
            >
              <a className="flex justify-between items-center w-full text-gray-300" href={icon.href}>
                {icon.label} {icon.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
