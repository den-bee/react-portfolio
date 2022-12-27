import React from 'react';
import logo from './logo.svg';
import {useState} from "react";
import emailjs from '@emailjs/browser';
import styles from "./ContactForm.module.css"

const ContactForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [confirmationText, setConfirmationText] = useState("");

    const isValid = () => {
        return firstName.length > 0 && lastName.length > 0 && email.length > 0 && message.length > 0;
    }

    const sendEmail = async () => {
        emailjs.sendForm("service_okhd8fl", "template_hwgsqiw", "#contactForm", "Eq1WXrZdf0j4lts1V")
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
            }, (error) => {
                console.log("FAILED...", error);
            });
    }

    const handleSubmit : React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        sendEmail();
        setConfirmationText(`Thanks ${firstName} ${lastName}! We will contact you at ${email}`);
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
    }

    return (
        <div className={styles.contactFormContainer}>
            <form id="contactForm" className={styles.contactForm} onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name: </label>
                <input 
                    name="firstName" 
                    type="text" 
                    value={firstName} 
                    onChange={(event) => setFirstName(event.target.value)}
                />
                <label htmlFor="lastName">Last Name: </label>
                <input 
                    name="lastName" 
                    type="text" 
                    value={lastName} 
                    onChange={(event) => setLastName(event.target.value)}
                />
                <label htmlFor="email">Email: </label>
                <input 
                    name="email" 
                    type="email" 
                    value={email} 
                    onChange={(event) => setEmail(event.target.value)}
                />
                <label htmlFor="message">Message: </label>
                <textarea 
                    name="message" 
                    value={message} 
                    onChange={(event) => setMessage(event.target.value)}>
                </textarea>
                <button type="submit" disabled={!isValid()}>Send</button>
                {confirmationText &&
                <div className={styles.confirmation}>
                    {confirmationText}
                </div>}
            </form>
        </div>
    )
}

export default ContactForm;