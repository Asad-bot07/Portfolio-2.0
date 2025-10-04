import About from "../Components/Marquee/MarqueeMotion";
import { motion } from "motion/react";
import { fadeUpVariant } from "../Utils/Animations";

function AboutPage() {
  return (
    <div className="">
      <About name="About Me" img="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" speed={80}/>
      <div className="bg-black py-10 md:py-20 min-h-[80vh] px-4 md:px-0">
        <motion.div
          className="max-w-5xl mx-auto"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
        >
          <p className=" spectral-semibold mb-6 text-xl md:text-2xl leading-relaxed text-gray-300">
            Hi folks!!, I'm{" "}
            <span className="cursive text-3xl md:text-4xl text-white ">
              Asad Hussain
            </span>{" "}
            a passionate tech enthusiast and aspiring software developer,
            currently pursuing my
            <span className="font-semibold cursive text-2xl md:text-3xl">
              {" "}
              Bachelor of Computer Applications (BCA)
            </span>{" "}
            at <span className="font-semibold">IEM Kolkata</span> (Batch
            2024–2028).
          </p>

          <p className="mb-6 text-sm md:text-base leading-relaxed text-gray-300 spectral-semibold">
            I'm driven by a strong desire to solve real-world problems through
            technology and build digital solutions that are both
            <span className="font-semibold">innovative</span> and{" "}
            <span className="font-semibold">impactful</span>. With a solid
            foundation in
            <span className="font-semibold text-xl md:text-2xl schoolbell"> C</span>,{" "}
            <span className="font-semibold text-xl schoolbell md:text-2xl"> C++</span>, and{" "}
            <span className="font-semibold schoolbell text-xl md:text-2xl"> Java</span>,
            along with strong problem-solving skills in
            <span className="font-semibold text-xl md:text-2xl schoolbell">
              {" "}
              Data Structures and Algorithms{" "}
            </span>
            , I strive to create efficient and scalable solutions.
          </p>

          <p className="mb-6 text-sm md:text-base leading-relaxed text-gray-300 spectral-semibold">
            My technical toolkit spans across{" "}
            <span className="font-semibold schoolbell text-lg md:text-xl">
              TypeScript
            </span>
            ,{" "}
            <span className="font-semibold schoolbell text-lg md:text-xl">
              {" "}
              JavaScript
            </span>
            ,
            <span className="font-semibold schoolbell text-lg md:text-xl">
              {" "}
              Node.js
            </span>
            ,{" "}
            <span className="font-semibold schoolbell text-lg md:text-xl">
              {" "}
              React.js
            </span>
            ,{" "}
            <span className="font-semibold schoolbell text-lg md:text-xl">
              {" "}
              Tailwind CSS
            </span>
            ,
            <span className="font-semibold schoolbell text-lg md:text-xl">
              {" "}
              Vanilla CSS
            </span>
            , and{" "}
            <span className="font-semibold schoolbell text-lg md:text-xl">
              {" "}
              HTML
            </span>{" "}
            for modern full-stack development. I also love crafting smooth
            animations using
            <span className="font-semibold"> GSAP</span> and{" "}
            <span className="font-semibold">Framer Motion</span>, while managing
            projects effectively with
            <span className="font-semibold text-xl md:text-2xl cursive">
              {" "}
              Git & GitHub
            </span>
            .
          </p>

          <p className="mb-10 text-sm md:text-base leading-relaxed text-gray-300 spectral-semibold">
            Expanding my horizons, I'm learning{" "}
            <span className="font-semibold schoolbell text-lg md:text-xl">
              Python
            </span>{" "}
            and diving into
            <span className="font-semibold schoolbell text-lg md:text-xl">
              {" "}
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
