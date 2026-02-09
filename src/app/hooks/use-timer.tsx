"use client";

import {useEffect, useState} from "react";


export default function useTimer(initialSeconds: number): number {
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        if(seconds === 0) {
            return;
        }

        const timeoutId = setTimeout(() => {
            setSeconds(seconds => seconds - 1);
        }, 1000);

        return () => clearTimeout(timeoutId);

    }, [seconds]);

    return seconds;
};