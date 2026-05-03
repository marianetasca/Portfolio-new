import styles from "./Projects.module.css";
import { useState, useEffect } from "react";

import TechBadge from "../TechBadge";
import { projects } from "../../constants/projects";

// i18
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  const [showAll, setShowAll] = useState(false);
  const [initialCount, setInitialCount] = useState(6);

  useEffect(() => {
    const updateCount = () => {
      setInitialCount(window.innerWidth < 768 ? 3 : 6);
    };

    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const visibleProjects = showAll ? projects : projects.slice(0, initialCount); //projects esta sendo importado aqui

  return (
    <section
      id="projetos"
      className={`${styles.sectionBg} scroll-mt-14 min-h-screen w-full py-10 flex flex-row text-white border-b-3 border-gray-800`}
    >
      <div className="lg:max-w-6xl md:max-w-2xl max-w-sm mx-auto relative z-10">
        <h1 className="text-white text-2xl font-bold mb-8">
          &lt;/ <span className="text-[#64cbff]">P</span>
          {t("projects.title")} &gt;
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="relative group w-full rounded-xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/30 transition duration-300 hover:-translate-y-2"
            >
              {/* IMAGEM */}
              <img
                src={project.image}
                alt={project.alt}
                className="w-full transition duration-500 group-hover:scale-105 h-42"
              />

              {/* BADGE MINI PROJETO */}
              {project.mini && (
                <p className="absolute top-2 right-2 text-xs bg-black/50 px-2 py-0.5 rounded-full">
                  {t("projects.mini_project")}
                </p>
              )}

              {/* CONTEUDO */}
              <div className="px-6 py-4">
                <h3 className="text-center font-bold pb-1">
                  {t(project.title)}
                </h3>
                <p className="text-gray-300 text-sm mb-2 min-h-20">
                  {t(project.description)}
                </p>

                {/* BOTÕES */}
                <div className="flex gap-4">
                  <a
                    href={project.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex w-2/3 items-center justify-center h-8 border border-cyan-300 hover:bg-cyan-400/10 hover:shadow-md hover:shadow-cyan-400/20 transition rounded-lg text-sm"
                  >
                    {t(project.button)}
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex w-1/3 items-center justify-center h-8 border border-cyan-300 hover:bg-cyan-400/10 hover:shadow-md hover:shadow-cyan-400/20 transition rounded-lg text-sm"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* TAGS */}
              <div className="px-6 pt-1 pb-4">
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tech) => (
                    <TechBadge key={tech} tech={tech} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {!showAll && projects.length > initialCount && (
          <div className="flex justify-center mt-4 mb-8">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2.5 text-sm border border-cyan-400/30 text-cyan-400 rounded-full hover:bg-cyan-400/10 transition"
            >
              Ver todos ({projects.length}) ↓
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
