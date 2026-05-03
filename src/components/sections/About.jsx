import React from "react";
import styles from "./About.module.css";

// icons
import { MdLanguage } from "react-icons/md";

import TechBadge from "../TechBadge";

// i18
import { useTranslation } from "react-i18next";

const About = () => {
  const front = ["react", "javascript", "html", "css", "bootstrap", "tailwind"];
  const back = ["laravel", "php", "mysql"];

  const { t } = useTranslation();

  return (
    <section
      id="sobre"
      className={`${styles.heroBg} scroll-mt-14 w-full min-h-[80vh] text-white flex flex-col justify-start border-b-3 border-gray-900 py-10 relative`}
    >
      <div className="lg:max-w-6xl md:max-w-3xl max-w-sm mx-auto w-full relative z-10 space-y-6">
        <h1 className="text-white text-2xl font-bold mb-8">
          &lt;/ <span className="text-[#64cbff]">{t("about.title_part1")}</span>{t("about.title_part2")} &gt;
        </h1>
        <div className="flex md:flex-row flex-col gap-6">
          <div className="space-y-3 p-3 text-gray-300 leading-relaxed md:w-3/4 rounded-xl bg-white/5 backdrop-blur-md border border-cyan-400/10 shadow-md shadow-[#64cbff]/20 hover:shadow-[#64cbff]/40">
            <p>
              {t("about.about_me.part1")}
              <span className="text-[#64cbff]">{t("about.about_me.highlight")} </span>
              {t("about.about_me.part2")}
            </p>

            <p>
              {t("about.experience_part1")}
              <a className="text-[#64cbff]" href="#mindlynotes">
                {t("about.experience_highlight")}
              </a>
              {t("about.experience_part2")}
            </p>

            <p> {t("about.backend")}</p>
          </div>
          <div className="md:w-1/4 p-3 rounded-xl bg-white/5 backdrop-blur-md border border-cyan-400/10 shadow-md shadow-[#64cbff]/20 hover:shadow-[#64cbff]/40">
            <div className="mb-3">
              <h2 className="font-bold">{t("about.idiom.english_title")}</h2>
              <p>{t("about.idiom.english")}</p>
            </div>
            <div>
              <h2 className="font-bold">{t("about.idiom.bayswater_title")}</h2>
              <p>{t("about.idiom.bayswater")}</p>
            </div>

            {/* GLOBO COM TEXTO CIRCULAR */}
            <div className="absolute w-20 h-20 shrink-0 -top-2 -right-2">
              {/* texto girando */}
              <svg
                className="absolute inset-0 animate-spin"
                style={{ animationDuration: "12s" }}
                viewBox="0 0 80 80"
              >
                <path
                  id="circle"
                  d="M 40,40 m -27,0 a 27,27 0 1,1 54,0 a 27,27 0 1,1 -54,0"
                  fill="none"
                />
                <text>
                  <textPath
                    href="#circle"
                    style={{
                      fontSize: "9.5px",
                      fill: "#22d3ee",
                      letterSpacing: "4.5px",
                    }}
                  >
                    INGLÊS · ENGLISH ·
                  </textPath>
                </text>
              </svg>

              {/* icone */}
              <div className="absolute inset-0 flex items-center justify-center text-xl">
                🌐
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6 text-white">
          {/* FRONT */}
          <div className="p-4 rounded-xl bg-white/5 backdrop-blur-md border border-cyan-400/10 shadow-md shadow-[#64cbff]/20 hover:shadow-[#64cbff]/40">
            <h3 className="font-bold mb-2">Front-end</h3>

            <div className="flex flex-wrap">
              {front.map((tech) => (
                <TechBadge key={tech} tech={tech} />
              ))}
            </div>
          </div>

          {/* BACK */}
          <div className="p-4 rounded-xl bg-white/5 backdrop-blur-md border border-cyan-400/10 shadow-md shadow-[#64cbff]/20 hover:shadow-[#64cbff]/40">
            <h3 className="font-bold mb-2">Back-end</h3>

            <div className="flex flex-wrap">
              {back.map((tech) => (
                <TechBadge key={tech} tech={tech} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
