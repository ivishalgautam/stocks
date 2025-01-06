import Image from "next/image";
import React from "react";
import { Muted } from "../typography";
import { rupee } from "@/hooks/Intl";
import { TrendingDown, TrendingUp } from "lucide-react";
import Balancer from "react-wrap-balancer";
import { cn } from "@/lib/utils";

export default function StockCard({ stock }) {
  return (
    <div className="flex gap-4 bg-white justify-start">
      <figure className="size-20 flex-grow-0">
        <Image
          width={100}
          height={100}
          src={stock.icon}
          alt="stock"
          className="w-full h-full object-contain mix-blend-normal"
        />
      </figure>
      <div className="">
        <h2 className="text-sm font-semibold">{stock.title}</h2>
        <div className="flex items-center gap-2 text-xs mb-2 mt-1">
          <span className="text-primary-300">{rupee.format(stock.price)}</span>
          <span
            className={cn("flex items-center gap-1 text-red-500", {
              "text-green-500": stock.isUp,
            })}
          >
            {stock.isUp ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
            <span>{stock.status}</span>
          </span>
        </div>
        {/* <Muted className={"font-normal"}>
          <Balancer>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
            animi iusto totam.
          </Balancer>
        </Muted> */}
      </div>
    </div>
  );
}
