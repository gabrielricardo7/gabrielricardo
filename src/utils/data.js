import { GiSkills } from "react-icons/gi";
import { ImInfo, ImPencil2 } from "react-icons/im";
import { IoIosApps, IoIosMail } from "react-icons/io";
import {
  SiArchlinux,
  SiCss3,
  SiDocker,
  SiFedora,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLinkedin,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiTelegram,
  SiTypescript,
  SiUbuntu,
} from "react-icons/si";
import { TiHome } from "react-icons/ti";

export const author = "Gabriel Ricardo";

export const stack = "Desenvolvedor Front-End";

export const avatar =
  "https://www.gravatar.com/avatar/f12a374ad0cbbadd6ef3613220d00095";

export const pages = [
  { name: "Início", path: "/", icon: TiHome },
  {
    name: "Blog",
    path: "/blog",
    icon: ImPencil2,
  },
  {
    name: "Portfolio",
    path: "/portfolio",
    icon: IoIosApps,
  },
  {
    name: "Skills",
    path: "/skills",
    icon: GiSkills,
  },
  {
    name: "Sobre mim",
    path: "/me",
    icon: ImInfo,
  },
  {
    name: "Contato",
    path: "/links",
    icon: IoIosMail,
  },
];

export const links = [
  {
    name: "Email",
    path: "mailto:gabrielricardo7@gmail.com",
    icon: IoIosMail,
  },
  {
    name: "GitHub",
    path: "https://github.com/gabrielricardo7",
    icon: SiGithub,
  },
  {
    name: "LinkedIn",
    path: "https://linkedin.com/in/gabrielricardo7",
    icon: SiLinkedin,
  },
  {
    name: "Telegram",
    path: "https://t.me/gabrielricardo7",
    icon: SiTelegram,
  },
];

export const distros = [
  {
    name: "Ubuntu",
    icon: SiUbuntu,
  },
  {
    name: "Arch Linux",
    icon: SiArchlinux,
  },
  {
    name: "Fedora",
    icon: SiFedora,
  },
];

export const techs = [
  {
    name: "HTML 5",
    icon: SiHtml5,
  },
  {
    name: "CSS 3",
    icon: SiCss3,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "Python",
    icon: SiPython,
  },
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "Redux",
    icon: SiRedux,
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    name: "Docker",
    icon: SiDocker,
  },
];

export const hardSkills = [
  "Web Semântica",
  "Lógica de Programação",
  "Controle de Versão com Git",
  "Programação Orientada a Objetos",
  "Programação Funcional",
  "Metodologias Ágeis",
  "TDD com Jest, BDD com Cucumber",
  "Noções de UX",
  "State Management",
  "Componentização",
  "APIs RESTful",
  "Programação Assíncrona",
];

export const softSkills = [
  "Adaptação a novos ambientes",
  "Autonomia",
  "Comunicação clara e assertiva",
  "Colaboração",
  "Feedback",
  "Flexibilidade",
  "Aprender com os erros",
  "Persistência",
  "Produtividade",
  "Gerenciamento de tempo",
];

