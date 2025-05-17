"use client";

import React from "react";
import { CustomImage } from "../../common/CustomImage";
import MedalCards, { MedalCardDataType } from "../../common/cards/MedalCards";
import assets from "../../../../../public/assets/assetsManager";

const feature4Data = [
  {
    id: 1,
    title: "Star Contributor",
    description: "Star Contributor",
    image: assets.image.medal.StarContributorMedal1,
  },
  {
    id: 2,
    title: "Quick Responder",
    description: "Quick Responder",
    image: assets.image.medal.QuickResponderMedal2,
  },
  {
    id: 3,
    title: "Community Builder",
    description: "Community Builder",
    image: assets.image.medal.CommunityBuilderMedal3,
  },
  {
    id: 4,
    title: "Loyalty Badge",
    description: "Loyalty Badge",
    image: assets.image.medal.LoyaltyMedal4,
  },
  {
    id: 5,
    title: "Innovator",
    description: "Innovator",
    image: assets.image.medal.InnovatorMedal5,
  },
  {
    id: 6,
    title: "Quality Assured",
    description: "Quality Assured",
    image: assets.image.medal.QualityAssuredMedal6,
  },
  {
    id: 7,
    title: "Feedback Champion",
    description: "Feedback Champion",
    image: assets.image.medal.FeedbackChampionMedal7,
  },
  {
    id: 8,
    title: "Feedback Guru",
    description: "Feedback Guru",
    image: assets.image.medal.FeedbackGuruMedal8,
  },
];

const Feature4 = () => {
  return (
    <div className=" w-full flex justify-center flex-col items-center ">
      <div>
        <h2 className=" font-raleway font-[600] text-white/100 text-[2.5rem] w-[38rem] text-center ">
          Earn Your Prestige
        </h2>
        <p className=" font-open-sans font-[500] text-white/60 text-[.9rem] w-[38rem] text-center ">
          “Unlock Achievements, Rise Through the Ranks!”
        </p>
      </div>
      <div className=" w-[45rem] flex flex-wrap gap-[1rem] mt-[5rem]  ">
        {feature4Data.map((feature, index) => {
          return <MedalCards data={feature as MedalCardDataType} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Feature4;
