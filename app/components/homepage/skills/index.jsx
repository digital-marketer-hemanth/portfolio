// @flow strict
import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";

function Skills() {
  return (
    <section
      id="skills"
      className="relative z-10 my-24 border-t border-[#25213b] overflow-hidden"
    >
      {/* Previous Heading Style (NO full width line) */}
      <div className="flex justify-center my-12">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]" />
          <span className="bg-[#1a1443] text-white px-6 py-2 text-xl font-semibold">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]" />
        </div>
      </div>

      {/* Auto Scroll Container */}
      <div className="w-full overflow-hidden">
        <div className="animate-scroll flex gap-8">

          {[...skillsData, ...skillsData].map((skill, id) => (
            <div
              key={id}
              className="
                min-w-[170px] h-[150px]
                bg-[#0f172a]
                border border-[#1f223c]
                rounded-xl
                flex flex-col items-center justify-center
                text-center
                px-4
                transition-all duration-300
                hover:border-violet-500
                hover:shadow-[0_0_20px_rgba(139,92,246,0.35)]
              "
            >
              {/* ZOOMED ICON */}
              <div className="relative w-14 h-14 mb-3 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={skillsImage(skill)?.src}
                  alt={skill}
                  fill
                  className="object-contain scale-110"
                  sizes="56px"
                />
              </div>

              <p className="text-white text-sm font-medium leading-tight">
                {skill}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;