import React, { useCallback, useEffect, useRef, useState } from "react";
import { DotButton, useDotButton } from "./EmblaCarousalButtonHero";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarouselHeroSection = (props) => {
  const images = [
    { img1: "/assets/Scene.mp4" },
    { img2: "/assets/metaverseHeroSection.jpg" },
    // { img3: "/assets/automotive-showroom-7-1-6-1.jpg" },
    // { img4: "/assets/automotive-showroom-7-1-3-1.jpg" },
  ];
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRefs = useRef([]);

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = emblaApi.plugins()?.autoplay;
    if (!autoplay) return;

    const onSelect = () => {
      const currentIndex = emblaApi.selectedScrollSnap();
      const currentSlide = images[currentIndex];
      const isVideo = Object.values(currentSlide)[0].includes(".mp4");

      if (isVideo) {
        setIsVideoPlaying(true);
        autoplay.stop();
        const videoElement = videoRefs.current[currentIndex];
        if (videoElement) {
          videoElement.currentTime = 0; // Reset video to start
          videoElement.play().catch((error) => {
            console.error("Video playback failed:", error);
          });
        }
      } else {
        setIsVideoPlaying(false);
        autoplay.play();
      }
    };

    emblaApi.on("select", onSelect);
    onSelect(); // Run on mount to check initial slide

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, images]);

  const onNavButtonClick = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const currentIndex = emblaApi.selectedScrollSnap();
    const currentSlide = images[currentIndex];
    const isVideo = Object.values(currentSlide)[0].includes(".mp4");

    if (!isVideo) {
      autoplay.reset();
    }
  }, [emblaApi, images]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  return (
    <section className="embla1 !h-dvh !z-50">
      <div className="embla__viewport1 !h-dvh" ref={emblaRef}>
        <div className="embla__container1 !h-dvh">
          {images.map((val, index) => (
            <div className="embla__slide1 !h-dvh" key={index}>
              {Object.values(val)[0].includes(".mp4") ? (
                <div className="embla__slide__number1 !h-dvh">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    className="!h-[100%] w-[100vw] object-cover"
                    autoPlay
                    muted
                    loop={false}
                    playsInline
                    preload="auto"
                    onEnded={() => {
                      if (emblaApi && emblaApi.canScrollNext()) {
                        emblaApi.scrollNext();
                      } else if (emblaApi) {
                        emblaApi.scrollTo(0);
                      }
                    }}
                  >
                    <source src={Object.values(val)[0]} type="video/mp4" />
                  </video>
                </div>
              ) : (
                <div className="embla__slide__number1 w-[100vw] !h-dvh ">
                  <img
                    src={Object.values(val)[0]}
                    className="!h-[100%] object-cover  w-[100vw] "
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              )}
              <div className="absolute inset-0 bg-[radial-gradient(50.71%_50.71%_at_50%_52%,rgba(0,0,0,0)_20%,#000_100%)] pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls1 absolute bottom-0 right-20 z-30">
        <div className="embla__dots1">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot1".concat(
                index === selectedIndex ? " embla__dot1--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarouselHeroSection;