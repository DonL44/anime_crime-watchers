import React from 'react';
import Backdrop from '../assets/images/backdrop.gif'
// import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div id="about" className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] h-80 mx-auto my-4' src={Backdrop} alt='Backdrop' />
        <div className='flex flex-col justify-center'>
          <p className='text-indigo-600 font-bold '>About: Crime Watch Available</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Search this map for past and current crime reports.</h1>
          <p>
            Want to know what's going on in your neighborhood? Traveling out of town
            and would like to research the area your traveling too? Starting a family  
            and planning on moving to a new location? We're here to help you search for
            crime in areas your interested in. 
          </p>
          <button className='bg-black text-indigo-600 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Find Crime in your Neighborhood</button>
          {/* Add map, api and submit crime tip links */}
          {/* <img
                    className="h-8 w-auto sm:h-80"
                    src={Backdrop}
                    alt="Logo"
                  /> */}
        </div>
      </div>
    </div>
  );
};

export default Analytics;