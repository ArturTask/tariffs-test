"use client";

import Tariff from "@/app/types/tariff";
import Header from "@/app/components/main-page/header/header";
import Footer from "@/app/components/main-page/footer/footer";
import Body from "./body/body";
import { useState } from "react";

export default function MainPage({tariffs=[]}:{tariffs:Tariff[]}){
    const [discountFinished, setDiscountFinished] = useState(false);
    const INITIAL_DISCOUNT_TIME_SECONDS = 120;

    return (
        <>
            <Header setDiscountFinished={setDiscountFinished} initialDiscountTimeSeconds={INITIAL_DISCOUNT_TIME_SECONDS}/>
                <Body tariffs={tariffs} discountFinished={discountFinished}/>
            <Footer/>
        </>
);
}

