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
            title="Past IPO Performance"
            para="Set up personalized alerts to notify you when significant changes occur in your portfolio. Whether it's a price drop, rise, or market shift, stay on top of your investments and act swiftly to capitalize on opportunities."
          />

          <div className=" mx-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="">Name</TableHead>
                  <TableHead className="">Unlisted share price</TableHead>
                  <TableHead className="">IPO Price</TableHead>
                  <TableHead className="">CMP</TableHead>
                  <TableHead className="text-right">Gain or Loss</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {popularUnlistedShares.map((item, ind) => (
                  <TableRow key={ind}>
                    <TableCell className="font-medium">{item.title}</TableCell>
                    <TableCell className="font-medium">{`${rupee.format(Math.floor(Math.random() * 500))} - ${rupee.format(Math.floor(Math.random() * 1000))}`}</TableCell>
                    <TableCell className="font-medium">{`${rupee.format(Math.floor(Math.random() * 500))}`}</TableCell>
                    <TableCell className="font-medium">{`${rupee.format(Math.floor(Math.random() * 500))}`}</TableCell>
                    <TableCell className="text-right">
                      <div className={cn("flex flex-col items-end gap-1")}>
                        <span className={cn("text-sm font-semibold bg-red-100 text-red-500 px-2 py-0.5 rounded-full", { "bg-green-100 text-green-500": item.isUp })}>
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
