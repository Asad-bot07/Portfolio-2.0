import gsap from "gsap";
import { useRef, useEffect } from "react";

type MarqueeProps = {
  name?: string;
  img?: string;
  speed?: number; // Higher number = Slower (it's duration based)
};

function About(props: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRefs = useRef<HTMLImageElement[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Slow down the base speed. 
    // Higher duration = Slower movement. 
    // Try 60-80 for a very chill crawl.
    const duration = props.speed || 60; 

    // Create a timeline for better control
    timelineRef.current = gsap.timeline({
      repeat: -1,
      defaults: { ease: "none" }
    });

    timelineRef.current.to(container, {
      xPercent: -50, // Only move half if you have enough items for a seamless loop
      duration: duration,
    });

    const handleWheel = (e: WheelEvent) => {
      if (!timelineRef.current) return;

      const isScrollingDown = e.deltaY > 0;

      // Adjust the timeScale slightly on scroll for a "nudge" effect 
      // instead of killing/restarting the whole animation
      gsap.to(timelineRef.current, {
        timeScale: isScrollingDown ? 1.5 : -1.5,
        duration: 0.5,
        onComplete: () => {
          // Gently return to normal slow speed
          gsap.to(timelineRef.current!, { timeScale: 1, duration: 1 });
        }
      });

      // Flip the arrows based on direction
      gsap.to(imgRefs.current, {
        rotate: isScrollingDown ? 0 : 180,
        duration: 0.4,
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      timelineRef.current?.kill();
    };
  }, [props.speed]);

  return (
    <div className="flex overflow-hidden h-[20vh] items-center bg-sky-300/20" id="AboutCarousel">
      <div className="flex whitespace-nowrap" ref={containerRef}>
        {[...Array(2)].map((_, setIdx) => (
          <div key={setIdx} className="flex shrink-0 items-center gap-10 md:gap-20 px-5">
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className="flex items-center gap-10 md:gap-20">
                <h1 className="text-[10vh] md:text-[10vh] font-bold uppercase tracking-tighter press-start-2p-regular">
                  {props.name}
                </h1>
                <img
                  src={props.img}
                  alt="arrow"
                  className="h-12 md:h-24 object-contain"
                  ref={(el) => {
                    if (el && !imgRefs.current.includes(el)) {
                      imgRefs.current.push(el);
                    }
                  }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;