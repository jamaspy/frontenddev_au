import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full p-4">
      <div className=" text-slate-800 flex flex-row">
        <p className="mr-4">Home</p>
        <p className="mr-4">Projects</p>
        <p className="mr-4">Contact</p>
        <p>Home</p>
      </div>
      <div className="text-slate-400 text-xs md:text-sm mt-2">
        <p>© 2022 James Aspinall. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
