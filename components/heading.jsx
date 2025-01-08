import React from "react";
import Balancer from "react-wrap-balancer";
import { Muted } from "./typography";
import { cn } from "@/lib/utils";

export default function Heading({
  className,
  title = "",
  para = "",
  titleClassName = "",
  paraClassName = "",
}) {
  return (
    <div className={className}>
      <h2 className={cn("font-medium text-4xl", titleClassName)}>
        <Balancer>{title}</Balancer>
      </h2>
      <Muted className={cn("mt-4", paraClassName)}>
        <Balancer>{para}</Balancer>
      </Muted>
    </div>
  );
}
