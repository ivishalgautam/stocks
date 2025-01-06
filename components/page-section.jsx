import { cn } from "@/lib/utils";
import React from "react";

export default function PageSection({ className, children }) {
  return (
    <section className={cn("container py-20", className)}>{children}</section>
  );
}
