import React, { useState } from 'react';
import logo from './logo.svg';
import Accordion from 'react-bootstrap/Accordion';
import styles from "./Filtering.module.css";


interface Student {
  name: string;
  age: number;
  year: number
}

const Filtering = () => {

  const [searchText, setSearchText] = useState("");
  const [sort, setSort] = useState("name");

  const students : Student[] = [
    {name: "Jan", age: 20, year: 1},
    {name: "Joris", age: 22, year: 1},
    {name: "Denis", age: 23, year: 2},
  ];

  students.sort((a, b) => {
    if (sort === "name") {
      return a.name.localeCompare(b.name);
    } else if (sort === "age") {
      return a.age - b.age;
    } else if (sort === "year") {
      return a.year - b.year;
    }
    return 0;
  });

  return (
    <div className={styles.filteringContainer}>
      <div>
        <label>Search:  
          <input type="text" value={searchText} onChange={(event) => setSearchText(event.target.value)}/>
        </label>
      </div>

      <table>
        <thead>
          <tr>
            <th style={{fontWeight: sort === "name" ? "bold" : "normal"}} onClick={() => setSort("name")}>Name</th>
            <th style={{fontWeight: sort === "age" ? "bold" : "normal"}} onClick={() => setSort("age")}>Age</th>
            <th style={{fontWeight: sort === "year" ? "bold" : "normal"}} onClick={() => setSort("year")}>Year</th>
          </tr>
        </thead>
        <tbody>
          {
            students.filter(student => student.name.toUpperCase().startsWith(searchText.toUpperCase())).map(student => (
              <tr>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.year}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

const FilteringApp = () => {
  return (
    <Accordion>
      <Accordion.Item className={styles.accordion}  eventKey="4">
        <Accordion.Header as="h3">Filtering</Accordion.Header>
          <Accordion.Body>
            <p>This app shows you a list with names and other info. You can even filter a name in the list by typing it in the searchbar!</p>
            <Filtering/>
          </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default FilteringApp;