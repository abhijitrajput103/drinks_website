import React from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

const FooterSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <section className="footer-section relative bg-black overflow-hidden">
      {/* Top Dip */}
      <Image
        src="/images/footer-dip.png"
        width={1000}
        height={1000}
        className="w-full object-cover -translate-y-1"
        alt="footer dip"
      />

      {/* Main Footer Container */}
      <div className="relative pt-[10vh] md:pt-[20vh] min-h-[80vh] flex flex-col justify-between">
        {/* Title */}
        <div className="overflow-hidden z-10">
          <h1 className="general-title text-center text-milk py-5">
            #CHUGRESPONSIBLY
          </h1>
        </div>

        {/* Background Visual (Image on mobile, Video on desktop) */}
        {isMobile ? (
          <Image
            src="/images/footer-drink.png"
            alt="footer drink"
            width={1000}
            height={1000}
            className="absolute top-0 left-0 w-full h-auto object-contain z-0"
          />
        ) : (
          <video
            src="/videos/splash.mp4"
            autoPlay
            playsInline
            muted
            loop
            className="absolute top-0 left-0 w-full h-auto object-contain mix-blend-lighten z-0"
          />
        )}

        {/* Social Icons */}
        <div className="flex justify-center gap-5 relative z-10 mt-10 md:mt-20">
          <div className="social-btn">
            <Image src="/images/yt.svg" width={30} height={30} alt="youtube" />
          </div>
          <div className="social-btn">
            <Image src="/images/insta.svg" width={30} height={30} alt="instagram" />
          </div>
          <div className="social-btn">
            <Image src="/images/tiktok.svg" width={30} height={30} alt="tiktok" />
          </div>
        </div>

        {/* Footer Links + Newsletter */}
        <div className="mt-24 md:px-10 px-5 flex flex-col md:flex-row justify-between gap-10 text-milk font-paragraph font-medium text-sm md:text-lg z-10 relative">
          {/* Links */}
          <div className="flex flex-col md:flex-row gap-10">
            <div>
              <p className="mb-2">SPYLT Flavors</p>
            </div>
            <div>
              <p className="mb-1">Chug Club</p>
              <p className="mb-1">Student Marketing</p>
              <p className="mb-1">Dairy Dealers</p>
            </div>
            <div>
              <p className="mb-1">Company</p>
              <p className="mb-1">Contacts</p>
              <p className="mb-1">Tasty Talk</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:max-w-lg w-full">
            <p>
              Get Exclusive Early Access and Stay Informed About Product Updates, Events, and More!
            </p>
            <div className="flex justify-between items-center border-b border-[#D9D9D9] py-4 mt-6">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-transparent placeholder:text-[#999999] focus:outline-none"
              />
              <Image src="/images/arrow.svg" width={20} height={20} alt="arrow" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 text-xs md:text-sm text-milk px-5 md:px-10 z-10 relative">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p>© 2025 Spylt - All Rights Reserved</p>
            <div className="flex gap-4">
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
