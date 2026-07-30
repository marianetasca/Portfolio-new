import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaBootstrap,
  FaLaravel,
  FaPhp,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiExpress,
  SiMongodb,
  SiMariadb,
  SiSequelize,
  SiPostman,
  SiRedux
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";


export const techColors = {
  tailwind: "bg-sky-400/10 text-sky-400 border border-sky-400/30",
  bootstrap: "bg-purple-500/10 text-purple-400 border border-purple-400/30",
  mysql: "bg-blue-700/10 text-blue-500 border border-blue-500/30",
  git: "bg-orange-600/10 text-orange-500 border border-orange-500/30",
  html: "bg-orange-500/10 text-orange-400 border border-orange-400/30",
  css: "bg-blue-500/10 text-blue-400 border border-blue-400/30",
  javascript: "bg-yellow-400/10 text-yellow-300 border border-yellow-400/30",
  react: "bg-cyan-400/10 text-cyan-300 border border-cyan-400/30",
  laravel: "bg-red-500/10 text-red-400 border border-red-400/30",
  php: "bg-indigo-500/10 text-indigo-400 border border-indigo-400/30",
  nodejs: "bg-green-500/10 text-green-400 border border-green-400/30",
  express: "bg-gray-500/10 text-gray-300 border border-gray-400/30",
  mongodb: "bg-emerald-500/10 text-emerald-400 border border-emerald-400/30",
  firebase: "bg-yellow-500/10 text-yellow-400 border border-yellow-400/30",
  mariadb: "bg-blue-700/10 text-blue-700 border border-blue-700/30",
  sequelize: "bg-gray-500/10 text-gray-300 border border-gray-400/30",
  postman: "bg-orange-500/10 text-orange-400 border border-orange-400/30",
 redux: "bg-purple-500/10 text-purple-400 border border-purple-400/30",
};

export const techIcons = {
  html: FaHtml5,
  css: FaCss3Alt,
  javascript: SiJavascript,
  react: FaReact,
  tailwind: SiTailwindcss,
  git: FaGitAlt,
  bootstrap: FaBootstrap,
  laravel: FaLaravel,
  mysql: SiMysql,
  php: FaPhp,
  nodejs: FaNodeJs,
  express: SiExpress,
  mongodb: SiMongodb,
  firebase: IoLogoFirebase,
  mariadb: SiMariadb,
  sequelize: SiSequelize,
  postman: SiPostman,
  redux: SiRedux
};
