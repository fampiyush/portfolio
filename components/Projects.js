import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectItem from "./ProjectItem";
import journalApp from '../pages/journalApp';
import houseapp from "../public/assets/projects/house-marketplace.png";
import GithubFinder from "../public/assets/projects/github-finder.png"
import SupportDesk from "../public/assets/projects/Support-desk.png"
import MoviesTrailer from "../public/assets/projects/Movies-trailer.png"
import JournalApp from "../public/assets/projects/journal-app.png"

const Projects = () => {
  return (
    <div id='projects' className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className='flex items-center w-full md:flex-col md:m-8 mb-8'>
        <div className='relative flex items-center justify-center h-auto md:w-[75%] w-full shadow-lg shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to -[#709dff]'>
            <Image className='rounded-xl group-hover:opacity-10' src={JournalApp} alt='/' height='500px' width='650px' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-wide text-center'>Polaroid Gallery</h3>
                <h3 className='text-lg text-white tracking-wide text-center'>A Journal App</h3>
                <p className='pb-4 pt-2 text-white text-center'>React Native</p>
                <Link href='/journalApp'>
                    <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                </Link>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          
          <ProjectItem
            title="House Marketplace"
            img={houseapp}
            projectUrl="/houseMarketplace"
            tech='React JS'
          />
          <ProjectItem
            title="Github Finder"
            img={GithubFinder}
            projectUrl="/githubFinder"
            tech='React JS'
          />
          <ProjectItem
            title="Support Desk"
            img={SupportDesk}
            projectUrl="/supportDesk"
            tech='React JS'
          />
          <ProjectItem
            title="Movies Trailer"
            img={MoviesTrailer}
            projectUrl="/moviesTrailer"
            tech='React Native'
          />

        </div>
      </div>
    </div>
  );
};

export default Projects;
