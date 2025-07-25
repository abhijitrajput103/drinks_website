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
    const scrollAmount =
      sliderRef.current ? sliderRef.current.scrollWidth - window.innerWidth : 0;
    if (!isTablet) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "2% top",
          end: `+=${scrollAmount + 1500}px`,
          scrub: true,
          pin: true,
        },
      });

      tl.to(".flavor-section", {
        x: `-${scrollAmount + 1500}px`,
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
        className="flavors flavor-section"
        style={{ width: `${flavorlists.length * 40}vw` }}
      >
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className={`relative z-30 w-80 md:w-[80vw] lg:w-[40vw] h-80 md:h-[50vh] lg:h-[70vh] flex-none ${flavor.rotation}`}
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
              height={200}
            />
            <h1>{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
