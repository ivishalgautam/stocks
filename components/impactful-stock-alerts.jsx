import React from "react";
import PageSection from "./page-section";
import Image from "next/image";
import Heading from "./heading";
import { Muted, Small } from "./typography";
import { Button } from "./ui/button";

export default function ImpactfullStockAlerts() {
  return (
    <PageSection>
      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-6">
          <Heading title="Monitor Company Performance" />

          <div className="space-y-4">
            <Muted className={"leading-7"}>
              Get instant, personalized stock alerts to stay on top of market
              changes and make timely, informed decisions.
            </Muted>
            <Muted className={"leading-7"}>
              Receive powerful, real-time stock alerts that keep you informed of
              market movements as they happen. Whether it's a price shift, a new
              trend, or a key opportunity, our alerts are tailored to help you
              make fast, data-driven decisions that maximize your investment
              potential.
            </Muted>
          </div>

          <Button className="px-10 py-6">Sign up</Button>
        </div>

        <div>
          <figure>
            <Image src={"/stock-alerts.svg"} width={500} height={500} alt="" />
          </figure>
        </div>
      </div>
    </PageSection>
  );
}
