'use client';
import FlavourSection from "./sections/FlavorSection";
import Hero from "./sections/Hero";
import MessageSection from "./sections/MessageSection";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import NutritionSection from "./sections/NutritionSection";
import BenefitSection from "./sections/BenefitSection";
import TestimonialsSection from "./sections/TestimonialsSections";
import FooterSection from "./sections/FooterSection";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <MessageSection />
          <FlavourSection />
          <NutritionSection/>
          <div>
            <BenefitSection/>
            <TestimonialsSection/>
          </div>
          <FooterSection/>
        </div>
      </div>
    </>
  );
};