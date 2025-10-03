import React from "react";
import { SkillsBttn } from "../Tech/SkillsBttn";

type Skill = {
  name: string;
  iconUrl: string;
  customCss?: string;
};

export const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <SkillsBttn
      containerClassName="rounded-full"
      as="button"
      className={`gap-2 dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 ${skill.customCss ?? ""}`}
    >
      <img src={skill.iconUrl} className="h-4 w-4 sm:w-8 sm:h-8 mx-auto" />
      <span className="text-sm">{skill.name}</span>
    </SkillsBttn>
  );
};