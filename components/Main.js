import React from "react";
import { AiOutlineMail } from 'react-icons/ai';
import { BsFile, BsFillPersonLinesFill } from 'react-icons/bs';
import {FaGithub, FaLinkedinIn } from "react-icons/fa"


const Main = () => {
  return (
    <div id='hpme' className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-[#ecf0f3]">
            Let&apos;s build something together
          </p>
          <h1 className="py-4 text-[#ecf0f3]">
            Hi, I&apos;m <span className="text-[#5651e5]">Piyush</span>
          </h1>
          <h1 className="py-2 text-[#ecf0f3]">A Full-Stack Developer</h1>
          <p className="py-4 text-[#ecf0f3] max-w-[70%] m-auto">
            I&apos;m a full stack developer specializing in building and
            designing exceptional digital experiences. Currently, I&apos;m
            focused on building responsive full stack web applications.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a title='linkedIn' href="http://linkedin.com/in/fampiyush" target='_blank' rel='noreferrer'>
            <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-[#fff]">
              <FaLinkedinIn />
            </div>
            </a>
            <a title='Github' href="http://github.com/fampiyush" target='_blank' rel='noreferrer'>
            <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-[#fff]">
              <FaGithub />
            </div>
            </a>
            <a title='Email' href="mailto:piyushgupta941d@gmail.com" target='_blank' rel='noreferrer'>
            <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-[#fff]">
              <AiOutlineMail />
            </div>
            </a>
            <a title='resume' href="https://drive.google.com/file/d/1cEzpJgqoU83J-z-9LxydktsZ3s4d96il/view?usp=drive_link" target='_blank' rel='noreferrer'>
            <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-[#fff">
              <BsFillPersonLinesFill />
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
