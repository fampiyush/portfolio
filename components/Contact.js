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
                <p className="py-4">
                  Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                    <a
                      href="http://linkedin.com/in/fampiyush"
                      target="_blank"
                      rel="noreferrer"
                      title='linkedIn'
                    >
                  <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                  </div>
                    </a>
                    <a
                      href="http://github.com/fampiyush"
                      target="_blank"
                      rel="noreferrer"
                      title='Github'
                    >
                  <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                  </div>
                    </a>
                    <a
                      href="mailto:piyushgupta941d@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      title='Email'
                    >
                  <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlineMail />
                  </div>
                    </a>
                    <a title='resume' href="https://drive.google.com/file/d/1cEzpJgqoU83J-z-9LxydktsZ3s4d96il/view?usp=drive_link" target="_blank" rel="noreferrer">
                  <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsFillPersonLinesFill />
                  </div>
                    </a>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-lg shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form action='https://getform.io/f/3bb4521d-15dd-4bcb-ab9e-cada2ec14733' method='POST'>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      type="text"
                      name='name'
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      phone number
                    </label>
                    <input
                      type="text"
                      name='phone'
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">email</label>
                  <input
                    type="email"
                    name='email'
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">subject</label>
                  <input
                    type="text"
                    name='subject'
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    name='message'
                  ></textarea>
                </div>
                <input type="hidden" name="_okay" style={{display:"none !important"}}></input>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
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
