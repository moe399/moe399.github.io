import React from "react";
import linkIcon from "./../assets/link-16.png";
import githubLogo from "./../assets/github-logo.png";

export default function ProjectCard(props) {
  return (
    <div className="rounded-xl bg-[#363636] w-full pb-6 max-w-[500px]">
      <img
        src={props.image}
        className="rounded-t-xl w-full h-64 object-cover"
      />

      <div className="rounded-b-xl flex flex-col gap-6 py-4 px-4  items-start">
        <p className="text-xl items-start">{props.title}</p>
        <p className="text-start">{props.summary}</p>
      </div>
      <div className="flex justify-around py-2 px-2 items-start mt-8">
        <div className="flex gap-2 items-center">
          <img src={linkIcon} />
        </div>
        <div className="flex gap-2 items-center">
          <img src={githubLogo} className="h-6" />
        </div>
      </div>
    </div>
  );
}
