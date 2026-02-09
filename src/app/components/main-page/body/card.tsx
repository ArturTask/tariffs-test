"use client";

import Tariff from "@/app/types/tariff";
import clsx from "clsx";

export default function Card({isSelected=false, isFavourite=false, isHorizontalFlow=true, tariff, discountFinished=false, discountPercentage=10}
    :{isSelected?:boolean, isFavourite?:boolean, isHorizontalFlow?:boolean, tariff:Tariff|undefined, discountFinished:boolean, discountPercentage:number}){

    return (
    <div id="cardComponent" className={clsx("relative flex items-center bg-(--color-card-background) border-2 border-(--color-card-border) rounded-4xl w-full h-full",
        {   "border-(--color-highlight-orange) border": isSelected,
            "flex-row justify-center items-start p-7 pt-10": isHorizontalFlow,
            "flex-col justify-items-start pt-15": !isHorizontalFlow,
        }
    )}>
        <div id="redDisconuntLabel" className={clsx('flex mt-0 top-0 left-7 w-14 h-10 bg-(--color-card-discount) absolute rounded-b-md items-center justify-center text-white')}>-{discountPercentage}%</div>
        <div id="HitText" className={clsx("flex-none top-2 right-2 w-14 h-10 text-(--color-highlight-orange) absolute text-center justify-center font-bold", {"hidden": !isFavourite})}><text>хит!</text></div>            
        
        <div id="periodAndPrices" className={clsx("flex flex-col gap-5", {"gap-8": !isHorizontalFlow})}>

            <div id="period" className="text-2xl text-center text-white">
                <text>{tariff?.period}</text>
            </div>

            <div id="prices" className="w-40">
                <div id="lowerPrice" className={clsx(
                    "text-right text-5xl font-extrabold break-keep",
                    {"hidden": discountFinished,
                        "text-(--color-highlight-orange)": isFavourite,
                        "text-white": !isFavourite,
                })}>
                    <text>{tariff?.price + " ₽"}</text>
                </div>

                <div id="fullPrice" className={clsx(
                    "text-right text-xl text-(--color-card-full-price)",
                    {   "line-through": !discountFinished,
                        "grow-text text-white": discountFinished
                    }
                )}>
                    {tariff?.full_price + " ₽"}
                </div>
            </div>
        </div>

        <div id="description" className="break-normal max-w-[204] p-5 text-white text-sm">
            <text>{tariff?.text}</text>
        </div>
    </div>
)
}