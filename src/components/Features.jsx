import React from "react";
import { useRef, useEffect } from "react";
import { explore1Img, explore2Img, exploreVideo } from "../utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const scrollRef = useRef();
  const scrollRef1 = useRef();
  const videoRef = useRef();

  useEffect(() => {
    // Animate the title first
    gsap.to("#feature_title", {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 0.9,
      scrollTrigger: {
        trigger: scrollRef.current,
        start: "top 80%",
        end: "top 68%",
        scrub: 2,
      },
      ease: "power1.inOut",
    });

    // Animate the text in Para
    gsap.to(".g_text", {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 0.9,
      delay: 0.5,
      scrollTrigger: {
        trigger: scrollRef1.current,
        start: "top 90%",
        end: "top 80%",
        scrub: 2,
      },
      ease: "power1.inOut",
    });

    // Control video play/pause based on scroll
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        start: "-10% bottom",
        onEnter: () => {
          videoRef.current.play();
        },
        onLeaveBack: () => {
          videoRef.current.currentTime = 0; // Reset the video when scrolling back
          videoRef.current.play(); // Play the video again
        },
      },
    });

    gsap.to(".g_grow", {
      scale: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: ".feature-video-container",
        start: "top bottom",
        scrub: 5.5,
        refreshPriority: 1,
      },
      ease: "power1",
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <section className="h-full common-padding text-white z-50 bg-zinc relative overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="feature_title" className="section-heading" ref={scrollRef}>
            Expolre the full story.
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="my-0 mb-10 lg:my-24 pl-12">
            <h2 className="text-5xl lg:text-7xl font-semibold">iPhone.</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">
              Forged in titanium.
            </h2>
          </div>

          <div className="flex-center gap-5 flex-col sm:px-10">
            <div className="relative h-[50vh] w-full flex items-center">
              <video
                playsInline
                id="exploreVideo"
                className="w-full h-full object-cover object-center"
                preload="none"
                autoPlay
                muted
                ref={videoRef}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>

            <div className="flex flex-col w-full relative">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore1Img}
                    alt="titanium"
                    className="feature-video g_grow"
                  />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore2Img}
                    alt="titanium2"
                    className="feature-video g_grow"
                  />
                </div>
              </div>

              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text" ref={scrollRef1}>
                    iphone15 Pro is {""}
                    <span className="text-white">
                      the phone to feature an aerospace-grade titanium design,
                    </span>
                    using the same alloy that spacecrafts use for missions to
                    Mars.
                  </p>
                </div>

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text" ref={scrollRef1}>
                    Titanium has one of the best strenght-to-weight ratios of
                    any metal, these our {""}
                    <span className="text-white">
                      lightest Pro models ever.
                    </span>
                    You'll notice the difference the moment you pick one up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
