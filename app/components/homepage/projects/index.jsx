import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "./project-card";

const Projects = () => {
  return (
    <section id="projects" className="relative my-24">

      {/* SECTION TITLE */}
      <div className="flex items-center mb-16">
        <span className="bg-[#1a1443] text-white px-6 py-3 text-xl rounded-md">
          PROJECTS
        </span>
        <span className="flex-1 h-[2px] bg-[#1a1443]" />
      </div>

      {/* CLEAN STACK (NO NAV OVERLAP) */}
      <div className="flex flex-col items-center gap-16">

        {projectsData.slice(0, 4).map((project, index) => (
          <div
            key={index}
            className="
              w-full
              max-w-3xl
              sticky
              top-28
              md:top-32
            "
          >
            <div className="transition-all duration-500 hover:-translate-y-2">
              <ProjectCard project={project} />
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Projects;