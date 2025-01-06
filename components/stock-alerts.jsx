import PageSection from "./page-section";
import Heading from "./heading";
import StockCardCompact from "./cards/stock-card-compact";
import { Button } from "./ui/button";
import { rupee } from "@/hooks/Intl";
import { stocks } from "@/data";

export default function StockAlerts() {
  return (
    <PageSection className={"py-4"}>
      <Heading
        title="Get Impactful Stock Alerts"
        para="Stay ahead in the market with instant stock alerts. Get real-time notifications on price changes, trends, and opportunities to make smarter and faster trading decisions."
      />

      <div className="space-y-10">
        <div className="grid  gap-4 mt-8 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
          {stocks.map((stock, i) => (
            <StockCardCompact key={i} stock={stock} />
          ))}
        </div>
        <div className="text-center">
          <Button>Sign up</Button>
        </div>
      </div>
    </PageSection>
  );
}
