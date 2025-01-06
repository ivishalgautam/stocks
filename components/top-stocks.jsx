"use client";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import EmblaCarousel from "./embla/carousel";
import { stocks } from "@/data";

export default function TopStocks() {
  const [emblaRef] = useEmblaCarousel();
  return <EmblaCarousel slides={stocks.slice(0, 5)} />;
}
