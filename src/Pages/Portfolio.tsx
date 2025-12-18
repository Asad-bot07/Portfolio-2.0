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
import ResumeBttn from "../Components/Resume/ResumeBtn";
import About from "../Components/Marquee/MarqueeMotion";
// import { Snowfall } from "react-snowfall";

function Portfolio() {
  //   const items = [
  //     { label: "Home", href: "#" },
  //     { label: "About", href: "#" },
  //     { label: "Contact", href: "#" },
  //   ];

  if (window.matchMedia("(max-width: 768px)").matches) {
    return (
      <div className="relative min-h-screen overflow-hidden">
        <CursorFollower />
        <Landing />
        <AboutPage />
        {/* <Partition/> */}
        <SkillsPage />
        <MarqueeScreen text="PROJECTS" end={1400} percent={-100} />
        <ProjectPage />
        {/* <MarqueeScreen text="CONNECT WITH ME" end={1000} percent={-250}/>
      <div className="bg-black h-[120vh] items-center justify-center flex">
        <FeedBackForm/>
      </div> */}
        {/* <MarqueeScreen text="ACHIEVEMENTS" end={3000}/> */}
        <About
          name="feel free to connect!"
          img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADoklEQVR4nO2aR2hVQRSGv0SxJ3Z0IUqiRASFCDZERbEhKqjRGMWVO8WdG1GxV8RN1F0QJYISBBUL4sKCsSBYFyFiWcSKLUrUWHPlwHkwhHfLu+/OvLfwhwPhzZ0788+cOfOfcwP/4RRDgUpgJ3AcuA28BX4CHtCRPEV3YClwBHipk/WzVvIQU3XFv4ZM3rQX5AkKgSrgbgaTN+06eYApWRDw1MT9cnoGDgFtWZLwgE25IjEMeJQAAU9tfi5ITAA+JkjCAwbm4jxkEo28CPbYNYlRwKeESXh6zpyhFHhjgYQHzHNFQvz3acBEmoAKoEhtAdAYkYTscCcXJHoC90NI9EnTr7e2hRGpcUGiC3A1ZCKyE35YEoHIWNskClQvhU1EXMkPxSF963GAzRF9vCjELb0Ak7NkFVUZyI6gyVQG9Luhu24N44HvGYTORj3Y7dFXpXm6Pn+AcTZJDI55VzTpwS5WqwwgIbY/7gR7BcjsLfpMD+BBDBKZ2j2gaxwSkgdf8nnpaU2IxM44IPFeFUIsHAzwbYkqgh0OSHwDJsYlscrnpc1AmT6zKKHEKMiagcnZyO1UmcW0v8BcfWYE8MUyiTdAeVwSpeqP6V68Tp+RkPnEMonnmknGhl/0qdNLqANw0TKJu8AAskQ6ofdQiwWCvZZJXNb7JBGI/6/WXZAIVRJDfsSxWqAzllGuYdAGAVmcDbb1UwpnLZGQxVmMQ9RYIPHaRXLUHtMTJiEp8CAcoshIgJJyr1MqNJ1iH1Ctf5dkWZuSQ71VhaZzfFBpIqVOwWzgVwwSLarN0Et1j2si9cbBHKK/LVdyUUlIXWukkd9c0N+dYrIx6QajDrVQP3mFkRCl0F/7lOk7Um1OME6rIYLdxuA3DTLTVGYHpaXiRmjpv71atorhwAljFyr0xj1qTKDBcLPBabJI2akV2i59N/q4ohUUAOuB3zrID2C7UVuVtPeYMYlXRtYmfWcAh4FzwBj9XULsyYAds4K1RoisNYSiiUJVvynhKKt8wKfQVhryVeqWDRL9NCNsC9A9nY1a7Sz9YN+s90y6yy2oon4+SaluYo0OIG7hh236jPznQRTURQgAiaNWB5GCQzoMMD6ZieaKU7yQHV+JZdzRwWb6tFdr+5UMk7MUifda0LCOJh1wdJq2ZXqoTZkSBRLJrukixS6sZYp3SmQOMEnrr7s0V0+tqoi9vEdLQIT5HHB28g6tGkpFGD5TfSTlUrmdu+V6clHxD+swjrgtn7/+AAAAAElFTkSuQmCC"
          speed={80}
        />
        <Footer />
        <motion.div
          className="fixed top-5 right-2 z-50 lg:block  bg-black/20 backdrop-blur-2xl rounded-md"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
        >
          <ResumeBttn />
        </motion.div>
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
      <CursorFollower />
      <Landing />
      <AboutPage />
      <Partition />
      <SkillsPage />
      <MarqueeScreen text="PROJECTS" end={1000} percent={-100} />
      <ProjectPage />
      {/* <MarqueeScreen text="CONNECT WITH ME" end={1000} percent={-250}/>
      <div className="bg-black h-[120vh] items-center justify-center flex">
        <FeedBackForm/>
      </div> */}
      {/* <MarqueeScreen text="ACHIEVEMENTS" end={3000}/> */}
      <About
        name="feel free to connect!"
        img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADoklEQVR4nO2aR2hVQRSGv0SxJ3Z0IUqiRASFCDZERbEhKqjRGMWVO8WdG1GxV8RN1F0QJYISBBUL4sKCsSBYFyFiWcSKLUrUWHPlwHkwhHfLu+/OvLfwhwPhzZ0788+cOfOfcwP/4RRDgUpgJ3AcuA28BX4CHtCRPEV3YClwBHipk/WzVvIQU3XFv4ZM3rQX5AkKgSrgbgaTN+06eYApWRDw1MT9cnoGDgFtWZLwgE25IjEMeJQAAU9tfi5ITAA+JkjCAwbm4jxkEo28CPbYNYlRwKeESXh6zpyhFHhjgYQHzHNFQvz3acBEmoAKoEhtAdAYkYTscCcXJHoC90NI9EnTr7e2hRGpcUGiC3A1ZCKyE35YEoHIWNskClQvhU1EXMkPxSF963GAzRF9vCjELb0Ak7NkFVUZyI6gyVQG9Luhu24N44HvGYTORj3Y7dFXpXm6Pn+AcTZJDI55VzTpwS5WqwwgIbY/7gR7BcjsLfpMD+BBDBKZ2j2gaxwSkgdf8nnpaU2IxM44IPFeFUIsHAzwbYkqgh0OSHwDJsYlscrnpc1AmT6zKKHEKMiagcnZyO1UmcW0v8BcfWYE8MUyiTdAeVwSpeqP6V68Tp+RkPnEMonnmknGhl/0qdNLqANw0TKJu8AAskQ6ofdQiwWCvZZJXNb7JBGI/6/WXZAIVRJDfsSxWqAzllGuYdAGAVmcDbb1UwpnLZGQxVmMQ9RYIPHaRXLUHtMTJiEp8CAcoshIgJJyr1MqNJ1iH1Ctf5dkWZuSQ71VhaZzfFBpIqVOwWzgVwwSLarN0Et1j2si9cbBHKK/LVdyUUlIXWukkd9c0N+dYrIx6QajDrVQP3mFkRCl0F/7lOk7Um1OME6rIYLdxuA3DTLTVGYHpaXiRmjpv71atorhwAljFyr0xj1qTKDBcLPBabJI2akV2i59N/q4ohUUAOuB3zrID2C7UVuVtPeYMYlXRtYmfWcAh4FzwBj9XULsyYAds4K1RoisNYSiiUJVvynhKKt8wKfQVhryVeqWDRL9NCNsC9A9nY1a7Sz9YN+s90y6yy2oon4+SaluYo0OIG7hh236jPznQRTURQgAiaNWB5GCQzoMMD6ZieaKU7yQHV+JZdzRwWb6tFdr+5UMk7MUifda0LCOJh1wdJq2ZXqoTZkSBRLJrukixS6sZYp3SmQOMEnrr7s0V0+tqoi9vEdLQIT5HHB28g6tGkpFGD5TfSTlUrmdu+V6clHxD+swjrgtn7/+AAAAAElFTkSuQmCC"
        speed={100}
      />
      <Footer />
      <motion.div
        className="fixed top-8 right-10 z-50 lg:block hidden bg-black/20 backdrop-blur-2xl rounded-md"
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
      >
        <ResumeBttn />
      </motion.div>
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
