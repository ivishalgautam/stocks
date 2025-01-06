import React, { useCallback, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./arrow-buttons.jsx";
import "./embla.css";
import StockCard from "../cards/stock.jsx";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 2000 }),
  ]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onScroll = useCallback((emblaApi) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);
    emblaApi
      .on("reInit", onScroll)
      .on("scroll", onScroll)
      .on("slideFocus", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className="embla primary">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container space-x-4">
          {slides.map((slide, index) => (
            <div
              className="embla__slide border rounded-2xl bg-white"
              key={index}
            >
              <div className="embla__slide__number">
                <StockCard stock={slide} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__progress">
          <div
            className="embla__progress__bar"
            style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
          />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
