// import React from 'react';
// import Backdrop from '../assets/images/backdrop.gif'
// // import Laptop from '../assets/laptop.jpg';

// const Search = () => {
//   return (
//     <div id="about" className='w-full bg-white py-16 px-4'>
//       <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
//         <img className='w-[500px] h-80 mx-auto my-4' src={Backdrop} alt='Backdrop' />
//         <div className='flex flex-col justify-center'>
//           <p className='text-indigo-600 font-bold '>About: Crime Watch Available</p>
//           <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Search this map for past and current crime reports.</h1>
//           <p>
//             Want to know what's going on in your neighborhood? Traveling out of town
//             and would like to research the area your traveling too? Starting a family  
//             and planning on moving to a new location? We're here to help you search for
//             crime in areas your interested in. 
//           </p>
//           <button className='bg-black text-indigo-600 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Find Crime in your Neighborhood</button>
//           {/* Add map, api and submit crime tip links */}
//           {/* <img
//                     className="h-8 w-auto sm:h-80"
//                     src={Backdrop}
//                     alt="Logo"
//                   /> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Search;

import { InboxIcon, SparklesIcon } from '@heroicons/react/outline'
import Backdrop from '../assets/images/backdrop.gif'

export default function Example() {
  return (
    <div id="about" className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                  <InboxIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Stay on top of crime in your area
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                Want to know what's going on in your neighborhood? Traveling out of town
                and would like to research the area your traveling too? Starting a family
                and planning on moving to a new location? We're here to help you search for
                crime in areas your interested in.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Search
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;Having a peace of mind means everything to me, and I want to be able to provide a way
                    for others to have that with this application.&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-6 w-6 rounded-full"
                        src="https://avatars.githubusercontent.com/u/95392451?v=4"
                        alt=""
                      />
                    </div>
                    <div className="text-base font-medium text-gray-700">Ashley Hodge, Back-End Specialist</div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://c.tenor.com/rX0X1fGqGasAAAAC/crime-scene-investigation.gif"
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                  <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Alerts
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Keep up with the level of crime no matter where you are. If you see anything supicious
                  report it. You never know who you might be saving a life by reporting supicious activity. 
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Submit Tips
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;With all the crime you hear about on the news I thought wouldn't it be conveninet 
                    if you got a alert that something was happening near you.&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-6 w-6 rounded-full"
                        src="https://avatars.githubusercontent.com/u/95047881?v=4"
                        alt=""
                      />
                    </div>
                    <div className="text-base font-medium text-gray-700">Paul Shertzinger, Back-End Specialist</div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src={Backdrop}
                alt="Criminal Running Away"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}