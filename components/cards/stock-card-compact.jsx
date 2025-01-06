import Image from "next/image";
import React from "react";
import { rupee } from "@/hooks/Intl";
import { TrendingDown, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function StockCardCompact({ stock }) {
  return (
    <div className="flex gap-4 bg-white p-4 rounded-2xl border-gray-100 items-center border-2">
      <figure className="size-10 flex-grow-0">
        <Image
          width={50}
          height={50}
          src={stock.icon}
          alt="stock"
          className="w-full object-cover"
        />
      </figure>
      <div className="">
        <h2 className="text-sm font-semibold">{stock.title}</h2>
        <div className="flex items-center gap-2 text-xs mb-2 mt-1">
          <span className="text-primary-300">{stock.price}</span>
          <span
            className={cn("flex items-center gap-1 text-green-500", {
              "text-red-500": !stock.isUp,
            })}
          >
            {stock.isUp ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
            <span>{Math.floor(Math.random() * 50)}%</span>
          </span>
        </div>
      </div>
    </div>
  );
}
