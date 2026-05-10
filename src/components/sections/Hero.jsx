import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

import foto from "../../assets/fotoHero.png";
// i18n
import { useTranslation } from "react-i18next";
// efeito aurora
import Aurora from "../Aurora";

// icons
import {
  FaReact,
  FaGitAlt,
  FaBootstrap,
  FaLaravel,
  FaCss3Alt,
  FaHtml5,
  FaGithub
} from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMysql } from "react-icons/si";

const Hero = () => {
  const text = "FRONT-END DEVELOPER";
  const [displayText, setDisplayText] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    if (i < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text.charAt(i));
        setI(i + 1);
      }, 100); // velocidade

      return () => clearTimeout(timeout);
    }
  }, [i, text]);

  const techIcons = [
    FaHtml5,
    FaCss3Alt,
    SiJavascript,
    FaReact,
    SiTailwindcss,
    FaBootstrap,
    FaLaravel,
    SiMysql,
    FaGitAlt,
    FaGithub
  ];

  const { t } = useTranslation();

  return (
    <section
      id="home"
      className={`${styles.heroBg} w-full min-h-screen text-white flex flex-col justify-center border-b-3 border-gray-800`}
    >
      {/* Aurora no fundo */}
      <div className="absolute top-0 left-0 w-full h-[70vh]">
        <Aurora
          colorStops={["#0f5c85", "#2a2a72", "#26494d"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.8}
        />
      </div>

      <div className="relative z-10 lg:max-w-5xl md:max-w-2xl max-w-sm mx-auto mt-20 md:mt-0 flex flex-col md:flex-row items-center w-full justify-between">
        <div className="text-left max-w-90 md:max-w-lg">
          <p className="mb-2 text-2xl">
            {t("hero.greeting")}
            <span className="border-b-2 border-cyan-400 w-6 inline-block ms-2 mb-1.5"></span>
          </p>
          <h1 className="text-6xl mb-1 font-serif md:text-8xl lg:text-9xl">
            Mariane <br /> <span className="text-cyan-300">Tasca</span>
          </h1>

          <p className="text-cyan-400 md:text-2xl mb-2">
            {displayText}
            <span className={styles.cursor}>|</span>
          </p>
          <p className="text-sm">{t("hero.description")}</p>

          <div className="mt-4">
            <a
              className="py-2 px-4 text-xs lg:text-sm bg-cyan-400 hover:bg-cyan-600 hover:text-white rounded-lg text-black mr-3"
              href="#projetos"
            >
              {t("hero.projects")}
            </a>
            <a
              className="py-2 px-4 text-xs lg:text-sm border border-cyan-300 hover:bg-cyan-400/10 hover:shadow-md hover:shadow-cyan-400/20 rounded-lg"
              href="#contato"
            >
              {t("hero.contact")}
            </a>
          </div>
        </div>

        {/* IMAGEM */}
        <div className="mt-5 pb-8 pt-3 md:pb-12 md:pt-5 rounded-full bg-white/5 backdrop-blur-sm border border-cyan-400/10">
          {/* glow */}
          <div className="absolute w-75 h-75 bg-cyan-500/30 blur-[100px] rounded-full z-1"></div>

          <img
            src={foto}
            alt="Foto formatura"
            className={`${styles.image} max-h-60 md:max-h-87.5 w-auto -translate-x-4 md:-translate-x-8 relative z-10 drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]`}
          />
        </div>
      </div>

      <div className="lg:max-w-5xl md:max-w-2xl md:mx-auto mx-10 mt-5 md:mt-15 relative z-10">
        {/* CARROSSEL */}
        <div className="w-full relative overflow-hidden">
          <div
            className={`${styles.marquee} flex gap-12 whitespace-nowrap text-cyan-400 text-3xl md:text-4xl px-6`}
          >
            {/* loop */}
            {techIcons.map((Icon, index) => (
              <Icon
                key={index}
                className="shrink-0 opacity-80 hover:opacity-100 hover:scale-110 transition"
              />
            ))}

            {/* logos duplicadas */}
            {techIcons.map((Icon, index) => (
              <Icon
                key={`dup-${index}`}
                className="shrink-0 opacity-80 hover:opacity-100 hover:scale-110 transition"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
