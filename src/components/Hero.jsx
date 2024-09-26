import gsap from "gsap";
import { heroVideo, smallHeroVideo } from "../utils";
import { useState, useEffect } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);
    return () => {
      window.removeEventListener('resize', handleVideoSrcSet);
    };
  }, []);

  // Use useEffect to trigger the GSAP animation
  useEffect(() => {
    gsap.to("#hero", { opacity: 1, delay: 1 });
    gsap.to("#cta1", { opacity: 1, y: -55, delay: 1.2, duration: 0.6 });
    gsap.to("#cta2", { opacity: 1, y: -50, delay: 1.2, duration: 0.8 });
  }, []);

  return (
    <section className="w-full nav-height bg-black">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title -tracking-2 opacity-0"> {/* Ensure initial opacity is 0 */}
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video className="pointer-events-none" playsInline={true} autoPlay muted key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="w-full flex flex-col items-center">
        <a id="cta1" href="#highlights" className="btn opacity-0 translate-y-20"> {/* Ensure initial styles */}
          Buy
        </a>
        <p id="cta2" className="font-normal text-xl opacity-0 translate-y-20"> {/* Ensure initial styles */}
          From ₹129800.00*
        </p>
      </div>
    </section>
  );
};

export default Hero;
