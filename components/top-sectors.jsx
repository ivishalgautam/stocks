"use client";

import { useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import PageSection from "./page-section";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./embla/arrow-buttons";
import { Button } from "./ui/button";
import Container from "./container";

// Mock data for sectors
const sectorData = [
  {
    icon: "/icons/aggriculture.png",
    share: Math.floor(Math.random() * 100),
    name: "Agriculture",
  },
  {
    icon: "/icons/chemical.png",
    share: Math.floor(Math.random() * 100),
    name: "Agro Chemicals",
  },
  {
    icon: "/icons/airport.png",
    share: Math.floor(Math.random() * 100),
    name: "Airport",
  },
  {
    icon: "/icons/wine.png",
    share: Math.floor(Math.random() * 100),
    name: "Alcoholic Beverages",
  },
  {
    icon: "/icons/fashion.png",
    share: Math.floor(Math.random() * 100),
    name: "Apparel And Fashion",
  },
  {
    icon: "/icons/management.png",
    share: Math.floor(Math.random() * 100),
    name: "Auto Ancillaries",
  },
];

export function TopSectors() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <PageSection className="py-12 bg-secondary dark:bg-gray-900 rounded-2xl">
      <Container>
        <div className="px-4 space-y-8 grid lg:grid-cols-12">
          <div className="flex flex-col items-start justify-center col-span-4 gap-2">
            <h2 className="text-3xl font-semibold text-start text-white">
              Top Sectors in Unlisted Shares
            </h2>
            <Button>View more</Button>
          </div>

          <div className="overflow-hidden col-span-8 space-y-4">
            <div className="embla" ref={emblaRef}>
              <div className="embla__container space-x-4">
                {sectorData.map((sector, index) => (
                  <div
                    key={sector.name}
                    className={`embla__slide transition-all duration-300 ease-in-out transform bg-white p-6 rounded-2xl flex items-center justify-center ${
                      hoveredIndex === index ? "scale-105 shadow-lg" : ""
                    }`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="space-y-3 relative">
                      <div className="flex items-center justify-center">
                        <figure className="mx-auto size-16">
                          <Image
                            src={sector.icon}
                            width={200}
                            height={200}
                            alt={sector.name}
                          />
                        </figure>
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="text-center font-semibold">
                          {sector.name}
                        </span>
                      </div>
                      <div className="text-center font-semibold text-primary text-xl">
                        {sector.share}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-end">
              <div className="embla__buttons">
                <PrevButton
                  onClick={onPrevButtonClick}
                  disabled={prevBtnDisabled}
                />
                <NextButton
                  onClick={onNextButtonClick}
                  disabled={nextBtnDisabled}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </PageSection>
  );
}
