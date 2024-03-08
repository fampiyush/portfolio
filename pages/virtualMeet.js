import Image from "next/image";
import React from "react";
import VirtualMeet from "../public/assets/projects/virtual-meet.png";
import { RiRadioButtonFill } from "react-icons/ri";

const virtualMeet = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={VirtualMeet}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Virtual Meet</h2>
          <h3>React JS / Node JS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="py-2">
            This web app is built using react-three-fiber and three js. It is a
            virtual meet app where users can create rooms and join rooms. It
            uses webRTC for video and audio calling. It also has a chat feature
            where users can chat with each other and also sharing screen
            feature.
          </p>
          <a
            href="https://meet.piyushg.com/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-300">
              Demo
            </button>
          </a>
          <a
            href="https://github.com/fampiyush/virtual-meet"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4  hover:scale-105 ease-in duration-300">
              Code
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="text-[#ecf0f3] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-[#ecf0f3] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React-three-fiber
              </p>
              <p className="text-[#ecf0f3] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Three.js
              </p>
              <p className="text-[#ecf0f3] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Node JS
              </p>
              <p className="text-[#ecf0f3] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default virtualMeet;
