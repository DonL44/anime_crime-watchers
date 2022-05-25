import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Sharingan_Triple.png'
import Auth from '../../utils/auth'

const Navbar = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  }

  return (

    
    <header className="bg-indigo-600">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        {Auth.loggedIn() ? (
          <>
          <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link to="/">
              <span className="sr-only">Hanzai Watchers</span>
              <img
                className="h-8 w-auto sm:h-10"
                src={Logo}
                alt="Logo"
              />
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              <Link to="/dashboard" className="text-base font-medium text-white hover:text-gray-300">Dashboard</Link>
                <a href='#about' className="text-base font-medium text-white hover:text-gray-300">About</a>
                <a href='#footer-heading' className="text-base font-medium text-white hover:text-gray-300">Resources</a>
                <a href='#contact' className="text-base font-medium text-white hover:text-gray-300">Contact Us</a>
            </div>
          </div>
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
              <a href="#blog" className="text-base font-medium text-white hover:text-gray-300">
                Blog
              </a>
              <Link
                to="/"
                onClick={logout}
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700">             
                Logout
              </Link>
            </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          <Link to="/dashboard" className="text-base font-medium text-white hover:text-gray-300">Dashboard</Link>
          <a href='#about' className="text-base font-medium text-white hover:text-gray-300">About</a>
          <a href='#footer-heading' className="text-base font-medium text-white hover:text-gray-300">Resources</a>
          <a href='#contact' className="text-base font-medium text-white hover:text-gray-300">ContactUs</a>
          <a href="#blog" className="text-base font-medium text-white hover:text-gray-300">
                Blog
              </a>
              <Link
                to="/"
                onClick={logout}
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700">             
                Logout
              </Link>
        </div>
        </>
        ) : (
          <>
          <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link to="/">
              <span className="sr-only">Hanzai Watchers</span>
              <img
                className="h-8 w-auto sm:h-10"
                src={Logo}
                alt="Logo"
              />
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
                <a href='#about' className="text-base font-medium text-white hover:text-gray-300">About</a>
                <a href='#footer-heading' className="text-base font-medium text-white hover:text-gray-300">Resources</a>
                <a href='#contact' className="text-base font-medium text-white hover:text-gray-300">Contact Us</a>
            </div>
          </div>
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
              <a href="#blog" className="text-base font-medium text-white hover:text-gray-300">
                Blog
              </a>
              <Link
                to="/signup"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700">             
                Sign Up 
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700">             
                Log in 
              </Link>
            </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          <a href='#about' className="text-base font-medium text-white hover:text-gray-300">About</a>
          <a href='#footer-heading' className="text-base font-medium text-white hover:text-gray-300">Resources</a>
          <a href='#contact' className="text-base font-medium text-white hover:text-gray-300">ContactUs</a>
          <a href="#blog" className="text-base font-medium text-white hover:text-gray-300">
                Blog
              </a>
              <Link
                to="/signup"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700">             
                Sign Up 
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700">             
                Log in 
              </Link>
        </div>
        </>
        )}
      </nav>
    </header>
  )
}
export default Navbar;