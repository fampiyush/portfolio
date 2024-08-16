import Image from "next/image";
import React from "react";
import JournalApp from "../public/assets/projects/journal-app.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import qrAndroid from '../public/assets/projects/qr-android.png'
import qrIos from '../public/assets/projects/qr-ios.png'

const journalApp = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={JournalApp}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Polaroid Gallery</h2>
          <h3>React Native</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="py-2">
            This is a hybrid mobile app built using React Native and using
            NodeJS and expressJS as backend. AWS Services are used for various
            tasks like S3 bucket for image storage, rds for postgreSQL database
            and AWS ec2 for hosting backend. It is a modern journal app where
            you can create collections and then add slides with images and
            texts. I also intent to create sharing features and other users can comment, basically social media of journals.
          </p>
          <a
            href="https://github.com/fampiyush/JournalApp-Frontend"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4  hover:scale-105 ease-in duration-300">
              Code frontend
            </button>
          </a>
          <a
            href="https://github.com/fampiyush/JournalApp-Backend"
            target="_blank"
            rel="noreferrer"
            className='ml-4'
          >
            <button className="px-8 py-2 mt-4  hover:scale-105 ease-in duration-300">
              Code backend
            </button>
          </a>

          <h2 className='mt-8'>How to use :</h2>
          <div className='md:flex md:flex-row md:mr-16 mt-8 mb-8'>
            <div>
              <h3>For Android Users -</h3>
              <ol className='ml-4 mt-4'>
                <li>1. Download Expo app from play store</li>
                <li>2. Scan this QR Code</li>
                <Image src={qrAndroid} alt='qrAndroid' height={300} width={300} />
              </ol>
            </div>
            <div className='mt-8 md:mt-0 md:ml-16'>
              <h3>For IOS Users -</h3>
              <ol className='ml-4 mt-4'>
                <li>1. Download Expo Go app from App store</li>
                <li>2. Scan this QR Code</li>
                <Image src={qrIos} alt='qrIos' height={300} width={300} />
              </ol>
            </div>
          </div>

        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="text-[#ecf0f3]py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React Native
              </p>
              <p className="text-[#ecf0f3]py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-[#ecf0f3]py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript/TypeScript
              </p>
              <p className="text-[#ecf0f3]py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> AWS Services
              </p>
              <p className="text-[#ecf0f3]py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NodeJS
              </p>
            </div>
          </div>
        </div>
        {/* <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link> */}
      </div>
    </div>
  );
};

export default journalApp;
