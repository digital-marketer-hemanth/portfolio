import * as React from "react";

function ProjectCard({ project }) {
  return (
      <div className="project-card-neon w-full">
      
      {/* Top gradient lines */}
      <div className="flex">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      {/* Header */}
      <div className="relative h-16 px-4 lg:px-8 flex items-center justify-center">
        {/* Favicon Style Logo */}
        <div className="absolute left-4">
          <div className="w-10 h-10 rounded-full bg-[#0f0b24] border border-[#1f223c] overflow-hidden shadow-md flex items-center justify-center">
            <img
              src={project.logo}
              alt={project.name}
              className="w-full h-full object-cover scale-125"
            />
          </div>
        </div>

        <h3 className="text-[#16f2b3] text-lg lg:text-xl font-semibold text-center">
          {project.name}
        </h3>
      </div>

      {/* Content */}
      <div className="border-t-[2px] border-indigo-900 px-4 lg:px-8 py-5 lg:py-7">
        <p className="text-sm lg:text-base mb-3">
          <span className="text-gray-400">Role:</span>{" "}
          <span className="text-amber-300 font-medium">{project.role}</span>
        </p>

        <p className="text-sm lg:text-base text-gray-300 leading-relaxed mb-4">
          {project.description}
        </p>

        <div>
          <p className="text-gray-400 text-sm mb-2">Tools & Platforms</p>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs lg:text-sm rounded-full bg-[#11152c] border border-[#1f223c] text-cyan-300 hover:border-violet-500 transition"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
