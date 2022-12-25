import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from "./Interval.module.css";
import logo from './logo.svg';

interface TimerProps {
  interval : number;
}

const Timer = ({interval} : TimerProps) => {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    let handle = setInterval(() => {
      setNumber(number => number + 1);
    }, interval);

    return () => {
      clearInterval(handle);
    }
  }, [interval])

  return <p>{number}</p>
}


const CurrentTime = ({interval} : TimerProps) => {
  let date = new Date();
  let today = date.getTime();
  const [time, setTime] = useState(today);
  useEffect(() => {
    let handle = setInterval(() => {
      setTime(time => time + 1);
    }, interval);

    return () => {
      clearInterval(handle);
    }
  }, [interval]);

  return (
    <p>Current Time: {time}</p>
  )
}


interface RandomValueProps {
  min : number,
  max : number
}

const RandomValue = ({min, max} : RandomValueProps) => {
  let interval = 1000;
  const [randomNumber, setRandomNumber] = useState(0);
  useEffect(() => {
    let handle = setInterval(() => {
      setRandomNumber(Math.floor(Math.random() * max + 1));
    }, interval);

    return () => {
      clearInterval(handle);
    }
  }, [interval])
  
  return <p>Random value between {min} and {max}: {randomNumber}</p>
}

function Interval() {
  return (
    <div className={styles.intervalContainer}>
      <Timer interval={1000}/>
      <RandomValue min={0} max={100}/>
      <RandomValue min={100} max={200}/>
    </div>
  );
}

export default Interval;
