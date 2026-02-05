import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  img?: string;
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

      {/* Conditional Rendering: Only show this div if img exists */}
      {img && (
        <div className="flex items-center justify-center m-2 px-4">
          <img
            src={img}
            alt={title}
            className="rounded-xl max-h-60 w-full object-cover border border-gray-800"
          />
        </div>
      )}

      <div className="p-6 mt-auto">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-white text-black hover:bg-gray-200 rounded-full text-sm font-semibold transition-all active:scale-95"
        >
          Visit Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
