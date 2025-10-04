import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type TextType = {
  text?: string;
  end?: number;
  percent: number;
};

export const MarqueeScreen: React.FC<TextType> = ({ text, end, percent }) => {
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollDistance, setScrollDistance] = useState(end || 3000);

  useEffect(() => {
    const calculateScrollDistance = () => {
      if (!textRef.current) return;
      
      const textWidth = textRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const calculatedDistance = Math.max(
        (textWidth / viewportWidth) * 2000,
        end || 3000
      );
      
      setScrollDistance(calculatedDistance);
    };

    calculateScrollDistance();
    window.addEventListener("resize", calculateScrollDistance);

    return () => {
      window.removeEventListener("resize", calculateScrollDistance);
    };
  }, [text, end]);

  useEffect(() => {
    if (!textRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(textRef.current, {
        xPercent: percent,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${scrollDistance}`,
          scrub: 1,
          pin: true,
          markers: false,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [percent, scrollDistance]);

  return (
    <section ref={containerRef} className="min-h-screen bg-sky-300/50">
      <h1
        ref={textRef}
        className="flex whitespace-nowrap text-[18vh] md:text-[25vh] lg:text-[20vh] font-bold text-black sm:text-[70vh]"
      >
        {text || "IDK"}
      </h1>
    </section>
  );
};