import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/solid";
import React from "react";
import { FaGithub } from "react-icons/fa";
import Button from "./Button";
import ProjectLogo from "./ProjectLogo";
const WorkSection = () => {
  return (
    <div className="border rounded-lg overflow-hidden flex flex-col p-4 w-full bg-white">
      <div className="flex flex-row mb-8 items-center">
        <GlobeAsiaAustraliaIcon className="h-6 w-6 text-slate-400 mr-4" />
        <h3 className="text-xl">Projects</h3>
      </div>
      <ProjectLogo name="Leonardo's" image={"cheese_1.avif"} link="View" />
      <ProjectLogo name="Preacta" image={"pre.jpeg"} link="View" />
      <ProjectLogo name="Kloud Partners" image={"kp_logo.webp"} link="View" />
      <Button className="mt-4 hover:bg-sky-600">
        <FaGithub className="h-6 w-6 text-white mr-2" />
        Github
      </Button>
    </div>
  );
};

export default WorkSection;
