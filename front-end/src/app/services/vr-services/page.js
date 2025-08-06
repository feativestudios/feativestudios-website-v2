
"use client";
import Button from "@/app/components/Button";
import ContactForm from "@/app/components/ContactForm";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export const metadata = {
  robots: "noindex, nofollow",
};
const VrServices = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const projects = [
    {
      pro1: "/assets/01_PO_Shot1_V2-2-3.jpg",
      title: "VR Product Presentation • ARO",
    },
    {
      pro2: "/assets/1-Artmaster_web-2.jpeg",
      title: "MR Piano App • ArtMaster",
    },
    { pro3: "/assets/1-2.jpg", title: "VR Experience • Korek Telecom" },
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

  return (
    <div className="font-arca ">
      <section className="xl:h-max h-max">
        <div className="lg:pt-[85px] pt-[120px] h-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 xl:gap-1">
          <div className="lg:w-1/2 w-full lg:text-start text-center flex items-center justify-center px-10">
            <div className="flex flex-col gap-20 ">
              <div className="md:text-[50px] sm:text-[40px] text-[32px] font-extrabold leading-[50px]">
                VIRTUAL REALITY DEVELOPMENT FOR BUSINESS
              </div>
              <div className="font-jost text-[16px] text-opacity-80 text-white">
                Virtual reality (VR) technology allows the users to find
                themself in a simulated environment, ideally accompanied by
                their interaction with it. In short, VR technologies create the
                illusion of the real world. With the boundless potential virtual
                reality offers, it’s gradually becoming a new favorite tool for
                many industries and businesses that want to improve efficiency
                and increase revenue. Our VR software development company aims
                to meet our client’s needs by implementing custom VR solutions,
                from choosing suitable headsets and creating UX with design
                motion to 3D modeling and interactions.
              </div>
              <div className="self-center lg:self-start">
                <a href="#contact">
                  <Button className={"h-[50px] px-5"}>
                    Contact Us{" "}
                    <span className="text-[20px] font-semibold ml-1">
                      &#8681;
                    </span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2   flex items-end justify-end">
            <img src="/assets/VR.png" alt="" />
          </div>
        </div>
      </section>
      <section className="SECTION-PERCENTAGES py-20 pt-28 font-jost">
        <div className="flex flex-row items-center justify-center">
          <div className="flex flex-col gap-3">
            <div
              className="flex flex-col gap-4 mt-20 flex-wrap items-center justify-center"
              ref={ref}
            >
              <div className="flex flex-col xl:flex-row gap-20 xl:gap-4">
                <div className="w-[310px] bg-transparent bg-opacity-90 rounded-[15px] h-[136px] flex flex-col  items-center justify-center">
                  <div className="font-normal  text-[75px]">
                    {inView && <CountUp start={0} end={25} duration={2} />}%
                  </div>
                  <div className="text-darkLiver text-center px-5 text-[20px] font-semibold">
                    MORE CUSTOMER OPTIMISM FOR NEW TECH
                  </div>
                </div>
                <div className="w-[310px] bg-transparent bg-opacity-90 rounded-[15px] h-[136px] flex flex-col  items-center justify-center">
                  <div className="font-normal  text-[75px]">
                    {inView && <CountUp start={0} end={13} duration={2} />}%
                  </div>
                  <div className="text-darkLiver text-center px-5 text-[20px] font-semibold">
                    INCREASED CONVERSION IN E-COMMERCE
                  </div>
                </div>

                <div className="w-[310px] bg-transparent bg-opacity-90 rounded-[15px] h-[136px] flex flex-col  items-center justify-center">
                  <div className="font-normal  text-[75px]">
                    {inView && <CountUp start={0} end={74} duration={2} />}%
                  </div>
                  <div className="text-darkLiver text-center px-7 text-[20px] font-semibold">
                    HIGHER INTEREST IN BIG BRANDS
                  </div>
                </div>
                <div className="w-[310px] bg-transparent  bg-opacity-90 rounded-[15px] h-[136px] flex flex-col  items-center justify-center">
                  <div className="font-normal  text-[75px]">
                    {inView && <CountUp start={0} end={71} duration={2} />}%
                  </div>
                  <div className="text-darkLiver text-center px-7 text-[20px] font-semibold">
                    MORE USER CONFIDENCE IN TRAINING
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="VR-SOLUTIONS h-max mt-16">
        <div className="xl:max-w-7xl xl:mx-auto   flex flex-col gap-10 items-center justify-center">
          <div className="text-[50px] font-extrabold xl:text-start text-center leading-[52.5px]">
            VR SOLUTIONS
          </div>
          <div className="flex flex-col gap-20 mt-16 justify-center items-center lg:justify-between lg:place-content-between">
            <div className="flex xl:flex-row flex-col xl:items-start items-center gap-20 xl:text-start text-center">
              <div className="flex  justify-center xl:w-1/2 px-10 xl:px-0  flex-col gap-10">
                <div className=" text-[30px] font-extrabold leading-[34px]">
                  VR APP
                </div>
                <div className="text-[16px] xl:w-[80%] leading-[26px] font-normal font-jost">
                  Available through smartphones and tablets, these applications
                  allow you to use the technologies integrated into mobile
                  devices to project digital content in 3D consistent with the
                  surrounding environment. This is possible thanks to tracking
                  systems that allow you to recognize real-world objects and
                  create virtual reference planes with which to anchor the
                  digital content projected by applications. There are many
                  frameworks to develop VR experiences on mobile. The most
                  famous are Apple's ARkit and Google's ARcore, used to create
                  AR apps for iOS and Android.
                </div>
              </div>
              <div className="flex xl:items-start xl:justify-start items-center justify-center xl:w-1/2 px-10 xl:px-0">
                <img
                  src="/assets/LB-2.jpg"
                  alt=""
                  className="w-[532px] h-[371px] rounded-[10px]"
                />
              </div>
            </div>
            <div className="flex  xl:flex-row flex-col-reverse gap-20 xl:items-start items-center xl:text-start text-center">
              <div className="flex items-center xl:items-start xl:justify-start justify-center xl:w-1/2 px-10 xl:px-0">
                <img
                  src="/assets/automotive-showroom-4-1.jpg"
                  alt=""
                  className="w-[532px] h-[371px] rounded-[10px]"
                />
              </div>
              <div className="flex flex-col gap-10 items-center xl:items-start justify-center xl:w-1/2 px-10 xl:px-0">
                <div className=" text-[30px] text-start font-extrabold leading-[34px]">
                  VR PRESENTATION
                </div>
                <div className="text-[16px] xl:w-[80%] leading-[26px] font-normal font-jost">
                  Virtual reality presentations are a proper tool for several
                  industries since they can help the clients understand the
                  project fully and have a clear vision of the prototype of
                  their asset. The interactiveness of this solution leads to a
                  much higher engagement rate from viewers compared to regular
                  presentation tools. Paired with a narrator who explains the
                  product in question, VR presentation leaves a long-lasting
                  effect on customers' memory. Besides being the perfect tool to
                  display ideas to clients, VR presentations are also handy for
                  internal purposes, like onboarding.
                </div>
              </div>
            </div>
            <div className="flex xl:flex-row flex-col xl:items-start items-center gap-20 xl:text-start text-center">
              <div className="flex  justify-center xl:w-1/2 px-10 xl:px-0  flex-col gap-10">
                <div className=" text-[30px] font-extrabold leading-[34px]">
                  VR SIMULATION
                </div>
                <div className="text-[16px] xl:w-[80%] leading-[26px] font-normal font-jost">
                  VR simulations provide users with an immersive, 3D experience
                  that allows them a safe yet realistic environment to practice
                  their skills. This is why virtual reality can positively
                  impact training in many different fields. It empowers a highly
                  engaging learn-by-doing method, almost entirely imitating
                  real-life conditions. VR simulations are executed via a VR
                  headset and handheld controllers, allowing users to move
                  around and interact with the 3D environment, which means
                  simulated tools, machinery, their instructor, and other
                  trainees.
                </div>
              </div>
              <div className="flex xl:items-start xl:justify-start items-center  justify-center xl:w-1/2 px-10 xl:px-0">
                <img
                  src="/assets/automotive-showroom-2.jpg"
                  alt=""
                  className="w-[532px] h-[371px] rounded-[10px]"
                />
              </div>
            </div>
            <div className="flex  xl:flex-row flex-col-reverse gap-20 xl:items-start items-center xl:text-start text-center">
              <div className="flex xl:items-start xl:justify-start items-center  justify-center xl:w-1/2 px-10 xl:px-0">
                <img
                  src="/assets/automotive-showroom-6-1.jpg"
                  alt=""
                  className="w-[532px] h-[371px] rounded-[10px]"
                />
              </div>
              <div className="flex flex-col gap-10 items-center xl:items-start justify-center xl:w-1/2 px-10 xl:px-0">
                <div className=" text-[30px] font-extrabold leading-[34px]">
                  VIRTUAL ENVIRONMENTS
                </div>
                <div className="text-[16px] xl:w-[80%] leading-[26px] font-normal font-jost">
                  Virtual reality environments are another great tool for
                  virtual reality-based learning. Virtually created environments
                  empower their users to transfer knowledge and skills gained in
                  the virtual world to the real environment. Virtual
                  environments aren't all the same and vary on the level of
                  immersion, meaning that the solution can be adapted to the
                  client's needs and budget.
                </div>
              </div>
            </div>
            <div className="flex xl:flex-row flex-col xl:items-start items-center gap-20 xl:text-start text-center">
              <div className="flex  justify-center xl:w-1/2 px-10 xl:px-0  flex-col gap-10">
                <div className=" text-[30px] font-extrabold leading-[34px]">
                  VIRTUAL SHOWROOM
                </div>
                <div className="text-[16px] xl:w-[80%] leading-[26px] font-normal font-jost">
                  Virtual showrooms are designed to immerse users in an
                  environment the brand chooses to display. They create an
                  online platform that lets brands and retail buyers engage to
                  showcase the products. VR showrooms eliminate the need for
                  showrooms and trade shows, thus cutting the costs of physical
                  venues and samples to show new collections. This method has
                  proven beneficial for brands since it leads to increased
                  sales, lowers return rates, and boosts customer confidence in
                  purchasing. It also improves customer satisfaction and thus
                  builds brand loyalty.
                </div>
              </div>
              <div className="flex xl:items-start xl:justify-start items-center  justify-center xl:w-1/2 px-10 xl:px-0">
              <img
                 src="/assets/automotive-showroom-7-2.jpg"
                 alt=""
                className="w-[532px] h-[371px] rounded-[10px]"
              />
              </div>
            </div>
            <div className="flex  xl:flex-row flex-col-reverse gap-20 xl:items-start items-center xl:text-start text-center">
              <div className="flex xl:items-start xl:justify-start items-center  justify-center xl:w-1/2 px-10 xl:px-0">
              <img
              src="/assets/bewooden-1.jpg"
                alt=""
                className="w-[532px] h-[371px] rounded-[10px]"
              />
              </div>
              <div className="flex flex-col gap-10 items-center xl:items-start justify-center xl:w-1/2 px-10 xl:px-0">
                <div className=" text-[30px] font-extrabold leading-[34px]">
                VR TRAINING
                </div>
                <div className="text-[16px] xl:w-[80%] leading-[26px] font-normal font-jost">
                Studies have shown that virtual reality training retention rates
                 are much higher than other types of education. Employee training
                 with virtual reality stimulates situations that improve their
                 practical skills and teach them to cope with stress and
                dangerous new situations in a safe environment. In this
                environment, employees feel safe and can try again as often as
                possible, giving them a chance to develop effective responses to
                threatening situations. The users' emotional engagement with
                 virtual reality training guarantees a long-lasting memory of the
                 task.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="GET-YOUR-VR-PROJECT-STARTED my-32 max-sm:px-5 h-max w-full">
        <div className="xl:max-w-7xl xl:mx-auto flex xl:flex-row flex-col items-center w-full text-center xl:text-start gap-10 xl:gap-0 justify-center xl:justify-between">
          <div className="flex flex-col gap-4 w-full">
            <div className="font-semibold sm:text-[40px] text-[32px] md:text-[50px] leading-[52px] ">
            Get your VR project started
            </div>
            <div className="text-[20px] font-jost leading-[32px]">
            Fill out our contact form below and get started on your project with YORD team.
            </div>
          </div>
          <div>
            <a href="#contact">
              <Button className={"h-[50px] px-5"}>
                Contact Us{" "}
                <span className="text-[20px] font-semibold ml-1">&#8681;</span>
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="SECTION-PROJECTS h-max xl:max-w-7xl xl:mx-auto  px-10 xl:px-0 flex flex-col gap-20 items-center justify-center py-28">
        <div className="flex flex-col gap-5 text-center">
          <h2 className="font-bold uppercase md:text-[50px] sm:text-[40px] text-[32px] sm:leading-[40px] leading-[32px] md:leading-[68px] tracking-[6px] text-center">
          VR Examples
          </h2>
        </div>
        <div className="flex h-full w-full items-center justify-center">
          <div className="grid lg:grid-cols-2 items-center justify-center grid-cols-1 xl:grid-cols-3 gap-10">
            {projects.map((item, ind) => (
              <div
                key={ind}
                className={`relative rounded-[5px] cursor-pointer `}
              >
                <div
                  className="h-full w-full bg-red-500  absolute"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(2, 0, 0, 0) 65%, #020000 89%)",
                  }}
                ></div>

                <img
                  src={Object.values(item)[0].toString()}
                  alt=""
                  className={`rounded-[5px]  cursor-pointer transition-all duration-300   `}
                />
                <div className="absolute bottom-20 font-bold text-[20px] leading-[25px] tracking-[6px] px-16 uppercase flex flex-row items-center justify-center text-center w-full cursor-pointer  ">
                  <div className="absolute  sm:max-w-xl sm:mx-auto px-10">
                    <br />
                    <br />
                    <a
                      href="#"
                      className="max-w-sm text-[21px] font-bold leading-[27px] tracking-[6px]"
                    >
                      <span className="link link-underline link-underline-black text-white">
                        {" "}
                        {Object.values(item)[1].toString()}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="KEY-TOOLS relative max-sm:px-10 px-10 py-32 h-max pb-0
       w-full "
        id="about"
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
        <div className="flex z-20 relative flex-row items-center justify-center w-full">
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
                    <img src={item.path} alt="" className="relative  z-20" />
                  </div>
                ))}
            </div>
            <div></div>
          </div>
        </div>
      </section>
      <section className="CONTACT-SECTION py-32 max-w-7xl mx-auto " id="contact">
       <ContactForm/>

       </section>
    </div>
  );
};

export default VrServices;
