// @flow strict
import Image from "next/image";
import { educations } from "@/utils/data/educations";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../../helper/animation-lottie";
import lottieFile from "/public/lottie/study.json";

function Education() {
  return (
    <div
      id="education"
      className="relative z-30 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <Image
        src="/section.svg"
        alt=""
        width={1572}
        height={795}
        className="absolute top-0 -z-10 opacity-40"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]" />
          <span className="bg-[#1a1443] text-white px-5 py-2 text-xl rounded-md font-semibold">
            Education
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]" />
        </div>
      </div>

      <div className="py-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <div className="flex justify-center">
          <div className="w-3/4">
            <AnimationLottie animationPath={lottieFile} />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {educations.map((education) => (
            <div key={education.id} className="neon-card p-6 text-white">

              <div className="text-center mb-4">
                <p className="text-sm text-[#16f2b3] font-medium">
                  {education.duration}
                </p>
              </div>

              <div className="flex items-center gap-6">
                <BsPersonWorkspace
                  size={32}
                  className="text-violet-400"
                />

                <div>
                  <p className="text-lg font-semibold uppercase">
                    {education.title}
                  </p>
                  <p className="text-gray-300">
                    {education.institution}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Education;