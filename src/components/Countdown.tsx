"use client";

import React, { useEffect, useState } from "react";
import { Badge } from "./ui/badge";

const Countdown: React.FC = () => { 
    const targetDate= new Date("2023-12-18T00:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());

    useEffect(() => {
        const interval = setInterval(() => {
            const now = Date.now();
            const timeRemaining = targetDate - now;

            if (timeRemaining < 0) {
                clearInterval(interval);
                setTimeLeft(0);
            } else {
                setTimeLeft(timeRemaining);
            }
        
    }, 1000);

    return () => clearInterval(interval);

}, []);

const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
     <Badge className="bg-slate-900 text-white px-2 py-1">{days}d {hours}h {minutes}m {seconds}s Until Beta</Badge>
  )
}

export default Countdown;