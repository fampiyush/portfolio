import Image from 'next/image';
import Link from "next/link";
import React from "react";
import AboutImg from '../public/assets/about.jpg'

const About = () => {
  return (
    <div id='about' className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>&#47;&#47; I am not your normal developer</p>
          <p className='py-2 text-gray-600'>
            I have spent last 3 years exploring different niche in programming
            from learning cpp to doing DSA but finally choosing the web
            development path after getting my hands on to HTML & CSS during my
            participation in google code in 2019.
          </p>
          <p className='py-2 text-gray-600'>
            From then I started learning
            javascript and then backend technologies like Node JS / Express Js.
            I then started freelancing and have made a number of Web Apps for my
            clients. I am now spending my time building projects with React JS,
            Firebase, and learning new technologies.
        </p>
        <Link href="/#projects">
        <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p>
        </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <Image className='rounded-xl' src={AboutImg} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
