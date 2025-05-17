"use client";

import Image from "next/image";
import React, { useState } from "react";
import assets from "../../../../../public/assets/assetsManager";
import {
  BarChart3,
  MessageSquare,
  LineChart,
  Users,
  Star,
  FileSearch,
} from "lucide-react";
import { CustomImage } from "../../common/CustomImage";

const feature2Data = [
  {
    id: 1,
    title: "Integrated Feedback Communication",
    description:
      "Effortlessly chat with feeders and team members directly within the platform to discuss real-time insights, ideas, and feedback.",
    icon: <MessageSquare className="h-6 w-6 text-white" />,
  },
  {
    id: 2,
    title: "Efficient Workflow",
    description:
      "Stay within the feedback task environment while chatting, without needing to switch between apps, ensuring smooth and uninterrupted communication.",
    icon: <Star className="h-6 w-6 text-indigo-400" />,
  },
  {
    id: 3,
    title: "Enhanced Decision-Making",
    description:
      "Quickly resolve issues and provide updates through instant messaging, accelerating the decision-making process and reducing turnaround time.",
    icon: <LineChart className="h-6 w-6 text-indigo-400" />,
  },
  {
    id: 4,
    title: "Context-Rich Conversations",
    description:
      "Keep all discussions, feedback, and updates tied to specific tasks and projects in one place, allowing for better clarity and project alignment.",
    icon: <Users className="h-6 w-6 text-indigo-400" />,
  },
];

const Feature2 = () => {
  const [showNumbers, setShowNumbers] = useState(true);
  return (
    <div className=" flex flex-row-reverse justify-center w-[100%] items-center gap-[2rem] ">
      <div className=" w-[40%] flex flex-col gap-[2rem]  ml-[5rem]">
        <div>
          <h2 className=" font-raleway font-[600] text-white/80 text-[2rem] ">
            Streamlining Collaboration with Integrated Chat
          </h2>
        </div>
        <div className=" flex flex-col gap-[1rem]  ">
          {feature2Data.map((feature) => {
            return (
              <div
                key={feature.id}
                className={`duration-300  hover:border-indigo-500/50 transition-all   overflow-hidden`}
              >
                <div className="p-1">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-8 feature-icon-bg rounded-full opacity-70 text-white">
                        {showNumbers ? (
                          <span className="text-lg font-medium">
                            {feature.id}
                          </span>
                        ) : (
                          feature.icon
                        )}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[1.2rem] font-[400] font-dm-sans text-white/80 ">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-[.9rem] text-white/60">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className=" w-[60%] ">
        <CustomImage
          src={assets.image.Feature2Image}
          alt="feature-1"
          width={500}
          height={500}
          className="hero-image-bg w-full  "
        />
      </div>
    </div>
  );
};

export default Feature2;
