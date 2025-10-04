import About from "../Components/Marquee/MarqueeMotion";
import { motion } from "motion/react";
import { fadeUpVariant } from "../Utils/Animations";

function AboutPage() {
  return (
    <div>
      <About 
        name="About Me" 
        img="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" 
        speed={80}
      />
      <div className="min-h-[80vh] md:min-h-[50vh] bg-black px-4 py-10 md:px-6 md:py-20 lg:px-8">
        <motion.div
          className="mx-auto max-w-5xl space-y-6"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
        >
          <p className="spectral-semibold text-lg leading-relaxed text-gray-300 md:text-xl lg:text-2xl">
            Hi folks!! I'm{" "}
            <span className="cursive text-2xl text-white md:text-3xl lg:text-4xl">
              Asad Hussain
            </span>
            , a passionate tech enthusiast and aspiring software developer,
            currently pursuing my{" "}
            <span className="cursive text-xl font-semibold md:text-2xl lg:text-3xl">
              Bachelor of Computer Applications (BCA)
            </span>{" "}
            at <span className="font-semibold">IEM Kolkata</span> (Batch 2024–2028).
          </p>
          <p className="spectral-semibold text-sm leading-relaxed text-gray-300 md:text-base lg:text-lg">
            I'm driven by a strong desire to solve real-world problems through
            technology and build digital solutions that are both{" "}
            <span className="font-semibold">innovative</span> and{" "}
            <span className="font-semibold">impactful</span>. With a solid
            foundation in{" "}
            <span className="schoolbell text-lg font-semibold md:text-xl lg:text-2xl">
              C
            </span>
            ,{" "}
            <span className="schoolbell text-lg font-semibold md:text-xl lg:text-2xl">
              C++
            </span>
            , and{" "}
            <span className="schoolbell text-lg font-semibold md:text-xl lg:text-2xl">
              Java
            </span>
            , along with strong problem-solving skills in{" "}
            <span className="schoolbell text-lg font-semibold md:text-xl lg:text-2xl">
              Data Structures and Algorithms
            </span>
            , I strive to create efficient and scalable solutions.
          </p>
          <p className="spectral-semibold text-sm leading-relaxed text-gray-300 md:text-base lg:text-lg">
            My technical toolkit spans across{" "}
            <span className="schoolbell text-base font-semibold md:text-lg lg:text-xl">
              TypeScript
            </span>
            ,{" "}
            <span className="schoolbell text-base font-semibold md:text-lg lg:text-xl">
              JavaScript
            </span>
            ,{" "}
            <span className="schoolbell text-base font-semibold md:text-lg lg:text-xl">
              Node.js
            </span>
            ,{" "}
            <span className="schoolbell text-base font-semibold md:text-lg lg:text-xl">
              React.js
            </span>
            ,{" "}
            <span className="schoolbell text-base font-semibold md:text-lg lg:text-xl">
              Tailwind CSS
            </span>
            ,{" "}
            <span className="schoolbell text-base font-semibold md:text-lg lg:text-xl">
              Vanilla CSS
            </span>
            , and{" "}
            <span className="schoolbell text-base font-semibold md:text-lg lg:text-xl">
              HTML
            </span>{" "}
            for modern full-stack development. I also love crafting smooth
            animations using <span className="font-semibold">GSAP</span> and{" "}
            <span className="font-semibold">Framer Motion</span>, while managing
            projects effectively with{" "}
            <span className="cursive text-lg font-semibold md:text-xl lg:text-2xl">
              Git & GitHub
            </span>
            .
          </p>
          <p className="spectral-semibold text-sm leading-relaxed text-gray-300 md:text-base lg:text-lg">
            Expanding my horizons, I'm learning{" "}
            <span className="schoolbell text-base font-semibold md:text-lg lg:text-xl">
              Python
            </span>{" "}
            and diving into{" "}
            <span className="schoolbell text-base font-semibold md:text-lg lg:text-xl">
              Natural Language Processing (NLP)
            </span>
            , exploring the intersection of AI and real-world applications.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutPage;