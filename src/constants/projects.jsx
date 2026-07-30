import mindlynotes from "../assets/projects/mindlynotes.png";
import formulario from "../assets/projects/formulario.png";
import secretWord from "../assets/projects/secretWord.png";
import agenda1 from "../assets/projects/agenda.png";
import miniBlog from "../assets/projects/miniblog.png";
import api from "../assets/projects/api.png";
import reactGram from "../assets/projects/reactgram.png"

export const projects = [
  {
    id: "mindlynotes",
    title: "projects.mindly.title",
    description: "projects.mindly.description",
    image: mindlynotes,
    alt: "MindlyNotes — sistema de anotações",
    site: "https://www.mindlynotes.com.br",
    github: "https://github.com/marianetasca/bloco-notas-TCC.git",
    tags: ["laravel", "mysql", "php", "css", "bootstrap", "html", "javascript"],
    button: "projects.button.access",
    category: "fullstack",
    mini: false,
  },
  {
    id: "reactGram",
    title: "projects.reactGram.title",
    description: "projects.reactGram.description",
    image: reactGram,
    alt: "ReactGram",
    site: "https://react-gram.vercel.app",
    github: "https://github.com/marianetasca/ReactGram",
    tags: ["react", "redux", "nodejs", "express", "mongodb", "css", "javascript", "postman"],
    button: "projects.button.view",
    category: "fullstack",
    mini: false,
  },
  {
    id: "miniBlog",
    title: "projects.miniBlog.title",
    description: "projects.miniBlog.description",
    image: miniBlog,
    alt: "MiniBlog em react",
    site: "https://miniblog-chi-umber.vercel.app",
    github:
      "https://github.com/marianetasca/cursoREACT/tree/main/10_miniblog/miniblog",
    tags: ["react", "html", "css", "javascript", "firebase"],
    button: "projects.button.view",
    category: "fullstack",
    mini: false,
  },
  {
    id: "secret-word",
    title: "projects.react_project.title",
    description: "projects.react_project.description",
    image: secretWord,
    alt: "Secret Word — jogo de adivinhar palavras em React",
    site: "https://curso-react-2djo.vercel.app",
    github:
      "https://github.com/marianetasca/cursoREACT/tree/main/5_secret_world/secretworld",
    tags: ["react", "html", "css", "javascript"],
    button: "projects.button.view",
    category: "frontend",
    mini: true,
  },

  {
    id: "agenda",
    title: "projects.js_project.title",
    description: "projects.js_project.description",
    image: agenda1,
    alt: "Agenda de contatos com Node.js",
    site: "https://cursojs-b931.onrender.com",
    github: "https://github.com/marianetasca/cursoJS/tree/main/projetoAgenda",
    tags: [
      "html",
      "css",
      "javascript",
      "nodejs",
      "bootstrap",
      "express",
      "mongodb",
    ],
    button: "projects.button.view",
    category: "fullstack",
    mini: true,
  },
  {
    id: "api",
    title: "projects.api.title",
    description: "projects.api.description",
    image: api,
    alt: "Agenda de contatos com Node.js",
    site: "",
    github: "https://github.com/marianetasca/cursoJS/tree/main/projetoAgenda",
    tags: ["nodejs", "javascript", "express", "mariadb", "sequelize"],
    button: "projects.button.view",
    category: "backend",
    mini: false,
  },
  {
    id: "formulario",
    title: "projects.form_validation.title",
    description: "projects.form_validation.description",
    image: formulario,
    alt: "Formulário com validação em JavaScript",
    site: "https://marianetasca.github.io/cursoJS/formularioClasse/",
    github:
      "https://github.com/marianetasca/cursoJS/tree/main/formularioClasse",
    tags: ["html", "css", "javascript"],
    button: "projects.button.view",
    category: "frontend",
    mini: true,
  },
];
