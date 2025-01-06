import React from "react";
import Hero from "./hero";
import WhyChooseUs from "./why-choose-us";
import CompanyPerformance from "./company-performance";
import ImpactfullStockAlerts from "./impactful-stock-alerts";
import TrackPortfolio from "./track-portfolio";
import TrackPortfolioTable from "./track-portfolio-table";
import { TestimonialsVariant } from "./testimonials";
import FAQs from "./faq";
import NewArrivalsStocks from "./new-arrivals";

export default function Home() {
  return (
    <div>
      <Hero />
      <NewArrivalsStocks />
      <WhyChooseUs />
      <CompanyPerformance />
      <ImpactfullStockAlerts />
      <div className="bg-white">
        <TrackPortfolio />
        <TrackPortfolioTable />
        <TestimonialsVariant />
        <FAQs />
      </div>
    </div>
  );
}
