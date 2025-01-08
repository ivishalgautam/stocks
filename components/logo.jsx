import { cn } from "@/lib/utils";
import { ChartNoAxesCombined } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo({ iconClassName, className, iconSize = 30 }) {
  return (
    <Link href={"/"}>
      <div className="flex items-center gap-2">
        <figure>
          <Image
            src={"/logo.png"}
            width={100}
            height={100}
            alt="Unlisted buzz"
          />
        </figure>
      </div>
    </Link>
  );
}
