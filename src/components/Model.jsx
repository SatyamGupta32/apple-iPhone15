import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ModelView from "./ModelView";
import { yellowImg } from "../utils";
import * as THREE from "three";
import { View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { models, sizes } from "../constants";
import { animateWithGsapTimeline } from "../utils/animation";

const Model = () => {
  const scrollRef = useRef(); // Ref for the heading element

  const [size, setSize] = useState("small");
  const [Model, setModel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    img: yellowImg,
  });

  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  const [smallRotation, setSmallRotaion] = useState(0);
  const [largeRotation, setLargeRotaion] = useState(0);

  const tl = gsap.timeline();

  useEffect(() => {
    const updateTransform = () => {
      let transformValue;
  
      if (window.innerWidth >= 1024) {
        // Larger screens (e.g., laptop)
        transformValue = 'translateX(-176%)';
      } else if (window.innerWidth >= 640) {
        // Smaller screens (e.g., tablets)
        transformValue = 'translateX(-176.5%)';
      } else {
        // Smaller screens (e.g., tablets)
        transformValue = 'translateX(-116%)';
      }
  
      if (size === 'large') {
        animateWithGsapTimeline(tl, small, smallRotation, '#view1', '#view2', {
          transform: transformValue,
          duration: 2,
        });
      } else {
        animateWithGsapTimeline(tl, large, largeRotation, '#view2', '#view1', {
          transform: 'translateX(0)',
          duration: 2,
        });
      }
    };
  
    updateTransform(); // Call on load
  
    window.addEventListener("resize", updateTransform); // Call on window resize
  
    return () => {
      window.removeEventListener("resize", updateTransform); // Clean up listener
    };
  }, [size]);
  

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for the title
    gsap.fromTo(
      "#title",
      { y: 100, opacity: 0 }, // Initial state: off-screen and invisible
      {
        y: 0,
        opacity: 1,
        duration: 2, // Shorter duration for faster animation
        scrollTrigger: {
          trigger: scrollRef.current, // Trigger the animation when this element comes into view
          start: "top 75%", // Trigger slightly earlier
          end: "top 85%", // End point for the trigger
          scrub: 2, // Remove scrubbing for a faster independent animation
        },
        ease: "power2.inOut", // A faster ease-out effect
      }
    );
  }, []);

  return (
    <section className="relative z-10 overflow-x-hidden ">
      <div className="w-full sm:w-[66.5%] m-auto tracking-[-1.5px] sm:pt-[200px] py-20 sm:px-0 px-5 h-full">
        <h1
          id="title"
          className="section-heading -tracking-[1.2px]"
          ref={scrollRef}
        >
          Take a closer look.
        </h1>

        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[65vh] md:h-[70vh] mb-10 overflow-hidden">
            <ModelView
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotaion}
              item={Model}
              size={size}
            />

            <ModelView
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotaion}
              item={Model}
              size={size}
            />

            <Canvas
              className="w-full h-full"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                overflow: "hidden",
              }}
              eventSource={document.getElementById("root")}
            >
              <View.Port />
            </Canvas>
          </div>

          <div className="mx-auto w-full">
            <p
              className="text-sm font-light text-center mb-5"
              style={{
                wordSpacing: "1px",
                letterSpacing: "0.2px",
              }}
            >
              {Model.title}
            </p>

            <div className="flex-center">
              <ul className="color-container">
                {models.map((item, i) => (
                  <li
                    key={i}
                    className="w-6 h-6 rounded-full mx-2
                    cursor-pointer"
                    style={{
                      backgroundColor: item.color[0],
                    }}
                    onClick={() => setModel(item)}
                  />
                ))}
              </ul>

              <button className="size-btn-container">
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className="size-btn"
                    style={{
                      transition: "background-color 0.4s ease-in",
                      backgroundColor: size === value ? "#fff" : "transparent",
                      color: size === value ? "black" : "white",
                    }}
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
