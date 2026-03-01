// @flow strict
import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";

function Skills() {
  return (
    <section
      id="skills"
      className="relative my-24 border-t border-[#25213b] overflow-hidden"
    >
      {/* Section Title */}
      <div className="flex justify-center my-12">
        <div className="flex items-center gap-4">
          <span className="w-20 h-[2px] bg-[#1a1443]" />
          <span className="bg-[#1a1443] text-white px-6 py-2 text-xl font-semibold">
            Marketing Tools I Specialize In
          </span>
          <span className="w-20 h-[2px] bg-[#1a1443]" />
        </div>
      </div>

      {/* SCROLL WRAPPER */}
      <div className="w-full overflow-hidden">
        <div className="animate-scroll">

          {[...skillsData, ...skillsData].map((skill, id) => (
            <div
              key={id}
              className="
                min-w-[160px]
                h-[140px]
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
              <div className="relative w-12 h-12 mb-3">
                <Image
                  src={skillsImage(skill)?.src}
                  alt={skill}
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>

              <p className="text-white text-sm font-medium">
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