export const projects = [
  {
    img: "/images/capstone-oil-cycle.png",
    title: "Oil Cycle",
    info: "Incentivar o descarte correto do óleo, mostrando para usuários e empresas interessadas.",
    tags: "React | Context API | Chakra UI",
    repo: "https://github.com/victornunesc/Oil-Cycle",
    url: "https://oil-cycle.vercel.app",
  },
  {
    img: "/images/book-shop-react-context.png",
    title: "Book Shop",
    info: "App com carrinho de E-commerce, aplicação desenvolvida em React com o uso de Context API.",
    tags: "React | Context API",
    repo: "https://github.com/gabrielricardo7/book-shop-react-context",
    url: "https://book-shop-react-context.vercel.app",
  },
  {
    img: "/images/fruit-shop-react-redux.png",
    title: "Fruit Shop",
    info: "App com carrinho de E-commerce, aplicação desenvolvida em React, gerenciamento feito com Redux.",
    tags: "React | Redux",
    repo: "https://github.com/gabrielricardo7/fruit-shop-react-redux",
    url: "https://fruit-shop-react-redux.vercel.app",
  },
  {
    img: "/images/shop-cart-react-context-ts.png",
    title: "Shop Cart",
    info: "Aplicação simples, onde podemos adicionar ou remover produtos de um carrinho de compras.",
    tags: "React | Context API | TypeScript",
    repo: "https://github.com/gabrielricardo7/shop-cart-react-context-ts",
    url: "https://shop-cart-react-context-ts.vercel.app",
  },
  {
    img: "/images/counter-react-redux.png",
    title: "Contador",
    info: "Feito com Redux, uma biblioteca JavaScript de código aberto para gerenciar o estado do aplicativo.",
    tags: "React | Redux",
    repo: "https://github.com/gabrielricardo7/counter-react-redux",
    url: "https://contador-react-redux.vercel.app",
  },
  {
    img: "/images/github-card-search-react.png",
    title: "GitHub Card Search",
    info: (
      <>
        Busca por um repositório, utilizando a&nbsp;
        <a
          href="https://docs.github.com/en/rest/reference/repos#get-a-repository"
          target="_blank"
          rel="noopener noreferer"
        >
          API do GitHub
        </a>
        &nbsp;e renderiza um card com algumas informações.
      </>
    ),
    tags: "React",
    repo: "https://github.com/gabrielricardo7/github-card-search-react",
    url: "https://github-card-search-react.vercel.app",
  },
  {
    img: "/images/torneio-tribruxo-react.png",
    title: "Torneio Tribruxo",
    info: (
      <>
        App faz a requisição na&nbsp;
        <a
          href="http://hp-api.herokuapp.com/"
          target="_blank"
          rel="noopener noreferer"
        >
          API do Harry Potter
        </a>
        &nbsp;e renderiza três personagens de casas distintas.
      </>
    ),
    tags: "React",
    repo: "https://github.com/gabrielricardo7/torneio-tribruxo-react",
    url: "https://torneio-tribruxo-react.vercel.app",
  },
  {
    img: "/images/todo-list-react.png",
    title: "To-do List",
    info: "Lista de afazeres, feita para praticar o uso de callbacks no React e também o Spread Operator.",
    tags: "React",
    repo: "https://github.com/gabrielricardo7/todo-list-react",
    url: "https://todo-list-react-gabrielricardo7.vercel.app",
  },
  {
    img: "/images/numeros-aleatorios-react.png",
    title: "Números Aleatórios",
    info: "Renderiza aleatoriamente valores de 0 a 100, com manipulação de eventos do usuário no navegador.",
    tags: "React",
    repo: "https://github.com/gabrielricardo7/numeros-aleatorios-react",
    url: "https://numeros-aleatorios-react.vercel.app/",
  },
  {
    img: "/images/objeto-moeda-gabrielricardo7.png",
    title: "Objeto Moeda",
    info: "Representa se a jogada de uma moeda cai do lado cara ou coroa, com o auxílio de métodos.",
    tags: "HTML5 | CSS3 | JavaScript",
    repo: "https://github.com/gabrielricardo7/objeto-moeda",
    url: "https://gabrielricardo7.github.io/objeto-moeda",
  },
  {
    img: "/images/magic-8-ball-gabrielricardo7.png",
    title: "Bola-8 Mágica",
    info: "Esfera de plástico, parecida com uma bola oito grande, usada para adivinhar ou pedir conselhos.",
    tags: "HTML5 | CSS3 | JavaScript",
    repo: "https://github.com/gabrielricardo7/magic-8-ball",
    url: "https://gabrielricardo7.github.io/magic-8-ball",
  },
  {
    img: "/images/labirinto-js-gabrielricardo7.png",
    title: "Labirinto JS",
    info: "Array 2D de células, permite que o jogador se mova num passo de cada vez com as teclas de cursor.",
    tags: "HTML5 | CSS3 | JavaScript",
    repo: "https://github.com/gabrielricardo7/labirinto-js",
    url: "https://gabrielricardo7.github.io/labirinto-js",
  },
];
