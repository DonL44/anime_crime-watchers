import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-indigo-800">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://media.giphy.com/media/Z9PHV1JPBCYUzZu4uX/giphy.gif"
          alt="/"
        />
        <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Become a Samurai!</h1>
        <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
        Enter the Void and help your universe avoid and prevent crime by being a secret agent of peace.
        </p>
      </div>
    </div>
  )
}

export default Hero;