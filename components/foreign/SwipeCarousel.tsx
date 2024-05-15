"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 20;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 4,
  stiffness: 200,
  damping: 50,
};

export const SwipeCarousel = ({ slike }: { slike: any }) => {
  const [imgIndex, setImgIndex] = useState(0);
  //const [dragX, setDragX] = useState(useMotionValue(0));
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === slike.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [dragX, slike.length]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < slike.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden bg-white md:rounded-xl py-8">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} slike={slike} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} slike={slike} />
      {/* <GradientEdges /> */}
    </div>
  );
};

const Images = ({ imgIndex, slike }: { imgIndex: number; slike: any }) => {
  return (
    <>
      {slike.map((slika: any, idx: number) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${slika.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-full shrink-0 rounded-xl bg-neutral-800 object-cover"
          />
        );
      })}
    </>
  );
};

const Dots = ({
  imgIndex,
  setImgIndex,
  slike,
}: {
  imgIndex: number;
  setImgIndex: React.Dispatch<React.SetStateAction<number>>;
  slike: any[];
}) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2 flex-wrap">
      {slike.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === imgIndex ? "bgIvanZelenaSvetla" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};

// const GradientEdges = () => {
//   return (
//     <>
//       <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[30px] bg-gradient-to-r from-neutral-950/30 to-neutral-950/0" />
//       <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[30px] bg-gradient-to-l from-neutral-950/30 to-neutral-950/0" />
//     </>
//   );
// };
