import { curve, heroBackground, robot, astro, impetuslogo } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BottomLine } from "./design/Hero";
import { useRef } from "react";
import { BackgroundCircles } from "./design/Hero";
import { Gradient } from "./design/Services";
import { grid } from "../assets";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        {/* Background Space Effect and Grid */}
        <div className="absolute inset-0 z-0 bg-space-effect bg-grid-lines"></div>

        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            IEEE UVCE PRESENTS ANNUAL NATIONAL-LEVEL <br /> TECHNICAL STUDENT EXTRAVAGANZA
          </p>
          <h1 className="h1 mb-6 text-7xl md:text-5xl lg:text-9xl font-daggersquare">
            <span className="inline-block relative">
              IMPETUS 25.0
            </span>
          </h1>
          {/* Logo and Buttons Container */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <img 
              src={impetuslogo} 
              alt="IMPETUS 25.0 Logo" 
              className="block mx-auto w-48 sm:w-64 md:w-80 lg:w-96 relative -mt-4" 
            />
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <Button 
                href="https://impetus-events.vercel.app/" 
                className="text-lg sm:text-xl md:text-2xl px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 w-full md:w-auto text-center"
              >
                REGISTER FOR EVENTS
              </Button>
              
              <Button href="https://unstop.com/p/all-in-one-pass-impetus-250-university-visvesvaraya-college-of-engineering-uvce-bangalore-1426030" className="text-lg sm:text-xl md:text-2xl px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 w-full md:w-auto text-center">ALL IN ONE PASS</Button>
            </div>
          </div>
        </div>
        
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]" />
        </div>
      </div>
      <br />
      <Gradient/>
    </Section>
  );
};

export default Hero;
