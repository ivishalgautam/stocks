import React from "react";
import PageSection from "./page-section";
import Image from "next/image";
import Heading from "./heading";
import { Muted, Small } from "./typography";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { TrendingDown, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { rupee } from "@/hooks/Intl";
import { popularUnlistedShares, stocks } from "@/data";

export default function TrackPortfolioTable() {
  const isUp = Math.random() > 0.5;

  return (
    <PageSection>
      <div className="">
        <div className="space-y-6">
          <Heading
            className={"text-center"}
            title="Track your portfolio"
            para="Set up personalized alerts to notify you when significant changes occur in your portfolio. Whether it's a price drop, rise, or market shift, stay on top of your investments and act swiftly to capitalize on opportunities."
          />

          <div className="max-w-lg mx-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="">Company</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {popularUnlistedShares.map((item, ind) => (
                  <TableRow key={ind}>
                    <TableCell className="font-medium">{item.title}</TableCell>
                    <TableCell className="text-right">
                      <div className={cn("flex flex-col items-end  gap-1")}>
                        <span className="text-primary-300">
                          {rupee.format(item.price)}
                        </span>
                        <div
                          className={cn(
                            "flex items-center gap-1 text-xs text-red-500",
                            {
                              "text-green-500": item.isUp,
                            }
                          )}
                        >
                          <span>
                            {item.isUp ? (
                              <TrendingUp size={20} />
                            ) : (
                              <TrendingDown size={20} />
                            )}
                          </span>
                          <span>{item.status}</span>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="text-center">
            <Button className="px-10 py-6">Sign up</Button>
          </div>
        </div>
      </div>
    </PageSection>
  );
}
