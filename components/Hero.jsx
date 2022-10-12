import Image from "next/image";
import React from "react";
import placeholder from "../public/hero2DataURL.jpg";
const Hero = ({ title, subtitle }) => {
  return (
    <div>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "90vh",
          zIndex: -1,
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
      </div>
      <h1
        className="text-white drop-shadow-md text-5xl md:text-8xl text-center"
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {title}
      </h1>
      <p
        className="text-white drop-shadow text-xl text-center"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default Hero;
