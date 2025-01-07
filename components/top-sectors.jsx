"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  Building2,
} from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

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

  return (
    <section className="py-12 bg-blue-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold text-center">
          Top Sectors in Unlisted Shares
        </h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">
          {sectorData.map((sector, index) => (
            <div
              key={sector.name}
              className={`transition-all duration-300 ease-in-out transform bg-white p-6 py-4 rounded-2xl flex items-center justify-center ${
                hoveredIndex === index ? "scale-105 shadow-lg" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-center">
                  <figure className="mx-auto">
                    <Image
                      src={sector.icon}
                      width={100}
                      height={100}
                      alt={sector.name}
                    />
                  </figure>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-center font-semibold">
                    {sector.name}
                  </span>
                </div>
                <div className="text-center">{sector.share}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="">View More</Button>
        </div>
      </div>
    </section>
  );
}
