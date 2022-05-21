import React from 'react';
// import Single from '../assets/single.png'
// import Double from '../assets/double.png'
// import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='bg-white px-4 py-5 border-b border-gray-200 sm:px-6'>
      <div className='ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" /> */}
              <h2 className='text-2xl font-bold text-center py-8'>Tanya Gonzalez</h2>
              
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>lorem</p>
                  <p className='py-2 border-b mx-8'>lorem</p>
                  <p className='py-2 border-b mx-8'>lorem</p>
              </div>
              <button className='bg-[#dfc100] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'> Contact</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" /> */}
              <h2 className='text-2xl font-bold text-center py-8'>Ashley Hodge</h2>
           
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>lorem</p>
                  <p className='py-2 border-b mx-8'>lorem</p>
                  <p className='py-2 border-b mx-8'>lorem</p>
              </div>
              <button className='bg-[#dfc100] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Connect</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" /> */}
              <h2 className='text-2xl font-bold text-center py-8'>Don Looney</h2>
              
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>lorem</p>
                  <p className='py-2 border-b mx-8'>lorem</p>
                  <p className='py-2 border-b mx-8'>lorem</p>
              </div>
              <button className='bg-[#dfc100] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Connect</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" /> */}
              <h2 className='text-2xl font-bold text-center py-8'>Paul Shertzinger</h2>
           
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>lorem</p>
                  <p className='py-2 border-b mx-8'>lorem</p>
                  <p className='py-2 border-b mx-8'>lorem</p>
              </div>
              <button className='bg-[#dfc100] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Connect</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;