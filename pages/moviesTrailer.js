import Image from "next/image";
import React from "react";
import Movies from "../public/assets/projects/Movies-trailer.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const moviesTrailer = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={Movies}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Movies Trailer</h2>
          <h3>React Native</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="py-2">
            This is a native mobile app built using React Native and using The
            Movie Database API. It&apos;s UI is similar to that of Netflix. It
            can show trailer and details of every movie and tv shows. It has
            movies and tv shows categorized on the homepage and has search
            functionality too.
          </p>
          <a
            href="https://expo.dev/artifacts/eas/bLe2iTMjkgVQyvnB7ZUSD9.apk"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-300">
              Download APK
            </button>
          </a>
          <a
            href="https://github.com/fampiyush/Netflix-Clone-React-Native-"
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
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React Native
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> The MovieDB API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
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

export default moviesTrailer;
