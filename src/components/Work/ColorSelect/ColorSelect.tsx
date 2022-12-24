import React, { useState } from 'react';
import logo from './logo.svg';
import styles from "./ColorSelect.module.css";

const ColorSelect = () => {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [shownColors, setShownColors] = useState<string[]>([]);
  
  const onChange : React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    let selectedOptions : string[] = [];
    for (let option of Array.from(event.target.selectedOptions)) {
        selectedOptions.push(option.value);
    }
    setSelectedColors(selectedOptions);
  }
  
  return (
    <div className={styles.colorSelectContainer}>
      <select multiple value={selectedColors} onChange={onChange}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="orange">Orange</option>
        <option value="purple">Purple</option>
        <option value="black">Black</option>
        <option value="white">White</option>
      </select>
  
      <button onClick={() => {setShownColors([...selectedColors])}}>Show colors</button>
  
      <div className={styles.colorContainer}>
        {shownColors.map((color) => (<div style={{backgroundColor: color, width: 100, height: 100}}/>))}
      </div>
    </div>
  );
};
  
export default ColorSelect;
  