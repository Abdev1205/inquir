import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import React from "react";
import { CustomImage } from "../CustomImage";

export type MedalCardDataType = {
  id: number;
  title: string;
  description: string;
  image: HTMLImageElement;
};

const MedalCards = ({ data }: { data: MedalCardDataType }) => {
  return (
    <div>
      <div className=" hover:scale-105 duration-300 ">
        <div
          className={`w-[10rem] h-[10rem] gap-[1rem] cursor-pointer flex flex-col items-center justify-center bg-[#0A0A16] relative group/card   hover:shadow-emerald-500/[0.1]   border-black/[0.1]  rounded-xl  border  duration-200    `}
        >
          <div>
            <CustomImage
              src={data.image}
              alt={data.title}
              className=" w-full h-[6rem] object-contain   "
            />
          </div>

          <div>
            <p className=" font-open-sans font-[400]  text-white/60 text-[.9rem]  ">
              {data.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedalCards;
