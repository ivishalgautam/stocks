import React from "react";
import Balancer from "react-wrap-balancer";
import { Muted } from "./typography";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import TopStocks from "./top-stocks";
import Heading from "./heading";
// import { Logos } from "./logo-marquee";

export default function Hero() {
  return (
    <section className="flex items-center justify-center pt-10">
      <div className="min-h-screen w-full space-y-16">
        <div>
          <h1 className="text-center font-merriweather text-lg font-semibold sm:text-2xl lg:text-3xl xl:text-5xl">
            <Balancer>
              Maximize Returns <br /> with Expert Stock Insights
            </Balancer>
          </h1>
          <Muted className={"text-center my-10"}>
            <Balancer>
              Effortlessly buy and sell stocks with real-time updates, smart
              tools, <br />
              and expert insights for maximum profits.
            </Balancer>
          </Muted>

          <PlaceholdersAndVanishInput
            placeholders={[
              "Fast, Reliable Stock Buy-Sell Platform",
              "Buy Low, Sell High: Simplify Strategy",
              "Power Your Portfolio with Smarter Trades",
            ]}
          />
        </div>

        {/*  top stocks */}
        <div className="px-4 container">
          <Heading title="Popular unlisted shares" />
          <TopStocks />
        </div>
      </div>
    </section>
  );
}
