import React from "react";
import Image from "next/image";
import ContactImg from "../public/assets/contact.jpg";
import { AiOutlineMail } from "react-icons/ai";
import { BsFile, BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-lg shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Piyush Gupta</h2>
                <p>Full Stack Developer</p>
                <p className="py-2">Contact me and let&apos;s talk.</p>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-lg shadow-gray-400 rounded-xl lg:p-4 flex flex-col justify-center">
            <div className="p-4">
              <div className="flex-col text-center">
                <p className="uppercase pt-2 text-lg">Connect With Me :</p>
                <p className="mt-4">
                  Email:{" "}
                  <a
                    href="mailto:piyushgupta941d@gmail.com"
                    className="underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    piyushgupta941d@gmail.com
                  </a>
                </p>
                <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                  <a
                    href="http://linkedin.com/in/fampiyush"
                    target="_blank"
                    rel="noreferrer"
                    title="linkedIn"
                  >
                    <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="http://github.com/fampiyush"
                    target="_blank"
                    rel="noreferrer"
                    title="Github"
                  >
                    <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                  <a
                    href="mailto:piyushgupta941d@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    title="Email"
                  >
                    <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                  </a>
                  <a
                    title="resume"
                    href="https://drive.google.com/file/d/104NE8PRPL_C40IKSWLksHn7qtMT4CJsp/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsFillPersonLinesFill />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-md shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
