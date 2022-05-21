import React, { useState } from 'react';
import { NavLink , Route, Routes } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Blog from './Blog';
import Home from '../pages/Home';
// import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
// import Sign from './Sign';
// import Login from './Login';
// import About from '../pages/About';
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Hanzai Watchers</h1>
      {/* <ul className='hidden md:flex'> */}
        <NavLink to ='/' > <li className='p-4'>Home</li> </NavLink>
        <NavLink to ='/About'> <li className='p-4'>About </li> </NavLink>
        <NavLink to ='/Blog'><li className='p-4'>Blog</li> </NavLink>
        <NavLink to ='Login'> <li className='p-4'>Login</li> </NavLink>
        <NavLink to ='/Contact'> <li className='p-4'>Contact</li> </NavLink>
      {/* </ul> */}
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'> Hanzai Watchers</h1>
        <NavLink to ='/' > <li className='p-4 border-b border-gray-600'>Home</li>  </NavLink>
        <NavLink to ='/About'> <li className='p-4 border-b border-gray-600'>About</li> </NavLink>
        <NavLink to ='/Blog'> <li className='p-4 border-b border-gray-600'>Blog</li> </NavLink>
        <NavLink to ='Login'> <li className='p-4 border-b border-gray-600'>Login</li> </NavLink>
        <NavLink to ='/Contact'> <li className='p-4'>Contact</li> </NavLink>
      </ul>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Blog' element={<Blog />} />
      </Routes >
    </div>
  );
};

export default Navbar;

