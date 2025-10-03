import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  img: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  img,
  link,
}) => {
  return (
    <div className="bg-[#0a0a0a] text-white rounded-2xl shadow-md border border-gray-800 w-full max-w-md flex flex-col overflow-hidden">
      <div className="p-6 flex flex-col gap-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
      <div className="flex-1 flex items-center justify-center m-2 ">
        <img
          src={img}
          alt={title}
          className="rounded-md max-h-60 object-contain"
        />
      </div>
      <div className="p-4">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-white text-black hover:bg-gray-400 rounded-lg text-sm transition"
        >
          Visit
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
