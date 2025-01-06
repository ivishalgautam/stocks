import React, { lazy, Suspense } from "react";
const Navbar = lazy(() => import("../../components/navbar"));
const Footer = lazy(() => import("../footer"));
import { ScrollArea } from "../ui/scroll-area";

export default function Layout({ children }) {
  return (
    <ScrollArea className="h-screen bg-gray-50">
      <Suspense fallback={<div>loading...</div>}>
        <Navbar />
      </Suspense>
      {children}
      <Suspense fallback={<div>loading...</div>}>
        <Footer />
      </Suspense>
    </ScrollArea>
  );
}
