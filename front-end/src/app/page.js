"use client";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import ContactHeader from "./components/ContactHeader";
import ContactForm from "./components/ContactForm";
import Testimonials from "./components/Testimonials";
import EmblaCarousel from "./components/EmblaCarousel";
import Link from "next/link";
import { gsap } from "gsap";
import EmblaCarouselHeroSection from "./components/EmblaCarousalHeroSection";

export default function Home() {
  const curtainRef = useRef(null);
  const leftCurtainRef = useRef(null);
  const rightCurtainRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => setIsLoaded(true);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    const tl = gsap.timeline();

    tl.to(curtainRef.current, {
      delay: 0.6,
      rotation: 20,
      x: "-10%",
      width: "150%",
      scaleY: 5,
      duration: 0.3,
      ease: "power2.inOut",
    });

    tl.to(
      leftCurtainRef.current,
      { x: "-150%", scale: 1, duration: 2.3, ease: "power2.out" },
      "+=0.3"
    );

    tl.to(
      rightCurtainRef.current,
      { x: "150%", duration: 2.3, scale: 1, ease: "power2.out" },
      "<"
    );

    tl.to(
      curtainRef.current,
      {
        opacity: 0,
        duration: 0,
        onComplete: () => {
          if (curtainRef.current) curtainRef.current.style.display = "none";
        },
      },
      "-=2"
    );

    return () => tl.kill();
  }, [isLoaded]);

  const tools = [
    { path: "/assets/figma-1.svg" },
    { path: "/assets/adobe-illustrator.svg" },
    { path: "/assets/adobe-photoshop.svg" },
    { path: "/assets/adobe-2.svg" },
    { path: "/assets/adobe-1.svg" },
    { path: "/assets/adobe-substance-3d.svg" },
    { path: "/assets/claptrap.svg" },
    { path: "/assets/blender-1.svg" },
    { path: "/assets/threejs.svg" },
    { path: "/assets/nodejs.svg" },
    { path: "/assets/google-cloud.svg" },
    { path: "/assets/python.svg" },
    { path: "/assets/godot.svg" },
    { path: "/assets/unity-1.svg" },
    { path: "/assets/unreal-1.svg" },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const images = [
    {
      img1: "/assets/game-development.jpg",
      title: "Game development ",
      description:
        "Feative Studios specializes in developing innovative and immersive video games across all platforms. Our expert team manages all stages of development, from concept to launch, delivering high-quality, engaging experiences. We're ready to bring your vision to life, regardless of genre or style. Let's work together to create something extraordinary!",
    },
    {
      img2: "/assets/metaverse-development.jpg",
      title: "Metaverse",
      description:
        "At Feative Studios, we create immersive metaverse experiences that redefine digital interaction, from virtual worlds to digital economies and social hubs.Building virtual shopfronts, hosting events, and creating seamless user experiences are all made possible by our expertise in 3D asset development, AR/VR integration, and blockchain-powered commerce.",
    },
    {
      img3: "/assets/ar-vr-development.jpg",
      title: "AR/VR/MR",
      description:
        "Our team of experts specializes in creating immersive AR (Augmented Reality), VR (Virtual Reality), and MR (Mixed Reality) experiences, seamlessly blending the digital and real worlds. From hyper-realistic environments to interactive virtual spaces, we push the boundaries of engagement, redefining how users experience and interact with digital realities.",
    },
    {
      img4: "/assets/3d-art.jpg",
      title: "3D Modeling ",
      description:
        "At Feative Studios, our team of highly skilled 3D modelers sculpt, texture, and optimize stunning 3D models that bring virtual worlds to life. From detailed character designs to realistic environments and props, our expertise guarantees high-quality assets designed for games, simulations, and interactive experiences.",
    },
    {
      img5: "/assets/design services.jpg",
      title: "Art and Design",
      description:
        "At Feative Studios, our talented team of designers and artists turns ideas into visually stunning art, creating immersive game environments, captivating character designs, and seamless UI/UX experiences. Through a perfect blend of creativity and precision,we mould the images that characterise captivating virtual environments.",
    },
    {
      img6: "/assets/Digital-twin.jpg",
      title: "Digital Twin",
      description:
        "Our team of experts in digital twin technology creates highly accurate and interactive replicas of real-world environments. Whether for architecture, manufacturing, or smart cities, we integrate data and simulations to deliver intelligent solutions for analysis, optimization, and innovation.",
    },
  ];
  const projects = [
    {
      pro6: "/assets/diggingGame.png",
      title: "Treasure Core: Dig and Discover",
      description:
        "The project aims to leverage Unreal Engine's Pixel Streaming to create an immersive and interactive architectural visualization experience. This technology allows users to view and interact with high-fidelity 3D environments without needing powerful hardware.",
      genre: "Arch Viz",
      platform: " Window, Android, Linux, iOS, Mac",
      engine: "Unreal Engine",
      appStoreLink:
        "https://apps.apple.com/us/app/treasure-core-dig-discover/id6746793171",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.feativestudios.treasure.core.dig.discover",
    },
    {
      pro1: "/assets/plane-adventure.jpg",
      title: "Plane Adventure",
      description:
        "Plane Adventure is an endless flying game where players control a plane, collecting rings, fuel, and diamonds to unlock new planes and climb the leaderboard. The game supports AR mode for an immersive experience and is available on both Android and iOS. Players must collect fuel to stay airborne and avoid obstacles.",
      genre: "Endless Hyper Casual",
      platform: "Android,iOS",
      engine: "Unity",
      appStoreLink:
        "https://apps.apple.com/us/app/plane-adventure-fly-challenge/id6745814644",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.feativestudios.plane.adventure.fly.challenge",
    },
    {
      pro2: "/assets/metaverse.png",
      title: "Metaverse",
      description:
        "The project aims to leverage Unreal Engine's Pixel Streaming to create an immersive and interactive architectural visualization experience. This technology allows users to view and interact with high-fidelity 3D environments without needing powerful hardware.",
      genre: "Arch Viz",
      platform: " Window, Android, Linux, iOS, Mac",
      engine: "Unreal Engine",
    },
    {
      pro3: "/assets/shed-happens.jpg",
      title: "Shed happens ",
      description:
        "Shed Happens in an mobile app that uses photogrammetry to convert images or video of an object and convert it to the 3D model. This Model is scaled accurately with accordance to the real world object reference and its measurements are calculated with the help of AI. These models can then further used in various applications.",
      genre: "AR/Photogrammetry/Mobile App",
      platform: "iOS, Android",
      engine: "React, Unity",
    },
    {
      pro4: "/assets/pixel-streaming.jpg",
      title: "Pixel Streaming",

      description:
        "Create a comprehensive and immersive VR experience that simulates the complete workflow of a laboratory. This VR project aims to provide users with a realistic and interactive environment where they can learn and practice various aspects of water treatment processes, including strict hygienic measures.",
      genre: "VR",
      platform: "VR",
      engine: "Unreal Engine",
    },
    {
      pro5: "/assets/office-vr-simulation.jpg",
      title: "Office VR Simulation",
      description:
        "Virtual Office Explorer is an innovative project that leverages photogrammetry technology to create a highly detailed 3D model of a real-world office space. The project aims to provide a realistic and interactive representation of the office, suitable for remote onboarding, virtual tours, and architectural visualization.",
      genre: "VR",
      platform: "VR",
      engine: "Unreal Engine",
    },

    // {
    //   pro6: "/assets/pfizer.jpg",
    //   title: "Pfizer",
    //   description:
    //     "The Ultimate Intensivist 360, which you built in Unity 3D specifically for VR, falls under the educational and simulation genre. It focuses on providing an immersive training experience for medical professionals, particularly in critical care settings, using 360-degree video technology.",
    //   genre: "VR",
    //   platform: "VR",
    //   engine: "Unreal Engine",
    // },
  ];

  const HEROOPTIONS = { dragFree: false, loop: true };
  const HEROSLIDE_COUNT = 5;
  const HEROSLIDES = Array.from(Array(HEROSLIDE_COUNT).keys());

  const OPTIONS = { align: "start", dragFree: true, loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };

    window.addEventListener("DOMContentLoaded", handleLoad);
  }, []);

  return (
    <>
      {/* {isLoaded ? (
    <div
      ref={curtainRef}
      className="fixed flex flex-col inset-0 z-[9999999] scale-x-150 overflow-hidden"
    >
      <div
        ref={leftCurtainRef}
        className="absolute left-0 top-0 w-[190%] h-[200%] border-r-[0.5px] border-white border-opacity-50 -translate-x-[74%] bg-black z-[10000000]"
      ></div>

      <div
        ref={rightCurtainRef}
        className="absolute right-0 top-0 w-[194.2%] h-[200%] border-l-[0.5px] border-white border-opacity-50 bg-black translate-x-[74%] z-[10000000]"
      ></div>
    </div>
  ) : null
} */}

      <div className="min-h-screen  w-full z-10 !overflow-hidden text-white">
        <section
          className="HERO-SECTION h-dvh w-full !overflow-hidden relative z-[3] "
          id="home"
        >
          <div className="absolute top-0 !overflow-hidden">
            <EmblaCarouselHeroSection
              slides={HEROSLIDES}
              options={HEROOPTIONS}
            />
          </div>
          <div className="flex flex-col gap-3 right-10 justify-center items-center h-full absolute max-lg:hidden">
            <div className="font-[650] text-bitterSweet  text-[30px]">
              {<CountUp start={0} end={95} duration={6} className="" />}+
            </div>
            <div className="text-white font-semibold text-xs">
              Clients Feedback
            </div>
            <div className="font-[650] text-bitterSweet text-[30px]">
              {<CountUp start={0} end={20} duration={6} className="" />}+
            </div>
            <div className="text-white font-semibold text-xs">
              Dedicated Team
            </div>

            <div className="font-[650] text-bitterSweet text-[30px]">
              {<CountUp start={0} end={30} duration={6} className="" />}+
            </div>
            <div className="text-white font-semibold text-xs">
              Launched Projects
            </div>
          </div>
          <div className=" absolute bottom-[3rem] px-5 md:px-20 flex flex-col gap-20 justify-between  w-full">
            <div className=" gap-5 font-arca max-md:relative max-md:bottom-20  ">
              <h1 className="uppercase font-semibold sm:text-[36px] text-[28px] sm:leading-[36px] leading-[28px] md:leading-[57.6px] tracking-[7.5%] md:text-[40px] lg:text-[64px] w-full lg:w-[80%]">
                Innovators Shaping the Future of Immersive Experiences
              </h1>
              <div className="flex flex-col  md:flex-row justify-between gap-10">
                <div className="md:w-[70%] w-full mt-5">
                  {" "}
                  <p className="text-sm tracking-[1.5px] leading-[25.6px] text-white text-opacity-60   font-medium ">
                    <span className="font-black text-white text-opacity-60 uppercase">
                      Feative studios
                    </span>{" "}
                    create immersive experiences for the metaverse, AR, VR, and
                    beyond. From game development to stunning game art, we push
                    the boundaries of the digital world.
                  </p>
                </div>

                <Link
                  href={"#contact"}
                  className="hover:text-white text-bitterSweet  min-w-[260px] w-[260px] cursor-pointer hover:bg-bitterSweet  transition-transform duration-300 px-5 text-[18px] font-medium leading-[28.8px] tracking-wider self-start md:mt-0 mt-3 md:self-end bottom-8 relative text-center flex items-center justify-center rounded-full uppercase h-[60px] border-bitterSweet border-4"
                  style={{ boxShadow: "0px 0px 20px 0px rgba(236, 37, 85, 1)" }}
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="sm:container mx-auto w-full px-5  ">
          <section
            className="SECTION-SERVICES z-10 w-full flex flex-col gap-20 items-center justify-center pt-32 lg:py-28 lg:pb-0 min-h-[100vh]"
            id="services"
          >
            <div className="flex flex-col gap-5 text-center">
              <h2 className="font-bold uppercase text-[36px] leading-[68px] tracking-[6px] text-center">
                Services
              </h2>
              <p className="w-full lg:w-[55%] font-normal self-center text-base leading-[25.6px] tracking-[1.5%] text-center">
                We specialize in game development, metaverse experiences,
                AR/VR/MR, 3D modeling, art, and digital twins by blending
                technology with creativity. Our goal is to transform bold ideas
                into interactive experiences that captivate and inspire.
              </p>
            </div>
            <div className="flex h-full w-full items-center justify-center mt-10 lg:mt-20">
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
                {images.map((item, ind) => (
                  <div
                    key={ind}
                    className={`relative overflow-hidden group rounded-[15px] border-bitterSweet hover:shadow-custom w-full md:w-[402px] h-[430px] ${
                      ind % 3 === 1 ? "relative xl:-top-16" : ""
                    }`}
                  >
                    <div className="absolute w-full md:w-[402px] border border-bitterSweet h-full left-0 group-hover:bg-black/30 group-hover:backdrop-blur-md transition-all ease-out duration-700 rounded-[15px] text-start flex flex-col items-end justify-end z-10 will-change-transform p-5">
                      <p className="-bottom-full p-6 absolute transition-all ease-out duration-700 transform-gpu group-hover:bottom-0 left-0">
                        {item.description}
                      </p>
                    </div>
                    <img
                      src={Object.values(item)[0].toString()}
                      alt=""
                      style={{ filter: "hue-rotate(370deg)" }}
                      className="rounded-[15px] cursor-pointer transition-all duration-300 border border-bitterSweet w-[402px] h-[430px]"
                    />
                    <div className="absolute top-10 font-bold text-[20px] leading-[25px] tracking-[6px] px-16 uppercase flex flex-row items-center justify-center text-center w-full">
                      <div className="absolute sm:max-w-xl sm:mx-auto px-10">
                        <br />
                        <br />
                        <div className="max-w-sm text-[20px] font-bold leading-[25px] tracking-[6px]">
                          <span className="group-hover:underline uppercase group-hover:underline-offset-4 z-10 relative group-hover:text-bitterSweet text-white">
                            {Object.values(item)[1].toString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="SECTION-SKILLS bg-skills-image py-20   relative h-dvh">
              <div className="flex flex-row items-end h-full relative z-20 justify-center">
                <div className="flex flex-col gap-3">
                  <div
                    className="flex flex-col gap-4 mt-20 flex-wrap items-center justify-center"
                    ref={ref}
                  >
                    <div className="flex flex-col lg:flex-row gap-14 lg:gap-4 w-full items-center justify-center">
                      <div className="w-[292px] flex flex-col gap-4 items-center justify-center">
                        <div className="w-[292px] bg-bitterSweet bg-opacity-90 rounded-[15px] h-[136px] flex flex-col  items-center justify-center">
                          <div className="font-[650]  text-[50px]">
                            {inView && (
                              <CountUp start={0} end={95} duration={6} />
                            )}
                            +
                          </div>
                          <div className="text-darkLiver">Clients Feedback</div>
                        </div>
                      </div>
                      <div className="w-[292px] flex flex-col gap-4 items-center justify-center  ">
                        <div className="w-[292px] bg-bitterSweet bg-opacity-90 rounded-[15px] h-[136px] flex flex-col  items-center justify-center">
                          <div className="font-[650]  text-[50px]">
                            {inView && (
                              <CountUp start={0} end={20} duration={6} />
                            )}
                            +
                          </div>
                          <div className="text-darkLiver">Dedicated Team</div>
                        </div>
                      </div>
                      <div className="w-[292px] flex flex-col gap-4 items-center justify-center">
                        <div className="w-[292px] bg-bitterSweet bg-opacity-90 rounded-[15px] h-[136px] flex flex-col  items-center justify-center">
                          <div className="font-[650]  text-[50px]">
                            {inView && (
                              <CountUp start={0} end={30} duration={6} />
                            )}
                            +
                          </div>
                          <div className="text-darkLiver">
                            Launched Projects
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="SECTION-PROJECTS h-max w-full flex flex-col gap-20 items-center justify-center py-28 "
            id="projects"
          >
            <div className="flex flex-col gap-5 text-center">
              <h2 className="font-bold uppercase text-[36px] leading-[68px] tracking-[6px] text-center">
                Our Projects
              </h2>
              {/* <div className="w-[322px] tracking-[1.5px] font-black cursor-pointer hover:text-white hover:bg-bitterSweet h-[46px] border-bitterSweet flex items-center justify-center uppercase border text-bitterSweet">
              See All Projects
            </div> */}
            </div>
            <div className="flex h-full w-full items-center justify-center rounded-[15px]">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 rounded-[15px]">
                {projects.map((item, ind) => (
                  <div
                    key={ind}
                    className={`relative overflow-hidden backdrop-blur-lg group rounded-[15px]  ${
                      ind % 3 === 1 ? "relative lg:top-16" : ""
                    }`}
                  >
                    <div className="absolute w-full h-full flex flex-col gap-5 left-0 -top-full bg-black/30 backdrop-blur-md transform-gpu group-hover:top-0 transition-all ease-out duration-700 rounded-[15px] z-20 will-change-transform p-5">
                      <p>{item.description}</p>
                      <div className="px-5">
                        <ul className="flex flex-col font-semibold gap-1 text-xs sm:text-sm list-disc">
                          <li>Genre: {item.genre}</li>
                          <li>Platform: {item.platform}</li>
                          <li>Engine: {item.engine}</li>
                        </ul>
                      </div>
                      {ind < 2 ? (
                        <>
                          <div className="flex flex-wrap flex-row gap-2 items-center">
                            {item?.playStoreLink ? (
                              <>
                                {" "}
                                <a href={item.playStoreLink} target="_blank">
                                  {" "}
                                  <img
                                    src="/assets/playStore.svg"
                                    alt="digging"
                                  />
                                </a>{" "}
                              </>
                            ) : null}
                            {item?.appStoreLink ? (
                              <>
                                {" "}
                                <a href={item.appStoreLink} target="_blank">
                                  <img
                                    src="/assets/appStore.svg"
                                    alt="digging"
                                  />
                                </a>{" "}
                              </>
                            ) : null}
                          </div>
                        </>
                      ) : null}
                    </div>

                    <div
                      className="absolute h-full w-full rounded-[15px] z-10"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(2, 0, 0, 0) 65%, #020000 89%)",
                      }}
                    ></div>

                    <img
                      src={Object.values(item)[0].toString()}
                      alt=""
                      className={`w-full h-full object-cover ${
                        ind === 2 ? "object-right" : ""
                      } rounded-[15px] z-0`}
                    />
                    {/* {ind === 0 && (
                      <div className="w-full px-4 z-10 text-[32px] font-semibold h-full absolute flex items-center justify-center mx-auto top-0">
                        Coming Soon
                      </div>
                    )} */}

                    <div className="absolute bottom-20 w-full px-4 z-30 backdrop-blur-lg">
                      <div className="mx-auto text-center max-w-sm">
                        <div className="inline-block group-hover:text-bitterSweet transition-colors duration-500 ease-in-out font-bold text-[21px] leading-[27px] tracking-[6px] text-white">
                          <span className=" group-hover:underline uppercase group-hover:underline-offset-4 ">
                            {Object.values(item)[1].toString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section
            className="KEY-TOOLS relative max-sm:px-10 px-10 py-32  h-max pb-0
       w-full "
            id="expertise"
          >
            <div className="absolute z-10 w-full items-center justify-center flex right-[10rem] h-full top-20">
              <div
                className=" w-[500px] bg-bitterSweet bg-opacity-80 rounded-full "
                style={{
                  "--tw-shadow": "100px 10px 299px 30px rgba(236, 37, 85, 1)",
                  "--tw-shadow-colored":
                    "0px 0px 30px 0px var(--tw-shadow-color)",
                  boxShadow:
                    "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
                }}
              ></div>
            </div>
            <div className="flex z-10 relative flex-row items-center justify-center w-full">
              <div className="flex flex-col gap-20 items-center justify-center w-full">
                <div className="text-[40px] leading-[48px] font-[650]">
                  <p>
                    The Key Tools{" "}
                    <span className="text-bitterSweet">We Are Expert In</span>{" "}
                  </p>
                </div>
                <div className="grid grid-cols-3 lg:grid-cols-5 gap-12 md:gap-14 lg:gap-20 items-center   justify-center">
                  {tools
                    .slice()
                    .reverse()
                    .map((item, ind) => (
                      <div
                        key={ind}
                        className="flex flex-row items-center justify-center"
                      >
                        <img
                          src={item.path}
                          alt=""
                          className="relative  z-20"
                        />
                      </div>
                    ))}
                </div>
                <div></div>
              </div>
            </div>
          </section>
          <div className="h-[300px] mt-20">
            <div className=" flex flex-col  mb-10 font-[650]">
              <p className="text-bitterSweet md:text-[20px] text-[18px] lg:text-[24px] px-5 py-2 border border-white w-max rounded-full  leading-[32px] uppercase tracking-wider">
                Testimonials
              </p>
              <div className="text-white md:text-[36px] text-[28px] lg:text-[48px] tracking-widest">
                Hear From Our Clients
              </div>
            </div>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </div>

          <section
            className="SECTION-CONTACT mt-20 py-32 pb-10 overflow-clip flex flex-col gap-20"
            id="contact"
          >
            {/* <div className="relative lg:left-[10%] ">
              <ContactHeader />
            </div> */}
            <div className="lg:px-20 ">
              <ContactForm />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
