import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export const Partition: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const path = pathRef.current;

    if (!container || !path) return;

    const initialPath = `M 10 100 Q 500 100 990 100`;
    const finalPath = initialPath;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top; 
      const clampedX = Math.max(100, Math.min(900, x));
      const clampedY = Math.max(20, Math.min(180, y));

      const curvedPath = `M 10 100 Q ${clampedX} ${clampedY} 990 100`;

      gsap.to(path, {
        attr: { d: curvedPath },
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(path, {
        attr: { d: finalPath },
        duration: 0.6,
        ease: "elastic.out(1, 0.3)",
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full bg-black flex justify-center items-center py-10"
      id="string"
    >
      <svg className="w-[1000px] h-[200px]">
        <path
          ref={pathRef}
          d="M 10 100 Q 500 100 990 100"
          stroke="white"
          strokeWidth="2"
          fill="transparent"
        />
      </svg>
    </div>
  );
};
