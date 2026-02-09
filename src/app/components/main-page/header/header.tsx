"use client";

import useTimer from "@/app/hooks/use-timer";
import clsx from 'clsx'
import { Dispatch, SetStateAction, useEffect } from "react";

export default function Header({setDiscountFinished, initialDiscountTimeSeconds=120}:{setDiscountFinished: Dispatch<SetStateAction<boolean>>, initialDiscountTimeSeconds:number }) {
    const seconds = useTimer(initialDiscountTimeSeconds);
    useEffect(()=>{
        if(seconds===0) {setDiscountFinished(true);}
    }, [seconds]);

    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    
    
    return (
        <div className={`bg-(--color-timer-background) flex flex-col items-center p-2 w-full`}>
            <div className={"text-base sm:text-2xl font-bold text-white"}>
                Успейте открыть пробную неделю
            </div>
            <div className='justify-center font-bold text-4xl text-center'>
                <div className={clsx({
                        'text-(--color-timer-numbers)': seconds >= 30,
                        'text-(--color-highlight-red) checkbox-error-animation': seconds > 0 && seconds < 30,
                        'text-white': seconds === 0
                    }
                )}>{min}:{sec}</div>
            </div>
        </div>
    );
}