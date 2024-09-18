import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const DragCards = () => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-neutral-950">
      <h2 className="relative z-0 text-[20vw] font-black text-neutral-800 md:text-[200px]">
        Projects<span className="text-indigo-500">.</span>
      </h2>
      <Cards />
    </section>
  );
};

export default DragCards;

const Cards = () => {
  const containerRef = useRef(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src="https://res.cloudinary.com/dby6tugob/image/upload/v1726482278/calezngsttgpdnt78vck.png"
        alt="Example image"
        rotate="6deg"
        top="20%"
        left="25%"
        className="w-36 md:w-96"
      />
      <Card
        containerRef={containerRef}
        src="https://res.cloudinary.com/dby6tugob/image/upload/v1726482279/mcqvih9alqsavttem7z3.png"
        alt="Example image"
        rotate="12deg"
        top="45%"
        left="60%"
        className="w-24 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src="https://res.cloudinary.com/dby6tugob/image/upload/v1726482279/ihgqys4sws6ajolwvam2.png"
        alt="Example image"
        rotate="-6deg"
        top="20%"
        left="40%"
        className="w-52 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src="https://res.cloudinary.com/dby6tugob/image/upload/v1726482280/e4fukndeqsfaelalvfqb.png"
        alt="Example image"
        rotate="8deg"
        top="50%"
        left="40%"
        className="w-48 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src="https://res.cloudinary.com/dby6tugob/image/upload/v1726563980/yf0yzthjaiccebdfyf15.png"
        alt="Example image"
        rotate="18deg"
        top="20%"
        left="65%"
        className="w-40 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src="https://res.cloudinary.com/dby6tugob/image/upload/v1726563980/nc9igqwotjbytsvfb7wc.png"
        alt="Example image"
        rotate="-3deg"
        top="35%"
        left="55%"
        className="w-24 md:w-96"
      />
    </div>
  );
};

const Card = ({ containerRef, src, alt, top, left, rotate, className }) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      // Uncomment below and remove dragElastic to remove movement after release
      //   dragMomentum={false}
      dragElastic={0.65}
    />
  );
};
