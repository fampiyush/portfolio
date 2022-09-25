import Image from "next/image";
import React from "react";
import SkillsItem from './SkillsItem';

const Skills = () => {
  return (
    <div id='skills' className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillsItem linkName='html.png' text='HTML' />
          <SkillsItem linkName='css.png' text='CSS' />
          <SkillsItem linkName='javascript.png' text='JavaScipt' />
          <SkillsItem linkName='react.png' text='React' />
          <SkillsItem linkName='tailwind.png' text='Tailwind' />
          <SkillsItem linkName='node.png' text='Node JS' />
          <SkillsItem linkName='nextjs.png' text='Next JS' />
          <SkillsItem linkName='mongo.png' text='Mongo DB' />
          <SkillsItem linkName='cpp.png' text='C++' />
          <SkillsItem linkName='firebase.png' text='FireBase' />
          <SkillsItem linkName='github1.png' text='Git/Github' />
        </div>
      </div>
    </div>
  );
};

export default Skills;
