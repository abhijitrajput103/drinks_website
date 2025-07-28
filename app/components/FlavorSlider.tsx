"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { flavorlists } from "@/constatnts";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const FlavorSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    if (!sliderRef.current) return;
    const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;
    const buffer= 900;
    if (!isTablet) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "2% top",
          end: `+=${scrollAmount + buffer}px`,
          scrub: true,
          pin: true,
        },
      });

      tl.to(".flavor-section", {
        x: `-${scrollAmount + buffer}px`,
        ease: "power1.inOut",
      });
    }

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
    });

    titleTl
      .to(".first-text-split", {
        xPercent: -30,
        ease: "power1.inOut",
      })
      .to(
        ".flavor-text-scroll",
        {
          xPercent: -22,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        ".second-text-split",
        {
          xPercent: -10,
          ease: "power1.inOut",
        },
        "<"
      );
  });

  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div
        className="flavors"
        style={{ width: `${flavorlists.length * 40}vw` }}
      >
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}
          >
            <Image
              src={`/images/${flavor.color}-bg.svg`}
              alt={`${flavor.name} background`}
              className="absolute bottom-0"
              style={{ width: "100%", height: "auto" }}
              priority
              width={400}
              height={400}
            />

            <Image
              src={`/images/${flavor.color}-drink.webp`}
              alt={`${flavor.name} drink`}
              className="drinks"
              width={400}
              height={400}
            />

            <Image
              src={`/images/${flavor.color}-elements.webp`}
              alt={`${flavor.name} elements`}
              className="elements"
              width={400}
              height={400}
            />
            <h1>{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
