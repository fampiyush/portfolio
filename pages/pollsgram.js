import Image from "next/image";
import Pollsgram from '../public/assets/projects/polls-gram.png';
import { RiRadioButtonFill } from "react-icons/ri";

const pollsgram = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={Pollsgram}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">PollsGram</h2>
          <h3>React / Java (Spring Boot)</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="py-2">
            PollsGram is a full-stack web application that allows users to create, share, and vote on polls. It features a modern, responsive frontend built with React and a robust backend powered by Spring Boot.
          </p>
          <iframe
            src='https://www.youtube.com/embed/VAkng8oGIJM?si=n_WSPfl9UZQeF_bB'
            title='PollsGram Demo'
            className="max-w-[700px] w-full h-[40vh] md:h-[50vh] rounded-lg shadow-lg shadow-gray-400"
            allowFullScreen
          >
          </iframe>
          <a
            href="https://github.com/fampiyush/PollsGram"
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
                <RiRadioButtonFill className="pr-1" /> Java
              </p>
              <p className="text-[#ecf0f3] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Spring Boot
              </p>
              <p className="text-[#ecf0f3] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MySql
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pollsgram;
