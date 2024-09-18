import React from "react";
import ProjectCard from "./ProjectCard";
import todoly from "./../assets/todoly.png";
import { Link, Element } from "react-scroll";
import appImage from "./../assets/app-react-edited.png"



export default function Projects() {
  return (
    <Element name="projects">
      <div className="flex flex-col items-center text-center gap-20 sm:gap-12 max-w-[2500px]">
        <div className="flex gap-4 flex-col">
          <p className="text-3xl font-bold">Projects</p>
          <p className="text-xl">Some projects I've built</p>
          <hr className="border-0 h-1 bg-green-500 w-4/5 mx-auto mb-4" />
        </div>

        <div className="w-full grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-24">
          <ProjectCard
            image={appImage}
            title="Delivery Route Optimisation App"
            summary="A full stack CRUD Todo app built with PocketBase for backend and Next.js for frontend. I learned API integration, managing data flow, handling authentication, and performing full CRUD operations efficiently across both server and client."
          />
          <ProjectCard
            image={todoly}
            title="Todoly"
            summary="A full stack CRUD Todo app built with PocketBase for backend and Next.js for frontend. I learned API integration, managing data flow, handling authentication, and performing full CRUD operations efficiently across both server and client."
          />
        
        </div>
      </div>
    </Element>
  );
}
