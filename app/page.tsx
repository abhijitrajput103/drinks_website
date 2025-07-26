'use client';
import FlavourSection from "./components/FlavorSection";
import Hero from "./components/Hero";
import MessageSection from "./components/MessageSection";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

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
          <div className="h-dvh border border-red-500"></div>
        </div>
      </div>
    </>
  );
}
