import type React from "react";
import { PinContainer } from "../Components/PointedProjects/PinContainer";
import CurrencyConverter from "../assets/currencyConverter.png";
import PasswordGenerator from "../assets/password.png";
import Grimtok from "../assets/grimtok.png";
import Todo from "../assets/todo.png";
import Sneakick from "../assets/sneakick.gif";
import QR from "../assets/qr.gif";
// import weather from "../assets/weather.gif";
import { Particles } from "../Components/UI/Particles";

type ProjectType = {
  title?: string;
  href?: string;
  name?: string;
  des?: string;
  img?: string;
};

const Projects: ProjectType[] = [
  {
    title: "currency-converter.com",
    href: "https://asad-bot07.github.io/Currency-Converter/",
    name: "Currency Converter",
    des: "This is a responsive and animated currency converter built withReact, Tailwind CSS, and a custom hook. It allows users to convert between any two currencies using real-time exchange rates fetched from an open API.",
    img: CurrencyConverter,
  },
  {
    title: "password-generator.com",
    href: "https://asad-bot07.github.io/Password-Generator/",
    name: "Password Generator",
    des: "A responsive and customizable password generator built with React, Vite, and Tailwind CSS. Easily generate secure passwords with options for length, numbers, and special characters all in a sleek and minimal UI.",
    img: PasswordGenerator,
  },
  {
    title: "grimtok.com",
    href: "https://grim-tok.vercel.app/",
    name: "GrimTok",
    des: "GrimTok,  A boredom-born project built with React, TypeScript, and Vite. A minimal, fun playground to experiment with modern web tools.",
    img: Grimtok,
  },
  {
    title: "todolist.com",
    href: "https://to-do-with-type-script-ashy.vercel.app/",
    name: "To Do List",
    des: "A modern, responsive To-Do App built with React, TypeScript, and Tailwind CSS.This app allows users to manage tasks efficiently, set deadlines, and delete completed tasks dynamically.",
    img: Todo,
  },
  {
    title: "qrgenerator.com",
    href: "https://asad-bot07.github.io/qr-code-generator/",
    name: "OR Generator",
    des: "Generate QR codes instantly using this minimal web app built with HTML, Tailwind CSS, and JavaScript.",
    img: QR,
  },
  {
    title: "sneakick.com",
    href: "https://sneakick.vercel.app/",
    name: "Sneakick",
    des: "Sneakick, A modern, responsive sneaker e-commerce frontend with dynamic cart, user auth, image carousel, and multi-option checkout, built with HTML, JavaScript, and Tailwind CSS.",
    img: Sneakick,
  },
  // {
  //   title: "weatherforecast.com",
  //   href: "https://weather-app-six-khaki-15.vercel.app/",
  //   name: "WeatherNow",
  //   des: "WeatherNow is a minimal, mobile-first weather application that allows users to search cities around the world and view real-time temperature and accurate local time.",
  //   img: weather,
  // },
];

export const ProjectPage: React.FC = () => {
  return (
    <div className="bg-black relative h-[110vh] z-10 overflow-hidden w-ful">
      <Particles/>
      <div className="absolute inset-0 z-50  mt-10 mb-15 flex flex-wrap justify-center gap-10">
        {Projects.map((project, index) => (
          <PinContainer key={index} title={project.title} href={project.href}>
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {project.name}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500">{project.des}</span>
              </div>
              <img
                src={project.img}
                alt={project.name}
                className="mt-4 object-cover w-full h-40 rounded-lg"
              />
            </div>
          </PinContainer>
        ))}
      </div>

    </div>
  );
};
