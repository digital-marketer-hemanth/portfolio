// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <section id="about" className="relative my-16">

      {/* Vertical Label (Safer Positioning) */}
      <div className="hidden xl:flex flex-col items-center absolute top-20 right-0 mr-[-60px]">
  <span className="bg-[#1a1443] text-white rotate-90 px-5 py-2 text-xl rounded-md">
    ABOUT ME
  </span>
  <span className="h-36 w-[2px] bg-[#1a1443]"></span>
</div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* TEXT SECTION */}
        <div className="order-2 lg:order-1 space-y-6">
          <p className="font-semibold text-[#16f2b3] text-lg uppercase tracking-wider">
            Who I Am?
          </p>

          <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
            {personalData.description}
          </p>
        </div>

        {/* IMAGE SECTION */}
        <div className="flex justify-center order-1 lg:order-2">
          <div className="relative group">
            <Image
              src={personalData.profile}
              width={300}
              height={300}
              alt="Hemanth J"
              className="rounded-xl transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;