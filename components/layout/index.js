import React, { lazy, Suspense } from "react";
const Navbar = lazy(() => import("../../components/navbar"));
const Footer = lazy(() => import("../footer"));
import { ScrollArea } from "../ui/scroll-area";
import { popularUnlistedShares } from "@/data";
import { rupee } from "@/hooks/Intl";
import { cn } from "@/lib/utils";

export default function Layout({ children }) {
  return (
    <ScrollArea className="h-screen bg-gray-50">
      <Suspense fallback={<div>loading...</div>}>
        <Navbar />
        <marquee behavior="" direction="" className="bg-black flex">
        <div className="h-10 flex gap-10 items-center">
          {popularUnlistedShares.map((item,ind)=>(
            <div key={ind} className="text-white space-x-2 text-sm">
              <span className="text-nowrap">{item.title}</span>
              <span className="text-primary font-semibold">{rupee.format(item.price)}</span>
              <span className={cn("text-primary font-semibold",{
                "text-green-500": item.isUp,
                "text-red-500": !item.isUp  
              })}>{(item.status)}</span>
            </div>
          ))}
        </div>
          </marquee>
      </Suspense>
      {children}
      <Suspense fallback={<div>loading...</div>}>
        <Footer />
      </Suspense>
    </ScrollArea>
  );
}
