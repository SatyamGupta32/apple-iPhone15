import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { watchImg, rightImg } from "../utils";
import { ScrollTrigger } from "gsap/all";
import VideoCarousel from "./VideoCarousel";

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  const scrollRef = useRef();
  const scrollRef1 = useRef();
  const scrollRef2 = useRef();

  useEffect(() => {
    // Animate the title first
    gsap.to("#title", {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 0.9,
      scrollTrigger: {
        trigger: scrollRef.current, // target element to trigger the scroll animation
        start: "top 80%", // when the top of the trigger hits 40% of the viewport
        end: "top 68%",
        scrub: 2,
      },
      ease: "power1.inOut",
    });

    // Animate the first link (watch the film)
    gsap.to(scrollRef1.current, {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 0.9,
      scrollTrigger: {
        trigger: scrollRef1.current, // target element to trigger the scroll animation
        start: "top 60%", // when the top of the trigger hits 40% of the viewport
        end: "top 58%",
        scrub: 2,
      },
      ease: "power1.inOut",
    });

    // Animate the second link (watch the event) with a different timing
    gsap.to(scrollRef2.current, {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 0.9,
      scrollTrigger: {
        trigger: scrollRef2.current, // second element's trigger
        start: "top 40%",
        end: "top 38%",
        scrub: 2,
      },
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-auto common-padding bg-zinc"
    >
      <div className="screen-max-width me-auto ms-auto relative">
        <div className="mb-12 w-full flex lg:flex-row flex-col lg:items-end justify-between">
          <h1 id="title" className="section-heading -tracking-wide" ref={scrollRef}>
            Get the Highlights.
          </h1>
          <div className="scrollContainer flex flex-wrap items-end gap-5">
            {/* First link with its own ref */}
            <p
              className="link flex items-center justify-center"
              ref={scrollRef1}
            >
              watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            {/* Second link with a separate ref */}
            <p
              className="link flex items-center justify-center"
              ref={scrollRef2}
            >
              watch the event
              <img src={rightImg} alt="watch" className="ml-2" />
            </p>
          </div>
        </div>

        <VideoCarousel/>
      </div>
    </section>
  );
};

export default Highlights;
