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
      <img src={skill.iconUrl} className="w-8 h-8 mx-auto" />
      <span>{skill.name}</span>
    </SkillsBttn>
  );
};