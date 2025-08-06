
import { useState } from "react";
const Testimonials = () => {
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
      ];
     const [slideDirection, setSlideDirection] = useState("none");
      const [visibleCards, setVisibleCards] = useState([
        ...testimonials,
        ...testimonials,
      ]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slidePosition, setSlidePosition] = useState(0);

    const handleNext = () => {
        if (!isAnimating) {
          setIsAnimating(true);
          setSlideDirection("left");
          setSlidePosition(-100);
    
          const newCards = [...visibleCards];
          const firstCard = newCards.shift();
          newCards.push(firstCard);
          setVisibleCards(newCards);
          setSlidePosition(0);
          setSlideDirection("none");
          setIsAnimating(false);
        }
      };
    
  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setSlideDirection("right");
      setSlidePosition(100);
      const newCards = [...visibleCards];
      const lastCard = newCards.pop();
      newCards.unshift(lastCard);
      setVisibleCards(newCards);
      setSlidePosition(0);
      setSlideDirection("none");
      setIsAnimating(false);
    }
  };
  return (
    <section className="SECTION-TESTIMONIALS px-10 my-20  h-max">
        <div className="relative">
          {/* Left Side Navigation Buttons */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
            <button
              onClick={handlePrev}
              className="w-12 h-12 bg-bitterSweet hover:shadow-custom rounded-full flex items-center justify-center transition-all duration-400"
              disabled={isAnimating}
            >
              <svg
                className="w-6 h-6 text-white transform rotate-90"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 bg-bitterSweet rounded-full hover:shadow-custom transition-all duration-400 flex items-center justify-center"
              disabled={isAnimating}
            >
              <svg
                className="w-6 h-6 text-white transform -rotate-90"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          {/* Main Content Area */}
          <div className="pl-24 pr-0">
            {/* Header Section */}
            <div className="pt-8">
             
              <h2 className="text-white text-4xl font-bold mb-12 mt-2">
                Hear From Our Clients
              </h2>
            </div>

            {/* Carousel Container */}
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(${slidePosition}%)`,
                  transition: "transform 500ms ease-out",
                }}
              >
                {visibleCards.slice(0, 4).map((testimonial, index) => (
                  <div
                    key={index}
                    className={`w-1/4 pr-6 flex-shrink-0 transition-all duration-500
                    ${
                      isAnimating
                        ? slideDirection === "left"
                          ? "-translate-x-full"
                          : "translate-x-full"
                        : ""
                    }`}
                  >
                    <div
                      className={`bg-transparent border transition-all duration-500
                    ${
                      index === 0
                        ? "border-bitterSweet border-2"
                        : "border-white border-opacity-20"
                    }
                    rounded-[45px] px-8 py-4 h-full relative
                    ${index === 0 ? "z-10 shadow-xl" : "z-0"}`}
                    >
                      <p className="text-white text-sm leading-relaxed mb-8">
                        {testimonial.content}
                      </p>

                      <div className="flex mb-4">
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

                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="text-white font-semibold text-sm">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-500 text-xs mt-1">
                            {testimonial.role}
                          </p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-[#2a2a2a] flex items-center justify-center">
                          <span className="text-bitterSweet text-xs">
                            {testimonial.initials}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
  )
};

export default Testimonials
