import React, { useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { nutrientLists } from "@/constatnts";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

const NutritionSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [lists, setLists] = useState(nutrientLists);

  useEffect(() => {
    if (isMobile) {
      setLists(nutrientLists.slice(0, 3)); // Show only first 3 items on mobile
    } else {
      setLists(nutrientLists); // Show all items on larger screens
    }
  }, [isMobile]);

  useGSAP(() => {
    const titleSplit = SplitText.create(".nutrition-title", {
      type: "chars",
    });
    const paragraphSplit = SplitText.create(".nutrition-section p", {
      type: "words lines",
      linesClass: "paragraph-line",
    });
    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top center",
      },
    });
    contentTl
      .from(titleSplit.chars, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
        ease: "power2.out",
      })
      .from(paragraphSplit.words, {
        yPercent: 300,
        rotate: 3,
        ease: "power1.inOut",
        duration: 0.5,
        stagger: 0.01,
      });

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".nutrition-text-scroll",
        start: "top 80%",
      },
    });
    titleTl.to(".nutrition-text-scroll", {
      clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
      duration: 1,
      opacity: 1,
      ease: "power1.inOut",
    });
  });

  return (
    <section className="nutrition-section">
      <Image
        src="/images/slider-dip.png"
        alt="Nutrition"
        className="w-full object-cover"
        width={500}
        height={500}
      />

      <Image
        src="/images/big-img.png"
        alt="Nutrition Info"
        className="big-img"
        width={500}
        height={500}
      />

      <div className="flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:mt-0">
        <div className="relative inline-block md:translate-y-20">
          <div className="general-title relative flex flex-col justify-center items-center gap-24">
            <div className="overflow-hidden place-self-start">
              <h1 className="nutrition-title">It still does</h1>
            </div>
            <div
              style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
              className="nutrition-text-scroll place-self-start"
            >
              <div className="bg-yellow-brown pb-5 md:pt-0 pt-3 md:px-5 px-3">
               <h2 className="text-milk-yellow text-[9vw] sm:text-[7vw] md:text-[6vw] lg:text-[4.5vw] xl:text-6xl font-extrabold leading-tight tracking-tight">
  Body Good
</h2>

              </div>
            </div>
          </div>
        </div>

        <div className="flex md:justify-center items-center translate-y-5">
          <div className="md:max-w-xs max-w-md">
            <p className="text-lg md:text-right text-balance font-paragraph">
              Milk contains a wide array of nutrients, including vitamins,
              minerals, and protein, and this is lactose free
            </p>
          </div>
        </div>

        <div className="nutrition-box">
          <div className="list-wrapper">
            {lists.map((nutrient, index) => (
              <div key={index} className="relative flex-1 col-center">
                <div>
                  <p className="font-paragraph md:text-lg">{nutrient.label}</p>
                  <p className="font-paragraph text-sm mt-2">up to</p>
                  <p className="text-2xl md:text-4xl tracking-tighter font-bold">
                    {nutrient.amount}
                  </p>
                </div>
                {index !== lists.length - 1 && (
                  <div className="spacer-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionSection;
