// @flow strict
import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../../helper/animation-lottie";
import experience from "/public/lottie/code.json";

function Experience() {
  const exp = experiences[0];

  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt=""
        width={1572}
        height={795}
        className="absolute top-0 -z-10 opacity-60"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]" />
          <span className="bg-[#1a1443] text-white p-2 px-5 text-xl rounded-md font-semibold">
            Experience
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]" />
        </div>
      </div>

      <div className="py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Lottie */}
          <div className="flex justify-center">
            <div className="w-[80%]">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          {/* EXPERIENCE CARD */}
          <div className="flex justify-center">
            <div className="experience-glow-card w-full max-w-md">
              <div className="experience-body p-7 rounded-2xl">

                <Image
                  src="/blur-23.svg"
                  alt=""
                  width={1080}
                  height={200}
                  className="absolute bottom-0 left-0 w-full opacity-40 pointer-events-none"
                />

                <div className="flex justify-center mb-3">
                  <p className="text-sm text-[#16f2b3] font-medium">
                    {exp.duration}
                  </p>
                </div>

                <div className="flex flex-col items-center text-center gap-3 relative z-10">
                  <BsPersonWorkspace size={36} className="text-violet-400" />

                  <h3 className="text-xl font-bold text-white uppercase">
                    {exp.title}
                  </h3>

                  <p className="text-gray-400 text-sm uppercase">{exp.type}</p>

                  <p className="text-gray-200 text-base font-medium">
                    {exp.company}
                  </p>

                  <a
                    href={exp.companySite}
                    target="_blank"
                    className="text-pink-400 text-sm underline underline-offset-4"
                  >
                    Visit Site ↗
                  </a>

                  <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Experience;
