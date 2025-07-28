"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const MessageSection = () => {
  useGSAP(() => {
    const firstMsgSplit = SplitText.create(".first-message", {
      type: "words",
    });
    const secMsgSplit = SplitText.create(".second-message", {
      type: "words",
    });
    const paragraphSplit = SplitText.create(".message-content p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    gsap.to(firstMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        end: "30% center",
        scrub: true,
      },
    });
    gsap.to(secMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".second-message",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "top 60%",
      },
    });
    revealTl.to(".msg-text-scroll", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
    });

    const paragraphTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".message-content p",
        start: "top center",
      },
    });
    paragraphTl.from(paragraphSplit.words, {
      yPercent: 300,
      rotate: 3,
      ease: "power1.inOut",
      duration: 1,
      stagger: 0.01,
    });
  });

  return (
    <section className="message-content">
      <div className="container mx-auto flex-col items-center justify-center py-20 sm:py-28 px-4 sm:px-8 relative">
        <div className="w-full h-full">
          <div className="msg-wrapper flex flex-col justify-center items-center text-center gap-10 sm:gap-14 md:gap-24">
            <h1 className="first-message text-[2rem] sm:text-[3rem] md:text-[5rem] lg:text-[6rem] 2xl:text-[8.5rem] font-bold uppercase text-[#faeade10] leading-tight tracking-tight">
              Stir up your fearless past and
            </h1>

            <div
              style={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              }}
              className="msg-text-scroll rotate-[3deg] absolute z-10"
            >
              <div className="bg-light-brown px-4 py-2 sm:px-6 sm:py-4">
                <h2 className="text-red-brown text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Fuel Up
                </h2>
              </div>
            </div>

            <h1 className="second-message text-[2rem] sm:text-[3rem] md:text-[5rem] lg:text-[6rem] 2xl:text-[8.5rem] font-bold uppercase text-[#faeade10] leading-tight tracking-tight">
              your future with every gulp of Perfect Protein
            </h1>
          </div>

          <div className="flex justify-center mt-10 md:mt-20">
            <div className="max-w-md px-5 sm:px-10 text-center">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-milk font-paragraph">
                Rev up your rebel spirit and feed the adventure of life with
                SPYLT, where you’re one chug away from epic nostalgia and
                fearless fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
