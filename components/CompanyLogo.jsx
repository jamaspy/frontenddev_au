import Image from "next/image";
import React from "react";
const CompanyLogo = ({ image, name, position, date }) => {
  return (
    <div className="flex flex-row items-center justify-start mb-4 overflow-hidden">
      <div className="w-8 h-8 rounded-full border-2 overflow-hidden flex items-center justify-center">
        <Image
          src={`/${image}`}
          alt="company logo"
          layout="intrinsic"
          width={200}
          height={200}
          objectFit="contain"
          objectPosition="center"
        />
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-col ml-4">
          <p className="">{name}</p>
          <p className="text-xs text-slate-500">{position}</p>
        </div>
        <p className="text-slate-500 text-sm">{date}</p>
      </div>
    </div>
  );
};

export default CompanyLogo;
