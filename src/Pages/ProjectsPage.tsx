import React, { useEffect, useState } from "react";
import { PinContainer } from "../Components/PointedProjects/PinContainer";
import CurrencyConverter from "../assets/currencyConverter-min.png";
import PasswordGenerator from "../assets/password-min.png";
import Grimtok from "../assets/grimtok-min.png";
import Todo from "../assets/todo-min.png";
import Sneakick from "../assets/sneakick-min.gif";
import QR from "../assets/qr-min.gif";
// import weather from "../assets/weather.gif";
import { Particles } from "../Components/UI/Particles";
import ProjectCard from "../Components/PointedProjects/MobileProjects";

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
    des: "This is a responsive and animated currency converter built with React, Tailwind CSS, and a custom hook.",
    img: CurrencyConverter,
  },
  {
    title: "password-generator.com",
    href: "https://asad-bot07.github.io/Password-Generator/",
    name: "Password Generator",
    des: "A customizable password generator built with React, Vite, and Tailwind CSS.",
    img: PasswordGenerator,
  },
  {
    title: "grimtok.com",
    href: "https://grim-tok.vercel.app/",
    name: "GrimTok",
    des: "A fun playground built with React, TypeScript, and Vite.",
    img: Grimtok,
  },
  {
    title: "todolist.com",
    href: "https://to-do-with-type-script-ashy.vercel.app/",
    name: "To Do List",
    des: "A modern, responsive To-Do App with React + TypeScript.",
    img: Todo,
  },
  {
    title: "qrgenerator.com",
    href: "https://asad-bot07.github.io/qr-code-generator/",
    name: "QR Generator",
    des: "Generate QR codes instantly with HTML, Tailwind & JS.",
    img: QR,
  },
  {
    title: "sneakick.com",
    href: "https://sneakick.vercel.app/",
    name: "Sneakick",
    des: "A sneaker e-commerce frontend with cart, auth, and checkout.",
    img: Sneakick,
  },
];

export const ProjectPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (isMobile) {
    return (
      <div className="bg-black min-h-screen flex flex-col gap-6 p-4">
        {Projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.name || ""}
            description={project.des || ""}
            link={project.href || "#"}
            img={project.img || "couldnt load"}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="bg-black relative h-[120vh] z-10 overflow-hidden w-full">
      <Particles />
      <div className="absolute inset-0 z-50 mt-10 flex flex-wrap justify-center gap-10">
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
