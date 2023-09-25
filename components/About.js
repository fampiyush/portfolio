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
          <p className='py-2 text-[#ecf0f3]'>
            I am a full stack developer with a strong command over both front-end and back-end technologies, allowing me to build complete and scalable applications.
          </p>
          <p className='py-2 text-[#ecf0f3]'>
            I have developed several scalable web/mobile apps from scratch. I am familiar with both SQL and noSQL databases and have worked with aws services. I have also worked at a fintech startup in building their cross platform react native mobile app.
        </p>
        <Link href="/#projects">
        <p className='py-2 text-[#ecf0f3] underline cursor-pointer'>Check out some of my latest projects.</p>
        </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-lg shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <Image className='rounded-xl' src={AboutImg} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
