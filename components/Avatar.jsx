import Image from "next/image";
import React from "react";
const Avatar = () => {
  return (
    <div className={`rounded-full shadow w-24 h-24 overflow-hidden`}>
      <Image
        src="/avatar.jpeg"
        layout="intrinsic"
        width={100}
        height={100}
        objectFit="cover"
        objectPosition="center"
        alt="james aspinall profile"
      />
    </div>
  );
};

export default Avatar;
