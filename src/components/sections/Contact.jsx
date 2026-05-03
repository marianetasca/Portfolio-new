import React from "react";
import styles from "./Contact.module.css";

// icons
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail, MdArrowOutward } from "react-icons/md";

// i18
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section
      id="contato"
      className={`${styles.sectionBg} scroll-mt-14 w-full min-h-[90vh] text-white flex flex-col justify-start border-b-3 border-gray-900 pt-10 relative`}
    >
      <div className="lg:max-w-6xl md:max-w-3xl max-w-sm mx-auto w-full relative z-10 space-y-6">
        <h1 className="text-white text-2xl font-bold mb-8">
          &lt;/ <span className="text-[#64cbff]">C</span>
          {t("contact.title")} &gt;
        </h1>
        <a
          href="/Mariane-Tasca-Frontend.pdf"
          download
          className="py-1 px-4 text-xs rounded-full absolute top-8 right-0 md:text-sm border border-cyan-300 hover:bg-cyan-400/10 hover:shadow-md hover:shadow-cyan-400/20"
        >
          {t("contact.download")}
        </a>
        <p className="text-gray-300">{t("contact.intro")}</p>

        <div className="flex flex-wrap gap-2">
          <div className="flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold bg-gray-500/10 text-gray-400 border border-gray-400/30">
            <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_#4ade80] animate-pulse" />
            <span>{t("contact.availability")}</span>
          </div>
          <span className="rounded-full flex items-center px-3 py-1 text-xs font-semibold bg-gray-500/10 text-gray-400 border border-gray-400/30">
            📍 Guarapuava, PR
          </span>
        </div>

        <div className="flex flex-row">
          <div className="space-y-4 w-full">
            {/* linkedin */}
            <a
              href="https://www.linkedin.com/in/mariane-da-silva-tasca-36379427a/"
              target="_blank"
              rel="noreferrer"
              className="flex relative items-center gap-3 rounded-xl p-4 bg-white/5 backdrop-blur-md border border-cyan-400/10 shadow-md shadow-[#64cbff]/20 hover:shadow-[#64cbff]/40 hover:-translate-y-1 transition group"
            >
              <FaLinkedin className="text-[#0A66C2]" size={28} />

              <div className="">
                <p className="text-white text-sm font-medium">LinkedIn</p>
                <p className="text-gray-400 text-xs group-hover:text-cyan-400 transition">
                  {t("contact.linkedin.action")}
                </p>
              </div>
              <span className="absolute right-4 text-slate-600 group-hover:text-cyan-400 transition-colors ml-auto">
                <MdArrowOutward />
              </span>
            </a>
            {/* github */}
            <a
              href="https://github.com/marianetasca"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl p-4 bg-white/5 backdrop-blur-md border border-cyan-400/10 shadow-md shadow-[#64cbff]/20 hover:shadow-[#64cbff]/40 hover:-translate-y-1 transition group"
            >
              <FaGithub size={28} />

              <div>
                <p className="text-white text-sm font-medium">GitHub</p>
                <p className="text-gray-400 text-xs group-hover:text-cyan-400 transition">
                  {t("contact.github.action")}
                </p>
              </div>
              <span className="absolute right-4 text-slate-600 group-hover:text-cyan-400 transition-colors ml-auto">
                <MdArrowOutward />
              </span>
            </a>
            {/* email */}
            <a
              href="mailto:mariane012.12@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl p-4 bg-white/5 backdrop-blur-md border border-cyan-400/10 shadow-md shadow-[#64cbff]/20 hover:shadow-[#64cbff]/40 hover:-translate-y-1 transition group"
            >
              <MdOutlineEmail className="text-cyan-500" size={28} />

              <div>
                <p className="text-white text-sm font-medium">E-mail</p>
                <p className="text-gray-400 text-xs group-hover:text-cyan-400 transition">
                  {t("contact.email.action")}
                </p>
              </div>
              <span className="absolute right-4 text-slate-600 group-hover:text-cyan-400 transition-colors ml-auto">
                <MdArrowOutward />
              </span>
            </a>
            {/* whatsapp */}
            <a
              href="https://wa.me/5542999282341"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl p-4 bg-white/5 backdrop-blur-md border border-cyan-400/10 shadow-md shadow-[#64cbff]/20 hover:shadow-[#64cbff]/40 hover:-translate-y-1 transition group"
            >
              <FaWhatsapp className="text-[#128C7E]" size={28} />

              <div>
                <p className="text-white text-sm font-medium">WhatsApp</p>
                <p className="text-gray-400 text-xs group-hover:text-cyan-400 transition">
                  {t("contact.whatsapp.action")}
                </p>
              </div>
              <span className="absolute right-4 text-slate-600 group-hover:text-cyan-400 transition-colors ml-auto">
                <MdArrowOutward />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
