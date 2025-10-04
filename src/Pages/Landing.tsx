import React from "react";
import { cn } from "../Utils/Utilities";
import { Spotlight } from "../Components/UI/Spotlight";
import { motion } from "motion/react";
import { TextFlip } from "../Components/Fonts/Text-flip";
import { fadeUpVariant, fadeUpVariant2 } from "../Utils/Animations";
import Asad from "../assets/Asad-min.png";
import Shuffle from "../Components/Fonts/ShuffleText";

export const Landing: React.FC = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black/[0.96] antialiased">
      {/* Grid Background */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 select-none [background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] [background-size:40px_40px]"
        )}
      />
      <Spotlight
        className="-left-5 -top-10 z-10 hidden lg:-top-30 lg:left-85 md:top-30 md:left-45 md:block"
        fill="white"
      />
      <motion.img
        src={Asad}
        alt="Asad Hussain"
        className="z-0 h-[250px] w-[250px] rounded-full object-cover md:h-[380px] md:w-[380px]"
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
      />
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
        className="z-20"
      >
        <Shuffle
          text="> ASAD HUSSAIN"
          style={{ 
            color: "white", 
            fontSize: window.innerWidth < 768 ? 20 : 30, 
            marginTop: 25 
          }}
          shuffleDirection="right"
          duration={1.75}
          animationMode="evenodd"
          shuffleTimes={1}
          ease="power3.out"
          stagger={0.03}
          threshold={0.1}
          triggerOnce={true}
          triggerOnHover={true}
          respectReducedMotion={true}
        />
      </motion.div>
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
        className="z-20"
      >
        <div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
          <TextFlip
            words={[
              "Frontend Developer",
              "UI/UX Designer",
              "AI/ML Enthusiast",
              "Tech Enthusiast",
            ]}
          />
        </div>
      </motion.div>

      {/* Tagline */}
      <motion.p
        className="z-50 mt-4 text-center text-sm text-neutral-600 dark:text-neutral-400"
        variants={fadeUpVariant2}
        initial="hidden"
        animate="visible"
      >
        Minimal hobbies, maximum coding.
      </motion.p>
    </div>
  );
};