"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import assets from "../../../../public/assets/assetsManager";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Star = {
  id: number;
  left: string;
  top: string;
  size: number;
  opacity: number;
  animationDelay: string;
};

const Hero = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const newStars = [];
      const starCount = 500; // Number of stars to generate

      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          size: Math.random() * 0.1 + 0.03, // Random size between 0.1rem and 0.6rem
          opacity: Math.random() * 0.2 + 0.3, // Random opacity between 0.3 and 1
          animationDelay: `${Math.random() * 5}s`, // Random animation delay
        });
      }

      setStars(newStars);
    };

    generateStars();
  }, []);
  return (
    <div className=" flex w-[100%] relative flex-col items-center justify-center   ">
      <div className=" bg-[#0D0D1A] w-[120%] z-[1] absolute overflow-clip justify-center h-[120vh] mt-[-15rem] rounded-b-[80rem] ">
        <div className="realative">{/* Star add kar na hai isme */}</div>
        <div className="relative w-full h-full">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute rounded-full bg-white animate-pulse"
              style={{
                left: star.left,
                top: star.top,
                width: `${star.size}rem`,
                height: `${star.size}rem`,
                opacity: star.opacity,
                animationDelay: star.animationDelay,
              }}
            />
          ))}
        </div>
      </div>

      <div className=" relative flex flex-col items-center gap-[.5rem] z-[20] mt-[8rem] ">
        <AnimatedGradientText className="bg-transparent mb-[1rem] ">
          ✨
          <span
            className={`inline ml-[.3rem] animate-gradient bg-gradient-to-r from-[#C5C1FF] via-[#C5C1FF] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent font-roboto  `}
          >
            Your Feedback Journey, Simplified
          </span>
          <ChevronRight className="ml-1 size-3 text-white/70 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedGradientText>

        <h2 className="text-[3.2rem] w-[50rem] text-center font-raleway font-[600] text-white">
          Refine Your Product with Insightful Feedback
        </h2>

        <p className=" text-[.8rem] w-[28rem]  mt-[1rem] text-center font-open-sans font-[400] text-white/80 ">
          INQUIR connects companies with skilled freelancers to deliver
          insightful feedback that drives product improvement.
        </p>
        <span>⭐⭐⭐⭐⭐</span>
        <div className=" flex gap-[1rem] mt-[1rem] ">
          <Button className=" bg-primary rounded-sm font-montserrat px-[2rem] font-[400] tracking-wide cursor-pointer ">
            Freelancer
          </Button>
          <Button className=" bg-transparent rounded-sm border border-[#56535373] hover:bg-[#1f1f1f73] font-montserrat px-[2rem] font-[400] tracking-wide cursor-pointer ">
            Request Feedback
          </Button>
        </div>
      </div>

      <div className=" z-[20] mt-[3rem] ">
        <Image
          src={assets.image.HeroImage}
          alt="Hero"
          width={1000}
          height={1000}
          className=" hero-image-bg w-full h-full object-cover  "
        />
      </div>
    </div>
  );
};

export default Hero;
