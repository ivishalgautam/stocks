import React from "react";
import Balancer from "react-wrap-balancer";
import { Muted } from "./typography";

export default function Heading({ className, title = "", para = "" }) {
  return (
    <div className={className}>
      <h2 className="font-medium text-4xl">
        <Balancer>{title}</Balancer>
      </h2>
      <Muted className={"mt-4"}>
        <Balancer>{para}</Balancer>
      </Muted>
    </div>
  );
}
