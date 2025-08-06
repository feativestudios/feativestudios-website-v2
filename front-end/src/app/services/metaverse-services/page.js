
"use client";
import Button from "@/app/components/Button";
import ContactForm from "@/app/components/ContactForm";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export const metadata = {
  robots: "noindex, nofollow",
};
const MetaverseServices = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.5, // Trigger animation when 50% of the component is visible
  });

  const projects = [
    {
      pro1: "/assets/Hero-image-final-1.jpg",
      title: "VR Showcase • Shoptet",
    },
    {
      pro2: "/assets/oldtown_web-Copy.jpeg",
      title: "VR City Experience • YORD",
    },
    {
      pro3: "/assets/Wundermen-Thompson-ploom_3.jpg",
      title: "VR Experience • Wundermen Thompson",
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

  return (
    <div className="font-arca ">
      <section className="xl:h-max h-max">
        <div className="lg:pt-[85px] pt-[120px] h-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 xl:gap-1">
          <div className="lg:w-1/2 w-full lg:text-start text-center flex items-center justify-center px-10">
            <div className="flex flex-col gap-20 ">
              <div className="md:text-[50px] sm:text-[40px] text-[32px] font-extrabold leading-[50px]">
              METAVERSE DEVELOPMENT FOR BUSINESS
              </div>
              <div className="font-jost text-[16px] text-opacity-80 text-white">
              Metaverse is a virtual 3D environment that contains and connects
                various virtual worlds and can be navigated through an avatar
                representing your identity. The main concepts of the metaverse
                are business-relevant in today's economy, which means that once
                the metaverse is fully developed, it could profoundly change how
                businesses and consumers interact with products, services, and
                each other. Stepping into a new and highly immersive reality
                helps companies acquire new and keep the existing customers,
                allowing their users to socialize, learn, collaborate and play
                in ways beyond what we could ever imagine.
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
          <img src="/assets/METAVERSE-8-1.png" alt="" className="object-cover" />
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
                  WILL SPEND AT LEAST 1 HOUR/DAY IN THE METAVERSE
                  </div>
                </div>
                <div className="w-[310px] bg-transparent bg-opacity-90 rounded-[15px] h-[136px] flex flex-col  items-center justify-center">
                  <div className="font-normal  text-[75px]">
                    {inView && <CountUp start={0} end={13} duration={2} />}%
                  </div>
                  <div className="text-darkLiver text-center px-5 text-[20px] font-semibold">
                  EXPECTED GROWTH OF THE METAVERSE EACH YEAR
                  </div>
                </div>

                <div className="w-[310px] bg-transparent bg-opacity-90 rounded-[15px] h-[136px] flex flex-col  items-center justify-center">
                  <div className="font-normal  text-[75px]">
                    {inView && <CountUp start={0} end={74} duration={2} />}%
                  </div>
                  <div className="text-darkLiver text-center px-7 text-[20px] font-semibold">
                  OF ADULTS CONSIDER JOINING THE METAVERSE
                  </div>
                </div>
                <div className="w-[310px] bg-transparent  bg-opacity-90 rounded-[15px] h-[136px] flex flex-col  items-center justify-center">
                  <div className="font-normal  text-[75px]">
                    {inView && <CountUp start={0} end={71} duration={2} />}%
                  </div>
                  <div className="text-darkLiver text-center px-7 text-[20px] font-semibold">
                  INTEREST IN GLOBAL EXECUTIVES
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
          METAVERSE SOLUTIONS
          </div>
          <div className="flex flex-col gap-20 mt-16 justify-center items-center lg:justify-between lg:place-content-between">
            <div className="flex xl:flex-row flex-col xl:items-start items-center gap-20 xl:text-start text-center">
              <div className="flex  justify-center xl:w-1/2 px-10 xl:px-0  flex-col gap-10">
                <div className=" text-[30px] font-extrabold leading-[34px]">
                ENTER EXISTING METAVERSE
                </div>
                <div className="text-[16px] xl:w-[80%] leading-[26px] font-normal font-jost">
                There is a growing number of metaverses that offer properties
                for sale. The conditions and prices vary from the Metaverse to
                the Metaverse, so it's worth researching before investing. You
                can buy a property there, like a house, an island, or a piece of
                land, build your brand's branch, and thus immerse yourself in a
                new era of doing business in the Metaverse. Major brands have
                already recognized this opportunity and empowered their brand
                with a metaverse branch, indicating that it will become a new
                battleground for e-commerce.
                </div>
              </div>
              <div className="flex xl:items-start xl:justify-start items-center justify-center xl:w-1/2 px-10 xl:px-0">
              <img
                src="/assets/automotive-showroom-10-1-1.jpg"
                alt=""
                className="w-[532px] h-[371px] object-cover rounded-[10px]"
              />
              </div>
            </div>
            <div className="flex  xl:flex-row flex-col-reverse gap-20 xl:items-start items-center xl:text-start text-center">
              <div className="flex items-center xl:items-start xl:justify-start justify-center xl:w-1/2 px-10 xl:px-0">
              <img
                src="/assets/automotive-showroom-10-2-1.jpg"
                alt=""
                className="w-[532px] h-[371px] rounded-[10px] object-cover"
              />
              </div>
              <div className="flex flex-col gap-10 items-center xl:items-start justify-center xl:w-1/2 px-10 xl:px-0">
                <div className=" text-[30px] text-start font-extrabold leading-[34px]">
                ADAPT YOUR METAVERSE
                </div>
                <div className="text-[16px] xl:w-[80%] leading-[26px] font-normal font-jost">
                With the endless potential Metaverse offers, some brands don't
                want to enter an existing one; they want a piece of their
                Metaverse. But it's not easy to build your own Metaverse, so the
                possibility of adapting to an existing metaverse might be the
                perfect solution. Some tools and platforms are open source and
                allow users to adapt to their own Metaverse. One of the most
                significant examples is Mozilla hubs, open-source engine member
                applications that can be forked and made on your own.
                </div>
              </div>
            </div>
            <div className="flex xl:flex-row flex-col xl:items-start items-center gap-20 xl:text-start text-center">
              <div className="flex  justify-center xl:w-1/2 px-10 xl:px-0  flex-col gap-10">
                <div className=" text-[30px] font-extrabold leading-[34px]">
                BUILD YOUR OWN METAVERSE
                </div>
                <div className="text-[16px] xl:w-[80%] leading-[26px] font-normal font-jost">
                Building your Metaverse from scratch might be the most
                challenging solution, but it gives the brands the most autonomy.
                It's not an easy process and requires technical skills followed
                by a strong business model. Also, deciding on the immersion
                level, you will be going with is crucial. Multiple different
                integration levels come together in one shared space or a
                network. It's not a simple one-dimensional process, which is why
                there are metaverse studios specializing in helping brands with
                metaverse integrations.
                </div>
              </div>
              <div className="flex xl:items-start xl:justify-start items-center  justify-center xl:w-1/2 px-10 xl:px-0">
              <img
                src="/assets/automotive-showroom-10-3.jpg"
                alt=""
                className="w-[532px] h-[371px] rounded-[10px] object-cover"
              />
              </div>
            </div>
            
          </div>
        </div>
      </section>
      <section className="GET-YOUR-VR-PROJECT-STARTED my-32 max-sm:px-5 h-max w-full">
        <div className="xl:max-w-7xl xl:mx-auto flex xl:flex-row flex-col items-center w-full text-center xl:text-start gap-10 xl:gap-0 justify-center xl:justify-between">
          <div className="flex flex-col gap-4 w-full">
            <div className="font-semibold sm:text-[40px] text-[32px] md:text-[50px] leading-[52px] ">
            Get your Metaverse project started
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

      <section className="METAVERSE-BENEFITS  h-max mt-16">
        <div className="md:max-w-7xl md:mx-auto max-md:px-5 flex flex-col gap-10 items-center justify-center">
          <div className="lg:text-[50px] md:text-[40px] sm:text-[32px] text-[28px] md:text-start text-center font-extrabold leading-[52.5px]">
            METAVERSE BENEFITS FOR BUSINESS
          </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 mt-16 justify-between place-content-between">
  <div className="flex flex-col gap-10 items-center justify-center">
    <div className="flex flex-col gap-2">
      <div className="font-jost text-[14px] leading-[23.45px] text-white text-opacity-70">
        METAVERSE BENEFITS
      </div>
      <div className="text-[35px] font-extrabold leading-[34px]">
        Did you know that Metaverse is believed to be….?
      </div>
    </div>
    <div className="flex flex-col gap-8 mt-16">
      <div className="text-[21px] w-[80%] leading-[26px] font-normal font-jost">
        – A breakthrough experience by 42% of global executives
      </div>
      <div className="text-[21px] w-[80%] leading-[26px] font-normal font-jost">
        – Used by 25% of people by 2026
      </div>
      <div className="text-[21px] w-[80%] leading-[26px] font-normal font-jost">
        – A positive experience for their business by 71% of executives
      </div>
      <div className="text-[21px] w-[80%] leading-[26px] font-normal font-jost">
        – Worth more than a trillion in annual revenues by JP Morgan
      </div>
    </div>
  </div>
  <div>
    <img
      src="/assets/final-render-2.png"
      alt=""
      className="w-[532px] rounded-[10px] object-cover"
    />
  </div>

  {/* Reverse order on small screens, but keep normal on large screens */}
  <div className="flex flex-col-reverse xl:flex-row gap-10 items-start justify-center">
    <div className="flex flex-col gap-2 items-start justify-start">
      <div className="font-jost text-[14px] leading-[23.45px] text-white text-opacity-70">
        MARKET VISION FOR THE METAVERSE
      </div>
      <div className="text-[35px] font-extrabold leading-[34px]">
        Have you heard...?
      </div>
    </div>
    <div className="flex flex-col gap-8 mt-16">
      <div className="text-[21px] w-[80%] leading-[26px] font-normal font-jost">
        – Global spending on VR/AR is expected to rise to $72.8 billion in 2024
      </div>
      <div className="text-[21px] w-[80%] leading-[26px] font-normal font-jost">
        – In 2023, the Metaverse market is expected to rise to 82 billion U.S.
        dollars
      </div>
      <div className="text-[21px] w-[80%] leading-[26px] font-normal font-jost">
        – It is expected to surge to 678.8 billion U.S. dollars by 2030
      </div>
      <div className="text-[21px] w-[80%] leading-[26px] font-normal font-jost">
        – Meta Reality Labs has already invested $10 billion in the Metaverse
      </div>
    </div>
  </div>
  <div>
    <img
      src="/assets/final-city-1.png"
      alt=""
      className="w-[532px] rounded-[10px] object-cover"
    />
  </div>
</div>

            
        </div>
      </section>

      <section className="SECTION-PROJECTS h-max xl:max-w-7xl xl:mx-auto  px-10 xl:px-0 flex flex-col gap-20 items-center justify-center py-28">
        <div className="flex flex-col gap-5 text-center">
          <h2 className="font-bold uppercase md:text-[50px] sm:text-[40px] text-[32px] sm:leading-[40px] leading-[32px] md:leading-[68px] tracking-[6px] text-center">
          METAVERSE EXAMPLES
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
                  className={`rounded-[5px] object-cover cursor-pointer transition-all duration-300   `}
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
      <section
        className="CONTACT-SECTION py-32 max-w-7xl mx-auto "
        id="contact"
      >
        <ContactForm />
      </section>
    </div>
  );
};

export default MetaverseServices;
