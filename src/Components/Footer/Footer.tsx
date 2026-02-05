import React from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandReddit,
  IconBrandX,
} from "@tabler/icons-react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-950 text-white py-12 flex flex-col items-center justify-center space-y-8 border-t border-gray-800 min-h-[25vh]">
      <div className="flex flex-col items-center space-y-6">
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight cursive">
          My Socials
        </h2>
        <div className="flex items-center gap-4">
          {[
            { href: "https://github.com/Asad-bot07/", Icon: IconBrandGithub },
            {
              href: "https://www.linkedin.com/in/asad-hussain-765502319/",
              Icon: IconBrandLinkedin,
            },
            { href: "https://x.com/asad2408dev", Icon: IconBrandX },
            {
              href: "https://www.reddit.com/user/Huge-Set-8146/",
              Icon: IconBrandReddit,
            },
          ].map(({ href, Icon }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-gray-700 group-hover:scale-110">
                <Icon className="h-6 w-6 text-neutral-300 transition-colors group-hover:text-white" />
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="text-sm text-white/30 font-medium tracking-wide">
        © 2025 Asad Hussain
      </div>
    </footer>
  );
};
