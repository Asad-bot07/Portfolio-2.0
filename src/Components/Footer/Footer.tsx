import React from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandReddit,
  IconBrandX,
} from "@tabler/icons-react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-950 text-white py-6 flex flex-col items-center space-y-4 border-t border-gray-800">
      <div className="flex flex-col space-y-3">
        <div className="text-center">
            <span>My Socials</span>
        </div>
        <div className="flex gap-3">
            <a href="https://github.com/Asad-bot07/">
                <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer">
                <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                </span>
            </a>
            <a href="https://www.linkedin.com/in/asad-hussain-765502319/">
                <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer">
                <IconBrandLinkedin className="h-4 w-4 text-neutral-800 dark:text-neutral-300"/>
                </span>
            </a>
            <a href="https://x.com/asad2408dev">
                <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer">
                <IconBrandX className="h-4 w-4 text-neutral-800 dark:text-neutral-300"/>
                </span>
            </a>
            <a href="https://www.reddit.com/user/Huge-Set-8146/">
                <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer">
                <IconBrandReddit className="h-4 w-4 text-neutral-800 dark:text-neutral-300"/>
                </span>
            </a>
        </div>
      </div>
      <div className="text-sm text-white/30 font-medium">
        © 2025 Asad Hussain
      </div>
    </footer>
  );
};
