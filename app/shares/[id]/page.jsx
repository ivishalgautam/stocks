"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UnlistedShareChart } from "./_component/unlisted-share-chart";
import { UnlistedShareDetails } from "./_component/unlisted-share-details";
import { useParams } from "next/navigation";
import { UnlistedShareFundamentals } from "./_component/unlisted-share-fundamentals";
import FAQs from "@/components/faq";
import Image from "next/image";
import { newArrivalsShares, popularUnlistedShares } from "@/data";
import { ShareAbout } from "./_component/unlisted-share-about";
import { BuySell } from "./_component/buy-sell";

// Mock data for the unlisted share
const shareData = {
  name: "TechInnovate Inc.",
  ticker: "TECHIN",
  currentPrice: 42.5,
  change: 1.25,
  changePercentage: 3.03,
  marketCap: "2.1B",
  volume: "150K",
  peRatio: 22.5,
  dividend: "N/A",
  fundamentals: {
    revenue: "500M",
    netIncome: "50M",
    eps: 2.5,
    debtToEquity: 0.5,
    currentRatio: 2.1,
    quickRatio: 1.8,
    roe: 15.5,
  },
  valuation: {
    peRatio: 22.5,
    pbRatio: 3.2,
    evToEbitda: 12.8,
  },
  about: {
    description:
      "Share name is a leading technology company specializing in artificial intelligence and machine learning solutions. The company develops cutting-edge software and hardware products for various industries, including healthcare, finance, and autonomous vehicles.",
    founded: "2010",
    headquarters: "Silicon Valley, CA",
    employees: "2,500+",
    industry: "Technology",
    keyProducts: [
      "AI-powered predictive analytics platform",
      "Machine learning development toolkit",
      "Autonomous vehicle sensor systems",
      "Healthcare diagnostic AI",
    ],
  },
};

export default function UnlistedSharePage() {
  const { id } = useParams();
  const name = id.split("-").join(" ");
  const shares = [...popularUnlistedShares, ...newArrivalsShares];
  const currShare = shares.find((shr) => shr.title === name);

  return (
    <div className="container mx-auto p-4 py-10 space-y-10">
      <div className="flex items-center">
        {currShare?.icon && (
          <Image
            src={currShare.icon}
            width={100}
            height={100}
            className="aspect-video object-contain"
            alt={name}
          />
        )}
        <h1 className="text-3xl font-bold">{name}</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Share Price</CardTitle>
            <CardDescription>Historical price chart</CardDescription>
          </CardHeader>
          <CardContent>
            <UnlistedShareChart />
          </CardContent>
        </Card>

        <BuySell ticker={name} currentPrice={shareData?.price ?? 782} />

        <ShareAbout
          companyName={name}
          description={shareData.about.description}
          founded={shareData.about.founded}
          headquarters={shareData.about.headquarters}
          employees={shareData.about.employees}
          industry={shareData.about.industry}
          keyProducts={shareData.about.keyProducts}
        />

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Fundamentals</CardTitle>
            <CardDescription>
              Key financial metrics for {shareData.ticker}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <UnlistedShareFundamentals data={shareData.fundamentals} />
          </CardContent>
        </Card>
      </div>

      <div>
        <FAQs />
      </div>
    </div>
  );
}
