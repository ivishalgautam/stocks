import { cn } from "@/lib/utils";
import React from "react";

export default function Container({ className, children }) {
  return <div className={cn("", className)}>{children}</div>;
}
