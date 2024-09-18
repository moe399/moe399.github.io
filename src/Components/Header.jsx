import React from "react";
import { Link, Element } from "react-scroll";
import githubLogo from "./../assets/github-logo.png";
import linkedIn from "./../assets/linkedin.png";

export default function Header() {
  return (
    <div className=" text-white justify-between hidden md:flex min-w-[1000px] max-w-[2500px] md:justify-center">
      <div className="flex gap-8">
        <p>Home</p>

        <Link to="about" smooth={true} duration={500}>
          <p>About</p>
        </Link>
        <Link to="techstack" smooth={true} duration={500}>
          <p>Tech Stack</p>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <a>
            <p>Projects</p>
          </a>
        </Link>

        <p>Contact</p>

        <a
          href="http://github.com/moe399"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={githubLogo} className="h-6" />
        </a>

        <a
          href="http://linkedin.com/in/moe399"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={linkedIn} className="h-6" />
        </a>
      </div>
    </div>
  );
}
