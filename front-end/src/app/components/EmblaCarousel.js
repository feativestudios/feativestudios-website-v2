import React, { useEffect } from 'react';
import { DotButton, useDotButton } from './EmblaCarousalDotButton';
import { PrevButton, NextButton, usePrevNextButtons } from './EmblaCarousalButtons';
import useEmblaCarousel from 'embla-carousel-react';

const testimonials = [
    {
      name: "EVERETT HAZEL",
      role: "Business Owner",
      initials: "EH",
      content:
        "We engaged Feative Studios for a Metaverse-related project. The team delivered a quality product that met our specifications. ",
    },
    {
      name: "SELENA ROCK",
      role: "Dev Lead",
      initials: "SR",
      content:
        "Communication with Feative Studios was clear and effective. They showed a good understanding of our needs and were diligent in delivering their services.",
    },
    {
      name: "ARCHIE OSCAR",
      role: "Operations Manager",
      initials: "AO",
      content:
        "The work delivered was satisfactory. They have a strong grasp of game development and Metaverse, which was reflected in the project results.",
    },
    {
        name: "EVERETT HAZEL",
        role: "Business Owner",
        initials: "EH",
        content:
          "We engaged Feative Studios for a Metaverse-related project. The team delivered a quality product that met our specifications. ",
      },
      {
        name: "SELENA ROCK",
        role: "Dev Lead",
        initials: "SR",
        content:
          "Communication with Feative Studios was clear and effective. They showed a good understanding of our needs and were diligent in delivering their services.",
      },
      {
        name: "ARCHIE OSCAR",
        role: "Operations Manager",
        initials: "AO",
        content:
          "The work delivered was satisfactory. They have a strong grasp of game development and Metaverse, which was reflected in the project results.",
      }, {
        name: "EVERETT HAZEL",
        role: "Business Owner",
        initials: "EH",
        content:
          "We engaged Feative Studios for a Metaverse-related project. The team delivered a quality product that met our specifications. ",
      },
      {
        name: "SELENA ROCK",
        role: "Dev Lead",
        initials: "SR",
        content:
          "Communication with Feative Studios was clear and effective. They showed a good understanding of our needs and were diligent in delivering their services.",
      },
      {
        name: "ARCHIE OSCAR",
        role: "Operations Manager",
        initials: "AO",
        content:
          "The work delivered was satisfactory. They have a strong grasp of game development and Metaverse, which was reflected in the project results.",
      }, {
        name: "EVERETT HAZEL",
        role: "Business Owner",
        initials: "EH",
        content:
          "We engaged Feative Studios for a Metaverse-related project. The team delivered a quality product that met our specifications. ",
      },
      {
        name: "SELENA ROCK",
        role: "Dev Lead",
        initials: "SR",
        content:
          "Communication with Feative Studios was clear and effective. They showed a good understanding of our needs and were diligent in delivering their services.",
      },
      {
        name: "ARCHIE OSCAR",
        role: "Operations Manager",
        initials: "AO",
        content:
          "The work delivered was satisfactory. They have a strong grasp of game development and Metaverse, which was reflected in the project results.",
      },
  ];

const EmblaCarousel = (props) => {
  const { slides, options = {} } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [emblaApi]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
         <div className="flex flex-row w-full">
        <div className="relative flex flex-col  gap-2 pr-5">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      <div className="embla__viewport w-full cursor-grab active:cursor-grabbing select-none" ref={emblaRef}>
        <div className=" flex flex-row gap-5 pl-3.5">
          {testimonials.map((val,index) => (
            <div className={`embla__slide border h-max p-8 !px-8 min-h-[300px] border-white border-opacity-20 rounded-[40px] ${index === 0 ? 'ml-[4px]':""}`} key={index}>
               <p className="lg:text-lg md:text-base text-sm leading-relaxed mb-4 md:mb-8">{val.content}</p>
               <div className="flex  mb-3 md:mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-bitterSweet fill-current mr-1"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
                          </svg>
                        ))}
                      </div>
            <div className="flex lg:flex-row flex-col items-start  lg:items-center justify-between">
              <div>
                <h4 className="font-semibold md:text-base text-sm  lg:text-lg">{val.name}</h4>
                <p className="text-gray-500  mt-1">{val.role}</p>
              </div>
              <div className="lg:w-12 md:w-10 max-lg:mt-2 md:h-10 w-8 h-8 lg:h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center">
                <span className="text-bitterSweet md:text-sm text-xs lg:text-base">{val.initials}</span>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>

     

       
      </div>
    </section>
  );
};

export default EmblaCarousel;
