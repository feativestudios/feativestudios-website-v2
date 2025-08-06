"use client";
import { useState } from "react";
import Testimonials from "../components/Testimonials";
import EmblaCarousel from "../components/EmblaCarousel";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Link from "next/link";

const About = () => {
  const [showDetail, setShowDetail] = useState(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const specifics = [
    {
      name: "Strategy",
      detail:
        "We reflect the needs and specifics of every client - matching experience with expectation.",
    },
    {
      name: "DEVELOPMENT",
      detail:
        "Our most senior developers have more than 8 years of Unity experience and VR | AR development.",
    },
    {
      name: "DESIGN",
      detail:
        "A unique understanding of UX specifics in VR | AR. We create a design that meets practicality.",
    },
    {
      name: "SUPPORT",
      detail:
        "We never leave you hanging. Exploring a new reality is a long-term and ongoing commitment.",
    },
  ];
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

  const OPTIONS = { align: "start", dragFree: true, loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className=" font-arca">
      <section className="ABOUT-HEROSECTION w-full h-dvh relative ">
        <div className="aboslute w-full h-full">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-black/20 to-black"></div>
          <img
            src="/assets/redlight.jpg"
            alt=""
            className="w-full h-full relative top-[60px] lg:object-cover object-contain"
          />
          <div className="absolute top-0 flex flex-row items-center  justify-center w-full h-full">
            <div className="mx-auto flex items-center justify-center self-center md:mt-80  absolute lg:w-[50%] md:w-[50%] w-full  tracking-[10px]   lg:text-[48px] md:text-[40px] text-[32px] xl:leading-[64px] lg:leading-[50px] md:leading-[42px]  xl:text-[62px] font-black">
              <div className="ml-28 flex flex-col ">
                <div>Hi. we're </div> 
                <div>FEATIVE STUDIOS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="SECTION-WHO-WE-ARE mt-[60px] lg:max-w-4xl lg:mx-auto px-10">
        <div className="flex flex-col items-start justify-start   text-start  xl:flex-row gap-10 lg:mx-auto lg:max-w-5xl w-full ">
          <div className="flex flex-col items-start gap-2 ">
            <div className="lg:text-[20px] bg-bitterSweet tracking-normal md:text-[24px] uppercase md:leading-[30px] lg:leading-[37px] sm:text-2xl text-xl font-black leading-[44px] px-2 mb-5">
              CREATED BY PLAYERS, BUILT FOR LEGENDS
            </div>
            <div className="md:text-[48px] text-bitterSweet text-justify uppercase sm:text-[36px] leading-[120px] tracking-[10px] text-[28px] w-full  text- lg:text-[145px]">
              Our Team
            </div>
            <div className="md:text-sm  text-justify lg:text-[18px] text-opacity-90 tracking-normal font-medium text-xs !leading-[24px] mt-2 font-jost">
              We're a small, dedicated team of developers with a shared passion
              for great games. Our experience comes not just from playing and
              studying standout titles like League of Legends, Fortnite, Mobile
              Legends, and Far Cry, but also from working at some of the top
              studios in the industry—where we contributed to major projects and
              learned what it takes to build games players truly love.
              <br></br>
              <br></br>
              Now, we're bringing that knowledge and inspiration into our own
              studio. While we haven’t launched a game yet, we're deep in
              development on our first title—focused on delivering tight
              mechanics, rewarding progression, and gameplay that respects
              players’ time and creativity.
              <br></br>
              <br></br>
              We believe great games are built with the community in mind from
              day one. That’s why we’re committed to staying connected with our
              players throughout development, listening closely, and evolving
              our vision together
            </div>
            <Link href="/job-apply" className="w-full">
              <div className=" w-full self-start mt-5  tracking-[1.5px] font-black cursor-pointer hover:text-white hover:bg-bitterSweet h-[46px] border-bitterSweet flex items-center justify-center uppercase border text-bitterSweet">
                Join Us
              </div>
            </Link>
          </div>
          {/* <div className="flex flex-col gap-5 lg:w-1/2">
            <div className="lg:text-[37px] md:text-[30px] md:leading-[30px] lg:leading-[37px] sm:text-2xl text-xl leading-[45px] font-black tracking-[5px]">
              WHAT WE STAND FOR
            </div>
            <div className="font-arca md:text-[18px] text-base lg:text-[20px] leading-[30px] text-bitterSweet tracking-[5px]">
              COMMITMENT TO EVOLUTION
            </div>
            <div className="font-jost text-xs md:text-[14px] leading-[22px] font-normal">
              Stagnation isn’t in our dictionary. We believe in relentless
              growth, constantly pushing our boundaries, and embracing change.
            </div>
            <div className="font-arca md:text-[18px] text-base lg:text-[20px] leading-[30px] text-bitterSweet tracking-[5px]">
              UNWAVERING PROFESSIONALISM
            </div>
            <div className="font-jost text-xs md:text-[14px] leading-[22px] font-normal">
              Excellence is our benchmark. We approach every task with
              dedication, expertise, and a commitment to doing our best.
            </div>
            <div className="font-arca md:text-[18px] text-base lg:text-[20px] leading-[30px] text-bitterSweet tracking-[5px]">
              ENERGETIC TRENDSETTERS
            </div>
            <div className="font-jost text-xs md:text-[14px] leading-[22px] font-normal">
              More than just following the tide, we set the pace. Our
              award-winning initiatives and innovations define what’s next.
            </div>
          </div> */}
        </div>
      </section>
      <section className="WHAT-WE-DO lg:container lg:mx-auto px-10  h-max lg:h-[80dvh] pt-32">
        <div className="flex flex-col gap-5 items-center justify-center mx-auto max-w-5xl ">
          <div className="md:text-[37px] sm:text-[32px]  md:text-start text-center text-[28px] font-black leading-[44px] tracking-[5px] uppercase">
            What we do
          </div>
          <div className="text-[16px] pb-10  md:text-start text-center  leading-[25px] font-normal font-jost">
            We reflect the needs & specifics of every client – matching
            experience with expectation.
          </div>
          <div className="flex flex-col w-full">
            <div className="flex flex-col w-full z-10">
              {specifics.map((item, ind) => (
                <div
                  className={`pt-3 pb-5 px-2 border-b-[2px] border-bitterSweet flex flex-col gap-6 w-full cursor-pointer
            ${ind === 0 ? "border-t-2" : ""} 
            ${ind === specifics.length - 1 ? "border-b-0" : ""}`}
                  key={ind}
                  onClick={() => setShowDetail(showDetail === ind ? null : ind)}
                >
                  <div className="w-full flex flex-row justify-between">
                    <div className="font-semibold text-bitterSweet lg:text-[30px] md:text-[28px] text-xl  tracking-[5px] uppercase">
                      {ind + 1}.{item.name}
                    </div>
                    {showDetail == ind ? (
                      <div className="text-5xl  transition-transform rotate-180 relative -top-1 duration-500 ease-in-out font-thin font-mono text-center content-center">
                        -
                      </div>
                    ) : (
                      <div className="text-4xl font-thin font-mono text-center transition-transform -rotate-0 duration-700 relative top-[0.5px] right-1 ease-in-out content-center">
                        +
                      </div>
                    )}
                  </div>

                  <div
                    className={`grid transition-all duration-500 ease-in-out
            ${
              showDetail === ind
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
                  >
                    <div className="overflow-hidden">
                      <div className="font-jost text-[16px] leading-[25px] py-2">
                        {item.detail}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="SECTION-SKILLS bg-skills-image py-20 pt-0   relative h-dvh">
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
                      {inView && <CountUp start={0} end={95} duration={6} />}+
                    </div>
                    <div className="text-darkLiver">Clients Feedback</div>
                  </div>
                </div>
                <div className="w-[292px] flex flex-col gap-4 items-center justify-center  ">
                  <div className="w-[292px] bg-bitterSweet bg-opacity-90 rounded-[15px] h-[136px] flex flex-col  items-center justify-center">
                    <div className="font-[650]  text-[50px]">
                      {inView && <CountUp start={0} end={20} duration={6} />}+
                    </div>
                    <div className="text-darkLiver">Dedicated Team</div>
                  </div>
                </div>
                <div className="w-[292px] flex flex-col gap-4 items-center justify-center">
                  <div className="w-[292px] bg-bitterSweet bg-opacity-90 rounded-[15px] h-[136px] flex flex-col  items-center justify-center">
                    <div className="font-[650]  text-[50px]">
                      {inView && <CountUp start={0} end={30} duration={6} />}+
                    </div>
                    <div className="text-darkLiver">Launched Projects</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-4"></div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="KEY-TOOLS relative max-sm:px-10 px-10 py-32 h-max pb-0
       w-full "
        id=""
      >
        <div className="absolute z-10 w-full items-center justify-center flex right-[10rem] h-full top-20">
          <div
            className=" w-[500px] bg-bitterSweet bg-opacity-80 rounded-full "
            style={{
              "--tw-shadow": "100px 10px 299px 30px rgba(236, 37, 85, 1)",
              "--tw-shadow-colored": "0px 0px 30px 0px var(--tw-shadow-color)",
              boxShadow:
                "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
            }}
          ></div>
        </div>
        <div className="flex  relative flex-row items-center justify-center w-full">
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
                    <img src={item.path} alt="" className="relative  " />
                  </div>
                ))}
            </div>
            <div></div>
          </div>
        </div>
      </section>
      <section className="JOB-OPENINGS mt-20 px-5 lg:max-w-[90rem] lg:mx-auto">
        <div className="flex flex-col mb-10 font-[650]">
          <p className="text-bitterSweet md:text-[20px] text-[18px] lg:text-[24px] px-5 py-2 border border-white w-max rounded-full leading-[32px] uppercase tracking-wider">
            Openings
          </p>
          <div className="text-white md:text-[36px] text-[28px] lg:text-[48px] tracking-widest">
            Job Opportunities
          </div>
        </div>
        
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {/* Technical Artist */}
          <div className="border border-white/20 bg-black/50 backdrop-blur-sm rounded-lg p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-white text-xl md:text-2xl font-bold font-arca tracking-wider uppercase">
                Technical Artist
              </h3>
              <p className="text-gray-400 text-sm md:text-base font-jost mt-1">
                Remote
              </p>
            </div>
            <Link href="/jobs/technical-artist">
              <button className="bg-bitterSweet hover:bg-bitterSweet/60 text-white px-6 py-2 rounded font-arca text-sm md:text-base tracking-wider uppercase transition-colors">
                View Job
              </button>
            </Link>
          </div>

          {/* Unreal Engine Gameplay Engineer */}
          <div className="border border-white/20 bg-black/50 backdrop-blur-sm rounded-lg p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-white text-xl md:text-2xl font-bold font-arca tracking-wider uppercase">
                Unreal Engine Gameplay Engineer
              </h3>
              <p className="text-gray-400 text-sm md:text-base font-jost mt-1">
                Remote
              </p>
            </div>
            <Link href="/jobs/unreal-engine-gameplay-engineer">
              <button className="bg-bitterSweet hover:bg-bitterSweet/60 text-white px-6 py-2 rounded font-arca text-sm md:text-base tracking-wider uppercase transition-colors">
                View Job
              </button>
            </Link>
          </div>

          {/* UX/UI Designer */}
          <div className="border border-white/20 bg-black/50 backdrop-blur-sm rounded-lg p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-white text-xl md:text-2xl font-bold font-arca tracking-wider uppercase">
                UX/UI Designer
              </h3>
              <p className="text-gray-400 text-sm md:text-base font-jost mt-1">
                Remote
              </p>
            </div>
            <Link href="/jobs/ux-ui-designer">
              <button className="bg-bitterSweet hover:bg-bitterSweet/60 text-white px-6 py-2 rounded font-arca text-sm md:text-base tracking-wider uppercase transition-colors">
                View Job
              </button>
            </Link>
          </div>

          {/* Audio Designer */}
          <div className="border border-white/20 bg-black/50 backdrop-blur-sm rounded-lg p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-white text-xl md:text-2xl font-bold font-arca tracking-wider uppercase">
                Audio Designer
              </h3>
              <p className="text-gray-400 text-sm md:text-base font-jost mt-1">
                Remote
              </p>
            </div>
            <Link href="/jobs/audio-designer">
              <button className="bg-bitterSweet hover:bg-bitterSweet/60 text-white px-6 py-2 rounded font-arca text-sm md:text-base tracking-wider uppercase transition-colors">
                View Job
              </button>
            </Link>
          </div>
        </div>
      </section>

      <div className="h-[500px] mt-20 px-5 lg:max-w-[90rem] lg:mx-auto">
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
    </div>
  );
};

export default About;
