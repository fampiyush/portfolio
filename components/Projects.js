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
import VirtualMeet from "../public/assets/projects/virtual-meet.png"

const Projects = () => {
  return (
    <div id='projects' className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          
          <ProjectItem
            title="Virtual Meet"
            img={VirtualMeet}
            projectUrl="/virtualMeet"
            tech='React / Node JS'
          />
          <ProjectItem
            title="Polaroid Gallery"
            img={JournalApp}
            projectUrl="/journalApp"
            tech='React Native'
          />
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
