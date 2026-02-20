// @flow strict
import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../../helper/animation-lottie";
import experience from "/public/lottie/code.json";

function Experience() {
  const exp = experiences[0];

  return (
    <div
      id="experience"
      className="relative z-30 border-t my-16 lg:my-28 border-[#25213b]"
    >
      <Image
        src="/section.svg"
        alt=""
        width={1572}
        height={795}
        className="absolute top-0 -z-10 opacity-40"
      />

      {/* Heading */}
      <div className="flex justify-center my-8 lg:py-10">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]" />
          <span className="bg-[#1a1443] text-white px-6 py-2 text-xl font-semibold">
            Experience
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]" />
        </div>
      </div>

      {/* Content */}
      <div className="py-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Lottie (Zoomed slightly) */}
        <div className="flex justify-center">
          <div className="w-[90%] scale-110">
            <AnimationLottie animationPath={experience} />
          </div>
        </div>

        {/* Experience Card */}
        <div className="flex justify-center">
          <div className="neon-card w-full max-w-md p-10 text-center text-white">

            <p className="text-base text-[#16f2b3] font-semibold mb-4">
              {exp.duration}
            </p>

            <BsPersonWorkspace
              size={40}
              className="mx-auto text-violet-400 mb-4"
            />

            <h3 className="text-2xl font-bold uppercase text-white mb-2">
              {exp.title}
            </h3>

            <p className="text-gray-300 text-sm uppercase mb-1 tracking-wide">
              {exp.type}
            </p>

            <p className="text-white text-lg font-semibold mb-2">
              {exp.company}
            </p>

            <p className="text-gray-200 text-sm mt-6 leading-relaxed">
              {exp.description}
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Experience;