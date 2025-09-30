import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const Partition: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const pathRef = useRef<SVGPathElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const path = pathRef.current;
        
        if (!container || !path) return;

        // const initialPath = `M 10 100 Q 500 100 990 100`;
        const finalPath = `M 10 100 Q 500 100 990 100`;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Create a curved path based on mouse position
            const curvedPath = `M 10 100 Q ${x} ${y} 990 100`;
            
            gsap.to(path, {
                attr: { d: curvedPath },
                duration: 0.3,
                ease: "power3.out"
            });
        };

        const handleMouseLeave = () => {
            gsap.to(path, {
                attr: { d: finalPath },
                duration: 0.5,
                ease: "bounce"
            });
        };

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);

        // Cleanup event listeners on unmount
        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div 
            ref={containerRef}
            className="w-full bg-black flex justify-center items-center" 
            id="string"
        >
            <svg width="1000" height="200">
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