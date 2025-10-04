import gsap from "gsap";
import { useRef, useEffect } from "react";

type MarqueeProps = {
  name?: string;
  img?: string;
  speed?: number;
};

function About(props : MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRefs = useRef<HTMLImageElement[]>([]);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // nomral anime
    animationRef.current = gsap.to(container, {
      xPercent: -100,
      duration: 40,
      repeat: -1,
      ease: "none",
    });

    const handleWheel = (e: WheelEvent) => {
      if (isAnimatingRef.current || !animationRef.current) return;
      
      isAnimatingRef.current = true;
      const isScrollingDown = e.deltaY > 0;
      animationRef.current.kill();
      animationRef.current = gsap.to(container, {
        xPercent: isScrollingDown ? `-${props.speed}` : 0,
        duration: isScrollingDown ? props.speed : 40,
        repeat: -1,
        ease: "none",
      });
      gsap.to(imgRefs.current, {
        rotate: isScrollingDown ? 0 : 180,
        duration: 0.3,
      });

      setTimeout(() => {
        isAnimatingRef.current = false;
      }, 100);
    };

    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      animationRef.current?.kill();
    };
  }, [props.speed]);

  return (
    <div className="flex overflow-hidden sm:h-[80vh]" id="AboutCarousel">
      <div className="flex" ref={containerRef}>
        {Array.from({ length: 25 }, (_, i) => (
          <div key={i} className="bg-sky-300/40 flex shrink-0 items-center gap-20 py-15 px-5">
            <h1 className="text-6xl sm:text-[40vh] whitespace-nowrap font-bold">
              {props.name}
            </h1>
            <img
              src={props.img}
              alt="arrow"
              className="h-[60px] sm:h-[200px] transition-transform"
              ref={(el) => {
                if (el && !imgRefs.current.includes(el)) {
                  imgRefs.current.push(el);
                }
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;