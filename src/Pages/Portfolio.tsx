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
// import { FeedBackForm } from "./FeedBackPage";
import { Footer } from "../Components/Footer/Footer";

function Portfolio() {
  //   const items = [
  //     { label: "Home", href: "#" },
  //     { label: "About", href: "#" },
  //     { label: "Contact", href: "#" },
  //   ];

    if (window.matchMedia("(max-width: 768px)").matches) {
    return (
      <div className="relative min-h-screen overflow-hidden">
      <CursorFollower/>
      <Landing />
      <AboutPage />
      {/* <Partition/> */}
      <SkillsPage />
      <MarqueeScreen text="PROJECTS" end={1400} percent={-100}/>
      <ProjectPage/>
      {/* <MarqueeScreen text="CONNECT WITH ME" end={1000} percent={-250}/>
      <div className="bg-black h-[120vh] items-center justify-center flex">
        <FeedBackForm/>
      </div> */}
      {/* <MarqueeScreen text="ACHIEVEMENTS" end={3000}/> */}
      <Footer/>
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


  return (
    <div className="relative min-h-screen overflow-hidden">
      <CursorFollower/>
      <Landing />
      <AboutPage />
      <Partition/>
      <SkillsPage />
      <MarqueeScreen text="PROJECTS" end={1000} percent={-100}/>
      <ProjectPage/>
      {/* <MarqueeScreen text="CONNECT WITH ME" end={1000} percent={-250}/>
      <div className="bg-black h-[120vh] items-center justify-center flex">
        <FeedBackForm/>
      </div> */}
      {/* <MarqueeScreen text="ACHIEVEMENTS" end={3000}/> */}
      <Footer/>
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
