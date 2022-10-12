import Image from "next/image";
import React from "react";
const TiltImage = ({ image, rotation, position }) => {
  return (
    <div
      className={`w-72 h-72 rounded-xl shadow-xl ${rotation} hover:rotate-0 transition-all ease-in-out duration-150 overflow-hidden inline-block border-8 border-white relative`}
    >
      <Image
        src={`/${image || "hero2.jpg"}`}
        alt="project logo"
        layout="intrinsic"
        width={600}
        height={600}
        objectFit="cover"
        objectPosition={position}
        style={{ filter: " grayscale(100%)" }}
      />
      <div className="h-12 bg-white absolute -bottom-1 w-full" />
    </div>
  );
};

export default TiltImage;
