import React from "react";
import Backdrop from '../../assets/images/backdrop.gif'
import { InboxIcon, SparklesIcon } from '@heroicons/react/outline'

const Analytics = () => {
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
                    href="https://crimegrade.org/crime-by-zip-code/"
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
                    href="https://www.crimetip.us/"
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
};
export default Analytics;