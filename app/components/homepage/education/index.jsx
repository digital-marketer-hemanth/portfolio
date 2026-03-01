// @flow strict
import Image from "next/image";
import { educations } from "@/utils/data/educations";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../../helper/animation-lottie";
import lottieFile from "/public/lottie/study.json";

function Education() {
  return (
    <section
      id="education"
      className="relative my-20 border-t border-[#25213b]"
    >
      {/* Background Decoration */}
      <Image
        src="/section.svg"
        alt=""
        width={1572}
        height={795}
        className="absolute top-0 left-0 w-full -z-10 opacity-30"
      />

      {/* Section Title */}
      <div className="flex justify-center py-10">
        <div className="flex items-center gap-4">
          <span className="w-20 h-[2px] bg-[#1a1443]" />
          <span className="bg-[#1a1443] text-white px-6 py-2 text-xl rounded-md font-semibold">
            Education
          </span>
          <span className="w-20 h-[2px] bg-[#1a1443]" />
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Lottie Animation */}
        <div className="flex justify-center">
          <div className="w-3/4 max-w-md">
            <AnimationLottie animationPath={lottieFile} />
          </div>
        </div>

        {/* Education Cards */}
        <div className="flex flex-col gap-8">
          {educations.map((education) => (
            <div
              key={education.id}
              className="neon-card p-6 text-white"
            >
              {/* Duration */}
              <div className="text-center mb-4">
                <p className="text-sm text-[#16f2b3] font-medium tracking-wide">
                  {education.duration}
                </p>
              </div>

              {/* Content */}
              <div className="flex items-start gap-6">
                <BsPersonWorkspace
                  size={30}
                  className="text-violet-400 mt-1"
                />

                <div>
                  <p className="text-lg font-semibold uppercase">
                    {education.title}
                  </p>
                  <p className="text-gray-300 mt-1">
                    {education.institution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;