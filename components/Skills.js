import React from "react";
import SkillsItem from './SkillsItem';
import Htm from '../public/assets/skills/html.png'
import Css from '../public/assets/skills/css.png'
import Cpp from '../public/assets/skills/cpp.png'
import Firebase from '../public/assets/skills/firebase.png'
import Github from '../public/assets/skills/github1.png'
import Javascript from '../public/assets/skills/javascript.png'
import postgres from '../public/assets/skills/postgres.png'
import Mongo from '../public/assets/skills/mongo.png'
import Next from '../public/assets/skills/nextjs.svg'
import Node from '../public/assets/skills/node.png'
import Reactjs from '../public/assets/skills/react.png'
import Tailwind from '../public/assets/skills/tailwind.png'
import aws from '../public/assets/skills/aws.png'

const Skills = () => {
  return (
    <div id='skills' className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillsItem linkName={Htm} text='HTML' />
          <SkillsItem linkName={Css} text='CSS' />
          <SkillsItem linkName={Javascript} text='JavaScipt' />
          <SkillsItem linkName={Reactjs} text='React' />
          <SkillsItem linkName={Node} text='Node JS' />
          <SkillsItem linkName={Next} text='Next JS' />
          <SkillsItem linkName={postgres} text='PostgreSQL' />
          <SkillsItem linkName={Mongo} text='Mongo DB' />
          <SkillsItem linkName={Tailwind} text='Tailwind' />
          <SkillsItem linkName={aws} text='AWS' />
          <SkillsItem linkName={Firebase} text='FireBase' />
          <SkillsItem linkName={Cpp} text='C++' />
        </div>
      </div>
    </div>
  );
};

export default Skills;
