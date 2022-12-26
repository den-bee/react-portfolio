import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from "./Interval.module.css";
import Accordion from 'react-bootstrap/Accordion';
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

const IntervalApp = () => {
  return (
    <Accordion>
      <Accordion.Item className={styles.accordion}  eventKey="3">
        <Accordion.Header as="h3">Interval</Accordion.Header>
          <Accordion.Body>
            <p>This amazing app gives you a random value between 0 - 100 AND between 100 - 200. And it even does this EVERY SECOND!</p>
            <Interval/>
          </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default IntervalApp;
