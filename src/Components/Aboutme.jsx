import React from "react";
import { Link, Element } from "react-scroll";

export default function Aboutme() {
  return (
    <Element name="about">
      <div className="flex flex-col items-center text-center gap-20 sm:gap-12 max-w-[2500px]">
        <div className="flex gap-4 flex-col">
          <p className="text-3xl font-bold">About Me</p>
          <p className="text-xl">A little bit about me</p>
          <hr className="border-0 h-1 bg-green-500 w-4/5 mx-auto mb-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
          <div className="flex flex-col gap-4 bg-[#363636] p-6 rounded-lg shadow-md">
            <p className="text-xl font-bold">What I'm currently learning:</p>
            <ul className="list-disc list-inside">
              <li>Training towards AWS Solution Architect</li>
              <li>Microservice development and deployment</li>
              <li>Testing</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 bg-[#363636] p-6 rounded-lg shadow-md">
            <p className="text-xl font-bold">Outside of Work</p>
            <p>
              In addition to my professional work, I have a keen interest in
              embedded systems and am currently developing a Raspberry Pi-based
              security system for my motorcycle 🏍️. This project aims to enhance
              security through real-time monitoring and tracking, allowing me to
              keep an eye on my bike from anywhere. Outside of my technical
              pursuits, I regularly go to the gym 💪 and enjoy playing
              basketball 🏀.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
}
