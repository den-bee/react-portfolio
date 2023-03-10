import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
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

const ColorSelectApp = () => {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0" className={styles.accordion}>
        <Accordion.Header as="h3">ColorSelect</Accordion.Header>
          <Accordion.Body>
            <p>Ever wanted to make a color appear on screen? Well now you can! Just pick a color. Go ahead, try it out!</p>
            <ColorSelect/>
          </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
  
}
  
export default ColorSelectApp;
  