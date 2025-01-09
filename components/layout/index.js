import React, { lazy, Suspense } from "react";
const Navbar = lazy(() => import("../../components/navbar"));
const Footer = lazy(() => import("../footer"));
import { ScrollArea } from "../ui/scroll-area";
import { popularUnlistedShares } from "@/data";
import { rupee } from "@/hooks/Intl";
import { cn } from "@/lib/utils";
import SharesMarquee from "../shares-marquee";

export default function Layout({ children }) {
  return (
    <div className="h-screen bg-gray-50">
      <Suspense fallback={<div>loading...</div>}>
        <Navbar />
      </Suspense>
      <SharesMarquee />
      {children}
      <Suspense fallback={<div>loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}
