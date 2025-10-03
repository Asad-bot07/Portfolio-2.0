import gsap from "gsap";
import { useRef, useEffect } from "react";

type Marquee = {
  name ?: string,
  img ?: string,
  num ?:number
}

function About(props : Marquee) {
  const reference = useRef<HTMLDivElement>(null);
  const imgRefs = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    let isAnimating = false;

    const handleWheel = (events: WheelEvent) => {
      if (isAnimating) return;
      
      const refr = reference.current;
      const imgs = imgRefs.current;

      if (events.deltaY > 0) {
        console.log("going neeche");
        isAnimating = true;
        
        gsap.to(refr, {
          xPercent: props.num || -80,
          duration: 80,
          repeat: -1,
          ease: "none",
        });

        imgs.forEach(img => {
          if (img) {
            gsap.to(img, {
              rotate: 0,
              duration: 0.3
            });
          }
        });
        
        setTimeout(() => isAnimating = false, 100);
      } else {
        console.log("going upar");
        isAnimating = true;
        
        gsap.to(refr, {
          xPercent: 0,
          duration: 40,
          repeat: -1,
          ease: "none",
        });

        imgs.forEach(img => {
          if (img) {
            gsap.to(img, {
              rotate: 180,
              duration: 0.3
            });
          }
        });
        
        setTimeout(() => isAnimating = false, 100);
      }
    };

    window.addEventListener("wheel", handleWheel);
    gsap.to(reference.current, {
      xPercent: -100,
      duration: 40,
      repeat: -1,
      ease: "none",
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const addToImgRefs = (el: HTMLImageElement | null) => {
    if (el && !imgRefs.current.includes(el)) {
      imgRefs.current.push(el);
    }
  };

  return (
    <div className="flex overflow-hidden sm:h-[80vh]" id="AboutCarousel">
      <div className="flex" ref={reference}>
        {[...Array(25)].map((_, index) => (
          <div key={index} className="bg-sky-300/40 flex shrink-0 items-center gap-20 py-15 px-5">
            <h1 className=" text-6xl sm:text-[40vh] whitespace-nowrap font-bold"> {props.name || "None"} </h1>
            <img
              src={props.img || "https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"}
              alt="arrow"
              className="h-[60px]  sm:h-[200px] transition-transform"
              ref={addToImgRefs}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;