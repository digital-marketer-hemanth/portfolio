import * as React from "react";

function ProjectCard({ project }) {
  return (
    <div className="neon-card w-full p-6 text-white">

      <div className="flex items-center gap-4 mb-5">
        <div className="w-10 h-10 rounded-full bg-[#0f0b24] border border-[#1f223c] overflow-hidden flex items-center justify-center">
          <img
            src={project.logo}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="text-[#16f2b3] text-lg font-semibold">
          {project.name}
        </h3>
      </div>

      <p className="text-sm mb-3">
        <span className="text-gray-400">Role:</span>{" "}
        <span className="text-amber-300 font-medium">
          {project.role}
        </span>
      </p>

      <p className="text-gray-300 text-sm leading-relaxed mb-4">
        {project.description}
      </p>

      <div>
        <p className="text-gray-400 text-sm mb-2">
          Tools & Platforms
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-[#11152c] border border-[#1f223c] text-cyan-300"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}

export default ProjectCard;