import React from "react";

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-indigo-600 font-bold p-2 text-3xl'>
          Hanzai Watchers
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
        Become a Samurai!
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Enter the Void and help your universe avoid and prevent crime by being a secret agent of peace.
          </p>
        </div>
        {/* <button className='bg-indigo-600 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Sign Up</button> */}
      </div>
    </div>
  );
}

export default Hero;