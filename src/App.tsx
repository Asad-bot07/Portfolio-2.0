import React from "react";
import { cn } from "./Utils/Utilities";
import { Spotlight } from "./Components/UI/Spotlight";
import { motion } from "motion/react";
import { TextFlip } from "./Components/Fonts/Text-flip";
import { fadeUpVariant, fadeUpVariant2 } from "./Utils/Animations";
import Asad from "./assets/Asad.png";

export const App: React.FC = () => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    return (
      <div className="flex-col relative flex min-h-screen overflow-hidden  bg-black/[0.96] antialiased items-center justify-center">
        <motion.img
          src={Asad}
          alt=""
          className="z-10 sm:size-60 size-50"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
        />
        <div
          className={cn(
            "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none [background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
          )}
        />
        {/* <Spotlight
        className="-top-10 -left-10 md:-top-20 md:left-80 z-10"
        fill="white"
      /> */}
        <motion.div variants={fadeUpVariant} initial="hidden" animate="visible">
          <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
            <TextFlip
              words={[
                "Frontend Developer",
                "UI/UX Designer",
                "AI/ML",
                "Tech Enthusiast",
              ]}
            />
          </motion.div>
        </motion.div>
        <motion.p
          className="mt-4 text-center text-sm text-neutral-600 dark:text-neutral-400 z-50"
          variants={fadeUpVariant2}
          initial="hidden"
          animate="visible"
        >
          Minimal hobbies, maximum coding.
        </motion.p>
      </div>
    );
  }

  return (
    <div className="flex-col relative flex min-h-screen overflow-hidden  bg-black/[0.96] antialiased items-center justify-center">
      <motion.img
        src={Asad}
        alt=""
        className="z-10 sm:size-60 size-50"
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none [background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />
      <Spotlight
        className="-top-10 -left-10 md:-top-20 md:left-80 z-10"
        fill="white"
      />
      <motion.div variants={fadeUpVariant} initial="hidden" animate="visible">
        <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
          <TextFlip
            words={[
              "Frontend Developer",
              "UI/UX Designer",
              "AI/ML",
              "Tech Enthusiast",
            ]}
          />
        </motion.div>
      </motion.div>
      <motion.p
        className="mt-4 text-center text-sm text-neutral-600 dark:text-neutral-400 z-50"
        variants={fadeUpVariant2}
        initial="hidden"
        animate="visible"
      >
        Minimal hobbies, maximum coding.
      </motion.p>
    </div>
  );
};
