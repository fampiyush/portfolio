import Image from "next/image";
import React from "react";
import House from "../public/assets/projects/house-marketplace.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from 'next/link';

const houseMarketplace = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={House}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">House Marketplace</h2>
          <h3>React JS / Firebase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className='py-2'>
            This app was built using React JS and is hosted on firebase. Users
            are able to list their properties for sale or rent after signing up
            in different currencies. It uses geolocation coding for getting the
            location on map. Customers can contact the landlords using contact
            button which emails the landlord about the customer.
          </p>
          <a href="https://house-market-fampiyush.netlify.app/" target='_blank' rel='noreferrer'>
            <button className="px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-300">Demo</button>
          </a>
          <a href="https://github.com/fampiyush/House-Market"  target='_blank' rel='noreferrer'>
            <button className="px-8 py-2 mt-4  hover:scale-105 ease-in duration-300">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScipt
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Leaflet API
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default houseMarketplace;
