import React from 'react';
// import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        {/* <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' /> */}
        <div className='flex flex-col justify-center'>
          <p className='text-[#dfc100] font-bold '>Crime Watch Available</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Search this map for past and current crime reports.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className='bg-black text-[#dfc100] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
          {/* Add map, api and submit crime tip links */}
        </div>
      </div>
    </div>
  );
};

export default Analytics;