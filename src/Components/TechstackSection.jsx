import React from "react";
import { Link, Element } from "react-scroll";

import aws from "./../logos/aws.png";
import docker from "./../logos/docker.png";
import java from "./../logos/java.png";
import jenkins from "./../logos/jenkins.png";
import js from "./../logos/js.png";
import kubernetes from "./../logos/kubernetes.png";
import psql from "./../logos/psql.png";
import react from "./../logos/react.png";
import spring from "./../logos/spring.png";
import tailwind from "./../logos/tailwind.png";

export default function TechstackSection() {
  return (
    <Element name="techstack">
      <div className="flex flex-col items-center text-center gap-20 sm:gap-12- lg:min-w-[700px] max-w-[1200px] ">
        <div className="flex gap-4 flex-col">
          <p className="text-3xl font-bold">My Tech Stack</p>
          <p className="text-xl">My favourite technologies to work with</p>
          <hr className="border-0 h-1 bg-green-500 w-4/5 mx-auto mb-4" />
        </div>
        <div className="grid grid-cols-2 w-full md:grid-cols-4  ">
          <div className="flex flex-col items-center gap-4 border- justify-between">
            <img src={aws} alt="AWS Logo" className="h-14" />
            <img src={docker} alt="Docker Logo" className="h-20" />
          </div>
          <div className="flex flex-col items-center gap-4 justify-between">
            <img src={spring} alt="Spring Logo" className="h-16" />
            <img src={kubernetes} alt="Kubernetes Logo" className="h-20" />
          </div>

          <div className="flex flex-col items-center justify-between">
            <img src={java} alt="JavaScript Logo" className="h-20" />
            <img src={react} alt="React Logo" className="h-20" />
          </div>
          <div className="flex flex-col items-center justify-between gap-4">
            <img src={psql} alt="PostgreSQL Logo" className="h-20" />
            <img src={jenkins} alt="Kubernetes Logo" className="h-20" />
          </div>
        </div>
      </div>
    </Element>
  );
}
