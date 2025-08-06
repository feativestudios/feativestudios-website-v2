'use client'
import ContactForm from "../components/ContactForm";

const Projects = () => {
  const projects = [
    {
      path: "/assets/pfizer.webp",
    },
    {
      path: "/assets/p4.webp",
    },
    {
      path: "/assets/p5.webp",
    },
    {
      path: "/assets/p4.webp",
    },
    {
      path: "/assets/p7.webp",
    },
    {
      path: "/assets/pfizer.webp",
    },
  ];
  

  return (
    <div className="h-full w-full pt-64 container mx-auto">
      <div className="flex flex-col gap-5 items-center justify-center   h-full w-full">
        <h1 className="font-semibold text-[40px] text-white tracking-[7.5px]">
          OUR WORK
        </h1>
        <p className="md:w-[40%] w-full px-5 text-center">
          Our VR and AR services, interactive projects, and high-end immersive
          experiences showcase our expertise. We’re proud to collaborate with
          our clients and look forward to working with you.
        </p>
      </div>
      <section className="SECTION-PROJECTS pt-52 w-full">
        <div className="w-full h-full flex flex-row items-center justify-center">
          <div className="grid lg:grid-cols-2 grid-cols-1 xl:grid-cols-3 items-center px-5 gap-10 justify-center">
            {projects.map((item, ind) => (
             <div
             key={ind}
             className="md:w-[400px] w-full h-[483px] relative rounded-md hover:opacity-50 transition-opacity duration-[500ms] cursor-pointer "
           >
            
             <div className="absolute  inset-0 bg-gradient-to-b from-transparent via-transparent to-black/85 rounded-md z-20"></div>
           
            
             <img
               src={item.path}
               alt=""
               className="w-full md:w-[400px] h-[483px] relative z-10 object-cover rounded-md transition-opacity duration-[400ms]"
             />
             <div className="absolute top-0 z-40 w-full h-full ">
              {/* <div className="absolute bottom-10 left-10 ">
              <p className="">hey</p>
              
              </div> */}
             </div>
           </div>
            ))}
          </div>
        </div>
      </section>
      <section className="pt-52 w-full px-5  md:px-20">
        <ContactForm/>

      </section>
    </div>
  );
};

export default Projects;
