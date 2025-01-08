"use client";

import React, { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { blogPosts } from "@/data";
import PageSection from "./page-section";
import Image from "next/image";
import Heading from "./heading";

export function BlogCarousel({ posts }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 3,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <PageSection className={""}>
      <div className="flex items-center justify-center">
        <Heading title="Our Blogs" />
      </div>
      <div className="relative p-10">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="flex-[0_0_calc(100%/3)] min-w-0 px-4"
              >
                <Card className="h-full hover:shadow-lg transition-shadow bg-gray-100 duration-200">
                  <CardHeader>
                    <figure className="w-full">
                      <Image
                        src={"/blog.svg"}
                        width={200}
                        height={200}
                        alt="blog"
                        className="w-full"
                      />
                    </figure>
                    <CardTitle className="text-lg">{post.title}</CardTitle>
                    <CardDescription>
                      <p className="text-sm">{post.excerpt}</p>
                      <p className="text-xs text-gray-500 mt-2">
                        By {post.author} on {post.date}
                      </p>
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-primary rounded-full p-2 shadow-md"
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-primary rounded-full p-2 shadow-md"
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </PageSection>
  );
}
