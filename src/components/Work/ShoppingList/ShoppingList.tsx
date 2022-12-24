import React from 'react';
import {useState} from "react";
import logo from './logo.svg';
import styles from "./ShoppingList.module.css";

interface ShoppingListItem {
    name: string;
    quantity: number;
}

const ShoppingList = () => {
    const [shoppingList, setShoppingList] = useState<ShoppingListItem[]>([{
        name: "aardappelen",
        quantity: 5
    }]);

    const [name, setName] = useState<string>("");
    const [quantity, setQuantity] = useState<number>(0);

    const [succesMessage, setSuccesMessage] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const addShoppingItem = () => {
        if (quantity < 1) {
            setErrorMessage("Quantity should be above 1");
            setSuccesMessage("");
        } else {
            setShoppingList([...shoppingList, {name: name, quantity: quantity}]);
            setSuccesMessage("Item was added");
            setErrorMessage("");
        }        
    }

    const removeShoppingItem = (index : number) => {
        let shoppingListCopy = shoppingList.filter((item, i) => i !== index);
        setShoppingList(shoppingListCopy);
        setSuccesMessage("Item was removed from shopping list");
        setErrorMessage("");
    }


    return (
        <div>
            {errorMessage &&<div className={styles.error}>{errorMessage}</div>}
            {succesMessage &&<div className={styles.succes}>{succesMessage}</div>}

            <div className={styles.shoppingAddForm}>
                <label htmlFor="">Name:</label>
                <input type="text" placeholder="name" value={name} onChange={(event) => setName(event.target.value)}/>
                <label htmlFor="">Quantity:</label>
                <input type="number" placeholder="quantity" value={quantity} onChange={(event) => setQuantity(parseInt(event.target.value))}/>
            </div>
            <button onClick={addShoppingItem}>Add</button>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                   {
                    shoppingList.map((item, index) => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <button onClick={() => {
                                    removeShoppingItem(index)
                                }}>Remove</button>
                            </td>
                        </tr>
                    ))
                   }
                </tbody>
            </table>
        </div>
    )
}

const ShoppingListApp = () => {
    return (
        <div className={styles.shoppingListContainer}>
            <ShoppingList/>
        </div>
    )
}

export default ShoppingListApp;