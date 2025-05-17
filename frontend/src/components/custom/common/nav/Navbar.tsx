"use client";

import Image from "next/image";
import React from "react";
import { SingleLink } from "./SingleLink";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import assets from "../../../../../public/assets/assetsManager";
import { CustomImage } from "../CustomImage";

const Navbar = ({ primary = true }: { primary?: boolean }) => {
  return (
    <div
      className={`bg-black/5 w-full backdrop-blur-md fixed z-[50] flex justify-between h-[4rem] px-[5rem] ${
        primary ? " " : " border-b border-white/10 "
      }  `}
    >
      <Link href="/" className="flex items-center gap-[.5rem]">
        <CustomImage
          src={assets.image.Logo}
          alt="logo"
          width={100}
          height={100}
          className="w-[2.5rem]"
        />
        <h2 className="text-white/90 font-roboto font-[400] text-[1.4rem]">
          InQuir
        </h2>
      </Link>

      <div className="flex items-center">
        <SingleLink label="Home" path="/" />
        <SingleLink label="Features" path="/features" />
        <SingleLink label="Hire" path="/hire" />
        <SingleLink label="Jobs" path="/jobs" />
        <SingleLink label="Contact" path="/contact" />
      </div>

      <div className="flex items-center justify-end w-[5rem] gap-[.5rem]">
        <Button className=" bg-transparent rounded-sm border border-[#56535373] hover:bg-[#1f1f1f73] font-montserrat  font-[400] tracking-wide cursor-pointer ">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
