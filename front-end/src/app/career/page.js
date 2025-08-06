"use client";
import Button from "../components/Button";
import { useState } from "react";

const Career = () => {
  const [showDetail, setShowDetail] = useState(null);
  const specifics = [
    {
      name: "MONTHLY TEAM GATHERINGS",
      detail:
        "We often meet for enjoyable team events to strengthen our connections.",
    },
    {
      name: "PETS ALLOWED IN OUR OFFICE",
      detail:
        "You can bring your pets to work with you at our Karlín office. We love having furry companions!",
    },
    {
      name: "GAMING ZONE WITH PLAYSTATION VR",
      detail:
        "Take a break and have fun in our gaming area, complete with PlayStation VR for exciting experiences.",
    },
    {
      name: "MULTISPORT CARD",
      detail:
        "Do you enjoy sports and staying active? When you join our team, you can get a Multisport card, which grants you free access to a wide range of sports facilities.",
    },
    {
      name: "MULTISPORT CARD",
      detail:
        "Our workplace is all about being friendly and easygoing. It's like working with a group of friends here!",
    },
  ];
  return (
    <div className="font-arca">
      <section className="ABOUT-HEROSECTION w-full h-dvh relative ">
        <div className="absolute w-full h-full ">
          <div className="absolute inset-0 w-full z-10 h-full bg-gradient-to-b from-transparent via-black/20 to-black"></div>
          <img
            src="/assets/career.jpg"
            alt=""
            className="w-full h-full object-cover absolute"
          />
          <div className=" absolute z-20 flex flex-col items-center gap-20 text-center justify-center w-full h-full">
            <h1 className="mx-auto text-center  w-[50%] tracking-[10px] leading-[62px]  text-[62px] font-black">
              TO LEAD HUMANITY BEYOND REALITY
            </h1>
            <Button> see open positions</Button>
          </div>
        </div>
      </section>
      <section className="SECTION-POSITIONS h-max w-full ">
        <div className="flex flex-col gap-10 justify-center items-center w-full">
          <div className="flex flex-col gap-4">
            <h1 className="text-[38px] font-semibold leading-[57px] ">
              OPEN POSITIONS
            </h1>
            <p className="text-[16px] leading-[25px] font-jost font-medium">
              Calling all XR enthusiasts who love challenges!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 content-center justify-center items-center ">
            <div className="w-[530px] h-[130px] border-2 bg-gray-700 bg-opacity-20 border-bitterSweet flex flex-col gap-4 items-center justify-center">
              <div className="text-[14.76px] font-light font-jost">
                FULL-TIME - SENIOR{" "}
              </div>
              <div className="text-[35px] leading-[40px] link-underline hover:text-bitterSweet transition-colors  duration-[10000ms] ease-in-out uppercase font-semibold">
                uNITY DEVELOPER
              </div>
            </div>
            <div className="w-[530px] h-[130px] border-2 bg-gray-700 bg-opacity-20 border-bitterSweet flex flex-col gap-4 items-center justify-center">
              <div className="text-[14.76px] font-light font-jost">
                FULL-TIME - SENIOR{" "}
              </div>
              <div className="text-[35px] leading-[40px] uppercase font-semibold link-underline hover:text-bitterSweet transition-colors  duration-[10000ms] ease-in-out">
                unreal engine DEVELOPER
              </div>
            </div>
            <div className="w-[530px] h-[130px] border-2 bg-gray-700 bg-opacity-20 border-bitterSweet flex flex-col gap-4 items-center justify-center">
              <div className="text-[14.76px] font-light font-jost">
                FULL-TIME - SENIOR{" "}
              </div>
              <div className="text-[35px] leading-[40px] uppercase font-semibold link-underline hover:text-bitterSweet transition-colors  duration-[10000ms] ease-in-out">
                HTML5 Developer
              </div>
            </div>
            <div className="w-[530px] h-[130px] border-2 bg-gray-700 bg-opacity-20 border-bitterSweet flex flex-col gap-4 items-center justify-center">
              <div className="text-[14.76px] font-light font-jost">
                FULL-TIME - SENIOR{" "}
              </div>
              <div className="text-[35px] leading-[40px] uppercase font-semibold link-underline hover:text-bitterSweet transition-colors  duration-[10000ms] ease-in-out">
                3D ARTIST
              </div>
            </div>
            <div className="w-[530px] h-[130px] border-2 bg-gray-700 bg-opacity-20 border-bitterSweet flex flex-col gap-4 items-center justify-center">
              <div className="text-[14.76px] font-light font-jost">
                FULL-TIME - SENIOR{" "}
              </div>
              <div className="text-[35px] leading-[40px] uppercase font-semibold link-underline hover:text-bitterSweet transition-colors  duration-[10000ms] ease-in-out">
                2D ARTIST
              </div>
            </div>
            <div className="w-[530px] h-[130px] border-2 bg-gray-700 bg-opacity-20 border-bitterSweet flex flex-col gap-4 items-center justify-center">
              <div className="text-[14.76px] font-light font-jost">
                FULL-TIME - SENIOR{" "}
              </div>
              <div className="text-[35px] leading-[40px] uppercase font-semibold link-underline hover:text-bitterSweet transition-colors  duration-[10000ms] ease-in-out">
                UI & UX DESIGNER
              </div>
            </div>
            <div className="w-[530px] h-[130px] border-2 bg-gray-700 bg-opacity-20 col-span-2 justify-self-center border-bitterSweet flex flex-col gap-4 items-center justify-center">
              <div className="text-[14.76px] font-light font-jost">
                FULL-TIME - SENIOR{" "}
              </div>
              <div className="text-[35px] leading-[40px] uppercase  font-semibold link-underline hover:text-bitterSweet transition-colors  duration-[10000ms] ease-in-out">
                game DEVELOPER
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-full gap-4 mt-10">
            <div className="font-semibold text-[38px] leading-[57px] w-[40%] text-center">
              {" "}
              HAVEN'T FOUND THE RIGHT POSITION FOR YOU?
            </div>
            <div className="text-[16px] leading-[25px] tracking-[1px] w-[40%] font-jost text-center">
              We are always looking for talented XR enthusiasts to join our
              team. Are you interested in a career opportunity, or would you
              like to explore an internship with us?
            </div>
            <div>
              <Button> Email our hr team 📲 </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="WHAT-WE-DO container mx-auto h-max pb-0 py-32">
        <div className="flex flex-col gap-5 items-center justify-center mx-auto max-w-5xl ">
          <div className="text-[37px] font-black leading-[44px] tracking-[5px] uppercase">
            Discover benefits and perks at Yord
          </div>
          <div className="text-[16px] leading-[25px] font-normal tracking-[1px] font-jost">
            Work for a company where people lead themselves.
          </div>
          <div className="flex flex-col w-full">
            <div className="flex flex-col w-full">
              {specifics.map((item, ind) => (
                <div
                  className={`pt-3 pb-5 px-2 border-b-[2px] border-bitterSweet flex flex-col gap-6 w-full cursor-pointer
            ${ind === 0 ? "border-t-2" : ""} 
            ${ind === specifics.length - 1 ? "border-b-0" : ""}`}
                  key={ind}
                  onClick={() => setShowDetail(showDetail === ind ? null : ind)}
                >
                  <div className="w-full flex flex-row justify-between">
                    <div className="font-semibold text-bitterSweet text-[30px] tracking-[5px] uppercase">
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
            <div className="w-full flex flex-row items-center mt-10 justify-center"><Button className="mt-10">Learn about us</Button></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
