import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type TextType = {
    text? : string
}

export const MarqueeScreen: React.FC<TextType> = ({text}) => {
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!textRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(textRef.current, {
        xPercent: -150, 
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=3000", 
          scrub: 1,
          pin: true,
          markers: true, 
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-sky-300/50 min-h-screen"
    >
      <h1
        ref={textRef}
        className="text-black font-bold text-[15vh] sm:text-[70vh] whitespace-nowrap"
      >
        {text || 'IDK'}
      </h1>
    </section>
  );
};
