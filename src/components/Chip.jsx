import React from "react";
import { chipImg, frameImg, frameVideo } from "../utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(ScrollTrigger);

const Chip = () => {
  const scrollRef = useRef();
  const videoRef = React.useRef();

  useEffect(() => {
  // Animate the text in Para
  gsap.to(".g_fadeIn", {
    y: 0,
    opacity: 1,
    stagger: 0.2,
    duration: 1.4,
    delay: 0.5,
    scrollTrigger: {
      trigger: scrollRef.current,
      start: "top 90%",
      end:'top 85%',
      scrub: 2,  // Optional: scrub for smoother transition
    },
    ease: "power2.inOut",
    onEnter: () => {
      gsap.to(".g_fadeIn", {
        y: 0,
        opacity: 1,
      });
    },
    onLeaveBack: () => {
      gsap.to(".g_fadeIn", {
        y: 80, // Reset to initial position
        opacity: 0, // Hide again
      });
    },
  });

    ScrollTrigger.refresh();

  // Animate the chip element
  gsap.from("#chip", {
    scale: 2,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: "#chip",
      start: "20% bottom",
      onEnter: () => {
        gsap.to("#chip", {
          scale: 1,
          opacity: 1,
        });
      },
      onLeaveBack: () => {
        gsap.to("#chip", {
          scale: 2, // Reset to initial scale
          opacity: 0, // Reset to hidden state
        });
      },
    },
    ease: "power1.inOut",
  });


    ScrollTrigger.refresh();
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A17 Pro chip.
            <br /> A monster win for gaming.
          </h2>

          <p className="hiw-subtitle">
            It's here. The biggest redesign in th history of Apple GPUs.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <video
                className="pointer-events-none"
                playsInline
                autoPlay
                muted
                preload="none"
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>

          <p className=" text-gray font-semibold text-xl md:text-2xl py-6 text-center">
            Honkai: Star Rail
          </p>
        </div>
        <div className="hiw-text-container">
          <div className="flex flex-1 justify-center gap-5 flex-col">
            <p className="hiw-text g_fadeIn  translate-y-20" ref={scrollRef}>
              A17 Pro is an entirely new class of iPhone chip that delivers our{" "}
              {""}
              <span className="text-white">
                best graphics performance by far.
              </span>
            </p>

            <p className="hiw-text g_fadeIn  translate-y-20" ref={scrollRef}>
              Mobile{""}
              <span className="text-white">
                {" "}
                games will look and feel so immersive.{" "}
              </span>
              with incredibely detailed environments and more realistic
              charactrs. And with industry-leading speed and efficiency A17 Pro
              takes fast and runs with it.
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col g_fadeIn  translate-y-20" ref={scrollRef}>
            <p className="hiw-text">New</p>
            <p className="hiw-bigtext">Pro-class GPU</p>
            <p className="hiw-text">with 6 cores</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chip;
