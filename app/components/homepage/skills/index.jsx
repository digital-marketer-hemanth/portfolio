// @flow strict
import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import GlowCard from "../../helper/glow-card";

function Skills() {
  return (
    <div
      id="skills"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      {/* Top Gradient Line */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      {/* Section Title */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]" />
          <span className="bg-[#1a1443] text-white p-2 px-5 text-xl rounded-md">
            Marketing Tools
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]" />
        </div>
      </div>

      {/* Skills Marquee */}
      <div className="w-full my-12">
        <Marquee gradient={false} speed={65} pauseOnHover>
          <div className="flex gap-6 px-4">
            {skillsData.map((skill, id) => (
              <GlowCard key={id} identifier={`skill-${id}`}>
                <div className="w-[90px] h-[90px] flex flex-col items-center justify-center gap-2">

                  {/* FIXED ICON BOX */}
                  <div className="relative w-12 h-12 flex items-center justify-center drop-shadow-[0_0_6px_#8b5cf6]">
                    <Image
                      src={skillsImage(skill)?.src}
                      alt={skill}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <p className="text-white text-xs text-center leading-tight">
                    {skill}
                  </p>
                </div>
              </GlowCard>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;
