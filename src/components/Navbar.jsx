import styles from "./Navbar.module.css";
import { useState } from "react";

// i18n
import { useTranslation } from "react-i18next";
import i18n from "i18next";

// icon
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const handleCloseMenu = () => {
    setOpen(false);
  };

  const { t } = useTranslation();

  const [lang, setLang] = useState(
    i18n.language.startsWith("pt") ? "pt" : "en",
  );

  const toggleLanguage = () => {
    const newLang = lang === "pt" ? "en" : "pt";
    setLang(newLang);
    i18n.changeLanguage(newLang);
    setOpen(false); 
  };

  return (
    <nav className="fixed top-0 w-full bg-black/80 z-20 text-white shadow-lg shadow-gray-900">
      <div className="flex md:justify-evenly justify-between mx-10 items-center py-3.5 flex-wrap min-h-14">
        <h1 className="text-xl font-bold">
          &lt;/ <span className="text-[#64cbff]">M</span>ARIANE &gt;
        </h1>

        <ul className={`hidden md:flex gap-9 mb-0 ${styles.text_animation}`}>
          <li>
            <a
              href="#home"
              onClick={() => setActive("home")}
              className={active === "home" ? styles.active : ""}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projetos"
              onClick={() => setActive("projetos")}
              className={active === "projetos" ? styles.active : ""}
            >
              {t("navbar.projects")}
            </a>
          </li>
          <li>
            <a
              href="#sobre"
              onClick={() => setActive("sobre")}
              className={active === "sobre" ? styles.active : ""}
            >
              {t("navbar.about")}
            </a>
          </li>
          <li>
            <a
              href="#contato"
              onClick={() => setActive("contato")}
              className={active === "contato" ? styles.active : ""}
            >
              {t("navbar.contact")}
            </a>
          </li>
          <li>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only"
                checked={lang === "en"}
                onChange={toggleLanguage}
              />

              {/* Fundo */}
              <div className="w-14 h-7 flex items-center bg-black/40 border border-[#64cbff]/80  rounded-full px-1 text-xs text-gray-400">
                <span className="flex-1 text-center">PT</span>
                <span className="flex-1 text-center">EN</span>
              </div>

              {/* Bolinha */}
              <div
                className={`absolute top-1 left-1 w-5 h-5 rounded-full overflow-hidden transition-transform duration-300 ${
                  lang === "en" ? "translate-x-7" : ""
                }`}
              >
                <img
                  src={
                    lang === "pt"
                      ? "https://flagcdn.com/br.svg"
                      : "https://flagcdn.com/gb.svg"
                  }
                  className="w-full h-full object-cover"
                  alt="flag"
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>
            </label>
          </li>
        </ul>

        <button
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <RxHamburgerMenu />
        </button>

        {open && (
          <ul
            className={`md:hidden flex flex-col basis-full gap-4 items-center ${styles.text_animation}`}
          >
            <li>
              <a href="#home" onClick={handleCloseMenu}>Home</a>
            </li>
            <li>
              <a href="#sobre" onClick={handleCloseMenu}>Sobre</a>
            </li>
            <li>
              <a href="#projetos" onClick={handleCloseMenu}>Projetos</a>
            </li>
            <li>
              <a href="#contato" onClick={handleCloseMenu}>Contato</a>
            </li>
            <li>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={lang === "en"}
                  onChange={toggleLanguage}
                />

                {/* Fundo */}
                <div className="w-14 h-7 flex items-center bg-black/40 border border-[#64cbff]/80  rounded-full px-1 text-xs text-gray-400">
                  <span className="flex-1 text-center">PT</span>
                  <span className="flex-1 text-center">EN</span>
                </div>

                {/* Bolinha */}
                <div
                  className={`absolute top-1 left-1 w-5 h-5 rounded-full overflow-hidden transition-transform duration-300 ${
                    lang === "en" ? "translate-x-7" : ""
                  }`}
                >
                  <img
                    src={
                      lang === "pt"
                        ? "https://flagcdn.com/br.svg"
                        : "https://flagcdn.com/gb.svg"
                    }
                    className="w-full h-full object-cover"
                    alt="flag"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
              </label>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
