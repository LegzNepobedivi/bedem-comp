"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import Link from "next/link";

const ForeignCarousel = () => {
  return (
    <div className="bg-white">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-slate-200">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <Link href="/nekretnine">
      <div
        key={card.id}
        className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 rounded-2xl"
      >
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        ></div>
        {/* <div className="absolute inset-0 z-10 grid place-content-end">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div> */}
        <div className="absolute inset-0 z-10 gird place-content-end ">
          <p className="bgIvanZelena p-2 pb-3 text-4xl font-black uppercase text-white backdrop-blur-lg">
            {card.title}
          </p>
          <div className="bgIvanZelena p-2">{card.price}</div>
        </div>
      </div>
    </Link>
  );
};

export default ForeignCarousel;

const cards = [
  {
    url: "/images/slika1.jpg",
    title: "Title 1",
    id: 1,
    description: "Description 1",
    price: "1 000 000",
  },
  {
    url: "/images/slika1.jpg",
    title: "Title 2",
    id: 2,
    description: "Description 1",
    price: "1 000 000",
  },
  {
    url: "/images/slika1.jpg",
    title: "Title 3",
    id: 3,
    description: "Description 1",
    price: "1 000 000",
  },
  {
    url: "/images/slika1.jpg",
    title: "Title 4",
    id: 4,
    description: "Description 1",
    price: "1 000 000",
  },
  {
    url: "/images/slika1.jpg",
    title: "Title 5",
    id: 5,
    description: "Description 1",
    price: "1 000 000",
  },
  {
    url: "/images/slika1.jpg",
    title: "Title 6",
    id: 6,
    description: "Description 1",
    price: "1 000 000",
  },
  {
    url: "/images/slika1.jpg",
    title: "Title 7",
    id: 7,
    description: "Description 1",
    price: "1 000 000",
  },
];
