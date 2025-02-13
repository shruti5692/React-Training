import React from 'react'
import { useState, useEffect } from 'react';

const TimerComponent = () => {
    const[seconds,setSeconds]= useState(0);
    useEffect(() => {
        const intervalID = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds+1);
        },1000);

        return() => {
            clearInterval(intervalId);
        };
    },[]);
  return (
    <div>
        <h1>Seconds: {seconds}</h1>
    </div>
  )
}

export default TimerComponent