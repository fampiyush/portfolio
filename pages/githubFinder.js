import Image from "next/image";
import React from "react";
import Github from "../public/assets/projects/github-finder.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const githubFinder = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={Github}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Github Finder</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="py-2">
            This app was built using React JS, Tailwind for styling and is
            hosted on firebase. Users can search for any account on github and
            get their full bio, followers, following and their latest
            repositories with link to them.
          </p>
          <a
            href="https://github-finder-fampiyush.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-300">
              Demo
            </button>
          </a>
          <a
            href="https://github.com/fampiyush/Github_Finder"
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
                <RiRadioButtonFill className="pr-1" /> JavaScipt
              </p>
              <p className="text-[#ecf0f3] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
              <p className="text-[#ecf0f3] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-[#ecf0f3] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Github API
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default githubFinder;
