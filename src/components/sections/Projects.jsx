import styles from "./Projects.module.css";
import { useState, useEffect } from "react";

import TechBadge from "../TechBadge";
import { projects } from "../../constants/projects";

// i18
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  const [filter, setFilter] = useState("all");

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

  const filteredProjects =
    filter === "all"
      ? projects //projects esta sendo importado aqui
      : projects.filter((project) => project.category === filter);

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, initialCount);

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

        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-1 rounded-full border hover:shadow-md hover:shadow-cyan-400/20 transition ${
              filter === "all"
                ? "border-cyan-300 hover:bg-cyan-400/10 bg-white/5"
                : "border-white/10 bg-white/5"
            }`}
          >
            {t("projects.button.all")}
          </button>

          <button
            onClick={() => setFilter("fullstack")}
            className={`px-4 py-1 rounded-full border hover:shadow-md hover:shadow-cyan-400/20 transition ${
              filter === "fullstack"
                ? "border-cyan-300 hover:bg-cyan-400/10 bg-white/5"
                : "border-white/10 bg-white/5"
            }`}
          >
            Full Stack
          </button>

          <button
            onClick={() => setFilter("frontend")}
            className={`px-4 py-1 rounded-full border hover:shadow-md hover:shadow-cyan-400/20 transition ${
              filter === "frontend"
                ? "border-cyan-300 hover:bg-cyan-400/10 bg-white/5"
                : "border-white/10 bg-white/5"
            }`}
          >
            Front-End
          </button>

          <button
            onClick={() => setFilter("backend")}
            className={`px-4 py-1 rounded-full border hover:shadow-md hover:shadow-cyan-400/20 transition ${
              filter === "backend"
                ? "border-cyan-300 hover:bg-cyan-400/10 bg-white/5"
                : "border-white/10 bg-white/5"
            }`}
          >
            Back-End
          </button>
        </div>
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
                  {project.site && (
                    <a
                      href={project.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 flex flex-2 items-center justify-center h-8 border border-cyan-300 hover:bg-cyan-400/10 transition rounded-lg text-sm"
                    >
                      {t(project.button)}
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex flex-1 items-center justify-center h-8 border border-cyan-300 hover:bg-cyan-400/10 hover:shadow-md hover:shadow-cyan-400/20 transition rounded-lg text-sm"
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
        {!showAll && filteredProjects.length > initialCount && (
          <div className="flex justify-center mt-4 mb-8">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2.5 text-sm border border-cyan-400/30 text-cyan-400 rounded-full hover:bg-cyan-400/10 transition"
            >
              Ver todos ({filteredProjects.length}) ↓
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
