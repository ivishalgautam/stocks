import { cn } from "@/lib/utils";
import { ChartNoAxesCombined } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Logo({ iconClassName, className, iconSize = 30 }) {
  return (
    <Link href={"/"}>
      <div className="flex items-center gap-2">
        <ChartNoAxesCombined
          className={cn("text-primary", iconClassName)}
          size={iconSize}
        />
        <span className={cn("text-2xl font-extrabold", className)}>Logo</span>
      </div>
    </Link>
  );
}
