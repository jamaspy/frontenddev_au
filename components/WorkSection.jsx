import { ArrowDownTrayIcon, BriefcaseIcon } from "@heroicons/react/24/solid";
import React from "react";
import Button from "./Button";
import CompanyLogo from "./CompanyLogo";
const WorkSection = () => {
  return (
    <div className="border rounded-lg overflow-hidden flex flex-col p-4 w-full mb-4 bg-white">
      <div className="flex flex-row mb-8 ">
        <BriefcaseIcon className="h-6 w-6 text-slate-400 mr-2" />
        <h3 className="text-xl">Work</h3>
      </div>
      <CompanyLogo
        image="tsvLogo.jpeg"
        name="T-Shirt Ventures"
        position="Frontend Engineer"
        date="Jun22 - Present"
      />
      <CompanyLogo
        image="squizLogo.png"
        name="SQUIZ"
        position="Senior Web Developer"
        date="Jan22 - Jun22"
      />
      <CompanyLogo
        image="agriLogo.png"
        name="Agridigital"
        position="Frontend Developer"
        date="Mar20 - Jan22"
      />
      <Button className="mt-4">
        <ArrowDownTrayIcon className="h-6 w-6 text-white mr-2" />
        Download CV
      </Button>
    </div>
  );
};

export default WorkSection;
