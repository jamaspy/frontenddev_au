import Image from "next/image";
import React from "react";
import placeholder from "../public/hero2DataURL.jpg";
const Hero = ({ title, subtitle }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "70vh",
        zIndex: 1,
        clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)",
      }}
    >
      <Image
        src="/hero2.jpg"
        placeholder="blur"
        blurDataURL="/hero2DataURL.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="top"
        quality={100}
        alt="coastal road"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center w-full ">
        <h1
          className="text-5xl md:text-8xl text-white"
          style={{ textShadow: "1px 1px 1px #0f172a" }}
        >
          Company Name
        </h1>
        <h3
          className="text-3xl text-white  mt-4"
          style={{ textShadow: "1px 1px 1px #0f172a" }}
        >
          design | develop | host
        </h3>
      </div>
    </div>
  );
};

export default Hero;
