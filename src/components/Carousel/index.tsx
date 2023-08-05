"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Carousel() {
  const [actualSlide, setActualSlide] = useState(0);

  const nextSlide = () =>
    actualSlide === 3 ? setActualSlide(0) : setActualSlide(actualSlide + 1);

  useEffect(() => {
    const slidesPass = setTimeout(() => nextSlide(), 3500);

    return () => {
      clearTimeout(slidesPass);
    };

    //eslint-disable-next-line
  }, [actualSlide]);

  const crush =
    "https://images.unsplash.com/photo-1627681828965-048a32cdf16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80";

  const images = [
    "https://images.unsplash.com/photo-1690916814572-323fae4cad2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    "https://images.unsplash.com/photo-1690672695423-cbbd332a9349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1675399460091-d8393f5d5cc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2169&q=80",
  ];

  return (
    <section
      id="default-carousel"
      className="relative w-full lg:w-9/12 mx-auto my-8"
    >
      <div className="relative h-80 overflow-hidden md:h-96 lg:h-96">
        {images.map((image, index) => (
          <div
            className="duration-700 ease-in-out object-contain"
            data-carousel-item
            key={index}
          >
            <Image
              width={700}
              height={700}
              src={image}
              className={`${
                actualSlide != index ? "hidden" : ""
              } object-contain absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2`}
              alt="..."
            />
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        {images.map((e, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              actualSlide != index ? "bg-gray-700" : "bg-white"
            }`}
            aria-current="true"
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
          ></button>
        ))}
      </div>
      <button
        onClick={() =>
          actualSlide === 0
            ? setActualSlide(3)
            : setActualSlide(actualSlide - 1)
        }
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        onClick={nextSlide}
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </section>
  );
}
