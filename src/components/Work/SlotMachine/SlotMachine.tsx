import React from 'react';
import logo from './logo.svg';
import {useState} from "react";
import Accordion from 'react-bootstrap/Accordion';
import styles from "./SlotMachine.module.css";

let slotImages = [
    require("assets/SlotMachineImages/slot-cherry.png"),
    require("assets/SlotMachineImages/slot-lemon.png"),
    require("assets/SlotMachineImages/slot-melon.png"),
    require("assets/SlotMachineImages/slot-prune.png"),
    require("assets/SlotMachineImages/slot-seven.png")
]

interface SlotMachineProps {
    slots : number
}

interface SlotProps {
    value : number
}

const getRandomSlots = (numberOfSlots : number) => {
    let slots : number[] = [];
    for(let i=0;i<numberOfSlots;i++) {
        slots.push(Math.floor(Math.random() * 5));
    }
    return slots;
}

const Slot = ({value} : SlotProps) => {
    return (
        <img src={slotImages[value]} alt="slot" width="100" className={styles.slot}/>
    )
}

const SlotMachine = ({slots : amountOfSlots} : SlotMachineProps) => {
    const [slots, setSlots] = useState<number[]>(getRandomSlots(amountOfSlots));
    const [money, setMoney] = useState<number>(100);

    

    const isWinning = (slots : number[]) => {
        return slots.every((slot) => slot === slots[0]);
    }

    const pullLever = () => {
        let randomSlots: number[]= getRandomSlots(amountOfSlots)
        setSlots(randomSlots);
        if (isWinning(randomSlots)) {
            setMoney(money => money + 20)
        } else {
            setMoney(money => money - 1)
        }
    }

    return (
        <div>
            {money > 0 && <div>Money: €{money}</div>}

            {money === 0 && <div className={styles.loss}>You're out of money!</div>}

            <button className={styles.lever} onClick={pullLever} disabled={money > 0 ? false : true}>Pull Lever</button>
            {slots.map((slot, index) => <Slot value={slot} key={index}/>)}
        </div>
    )
}

const SlotMachineApp = () => {
    
    return (
        <Accordion>
            <Accordion.Item className={styles.accordion}  eventKey="2">
                <Accordion.Header as="h3">SlotMachine</Accordion.Header>
                <Accordion.Body>
                    <p>Just a small slot machine game for you. In case you don't want to go out and walk to the casino.</p>
                    <SlotMachine slots={3}/>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        
    )
}

export default SlotMachineApp;