import Image from "next/image";
import React from "react";
import Rlox from "../public/assets/projects/rlox.png"
import { RiRadioButtonFill } from "react-icons/ri";

const virtualMeet = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={Rlox}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">RLox</h2>
          <h3>Rust</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="py-2">
            A Rust implementation of the Lox programming language interpreter
            from the book Crafting Interpreters.<br />
          </p>
          <h3>Features</h3>
          <ul className="list-disc pl-4 py-2">
            <li>Arithmetic operators (+, -, *, /)</li>
            <li>Comparison operators (&lt;, &gt;, &lt;=, &gt;=, ==)</li>
            <li>Logical operators (and, or, !)</li>
            <li>Variables</li>
            <li>Functions</li>
            <li>Conditional statements (if, if-else)</li>
            <li>Loops (for, while)</li>
            <li>Classes</li>
            <li>Inheritance</li>
          </ul>
          <a
            href="https://github.com/fampiyush/rlox"
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
                <RiRadioButtonFill className="pr-1" /> Rust
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default virtualMeet;
