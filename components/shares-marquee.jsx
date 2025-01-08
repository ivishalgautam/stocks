import { popularUnlistedShares } from "@/data";
import { rupee } from "@/hooks/Intl";
import { cn } from "@/lib/utils";
import React from "react";

export default function SharesMarquee() {
  return (
    <marquee behavior="" direction="" className="bg-black flex">
      <div className="h-10 flex gap-10 items-center">
        {popularUnlistedShares.map((item, ind) => (
          <div key={ind} className="text-white space-x-2 text-sm">
            <span className="text-nowrap">{item.title}</span>
            <span className="text-primary font-semibold">
              {rupee.format(item.price)}
            </span>
            <span
              className={cn("text-primary font-semibold", {
                "text-green-500": item.isUp,
                "text-red-500": !item.isUp,
              })}
            >
              {item.status()}
            </span>
          </div>
        ))}
        {popularUnlistedShares.map((item, ind) => (
          <div key={ind} className="text-white space-x-2 text-sm">
            <span className="text-nowrap">{item.title}</span>
            <span className="text-primary font-semibold">
              {rupee.format(item.price)}
            </span>
            <span
              className={cn("text-primary font-semibold", {
                "text-green-500": item.isUp,
                "text-red-500": !item.isUp,
              })}
            >
              {item.status()}
            </span>
          </div>
        ))}
        {popularUnlistedShares.map((item, ind) => (
          <div key={ind} className="text-white space-x-2 text-sm">
            <span className="text-nowrap">{item.title}</span>
            <span className="text-primary font-semibold">
              {rupee.format(item.price)}
            </span>
            <span
              className={cn("text-primary font-semibold", {
                "text-green-500": item.isUp,
                "text-red-500": !item.isUp,
              })}
            >
              {item.status()}
            </span>
          </div>
        ))}
      </div>
    </marquee>
  );
}
