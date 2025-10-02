import AboutPage from "./AboutPage";
import { Landing } from "./Landing";
import SkillsPage from "./SkillsPage";
import CircularText from "../Components/Rotate/RotatingText";
import { motion } from "motion/react";
import { fadeUpVariant } from "../Utils/Animations";
import { Partition } from "../Components/Partition/Partition";
import CursorFollower from "../Components/Cursor/Cursor";
import { MarqueeScreen } from "../Components/Experiences-Achievements/ExpAndAchi";
import { ProjectPage } from "./ProjectsPage";

function Portfolio() {
  //   const items = [
  //     { label: "Home", href: "#" },
  //     { label: "About", href: "#" },
  //     { label: "Contact", href: "#" },
  //   ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <CursorFollower/>
      <Landing />
      <AboutPage />
      <Partition/>
      <SkillsPage />
      <MarqueeScreen text="PROJECTS" end={1000}/>
      <ProjectPage/>
      <MarqueeScreen text="ACHIEVEMENTS" end={3000}/>
      <motion.div
        className="fixed bottom-4 right-4 z-50 lg:block hidden"
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
      >
        <CircularText
          text="ASADHUSSAIN*PORTFOLIO*"
          onHover="speedUp"
          spinDuration={20}
        />
      </motion.div>
    </div>
  );
}

export default Portfolio;
