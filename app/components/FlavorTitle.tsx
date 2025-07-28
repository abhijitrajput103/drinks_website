"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const FlavorTitle = () => {
  useGSAP(() => {
    const firstTextSplit = SplitText.create(".first-text-split h1", {
      type: "chars",
    });
    const secondTextSplit = SplitText.create(".second-text-split h1", {
      type: "chars",
    });

    gsap.from(firstTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 30%",
      },
    });

    gsap.to(".flavor-text-scroll", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 10%",
      },
    });

    gsap.from(secondTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 1%",
      },
    });
  });

  return (
    <div className="general-title col-center h-full gap-10 md:gap-16 xl:gap-24 2xl:gap-32">
      <div className="overflow-hidden py-2 md:py-3 first-text-split">
        <h1 className="text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl font-semibold">
          We have 6
        </h1>
      </div>

      <div
        style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
        className="flavor-text-scroll"
      >
        <div className="bg-mid-brown pt-4 pb-6 px-6 md:px-10 text-center">
          <h2 className="text-milk text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight tracking-tight">
            freaking
          </h2>
        </div>
      </div>

      <div className="overflow-hidden py-2 md:py-3 second-text-split">
        <h1 className="text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl font-semibold">
          delicious flavors
        </h1>
      </div>
    </div>
  );
};

export default FlavorTitle;
