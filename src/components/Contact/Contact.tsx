import React from 'react';
import logo from './logo.svg';
import styles from "./Contact.module.css"
import ContactForm from 'components/Contact/ContactForm/ContactForm';

const Contact = () => {
    return (
        <div className={styles.contactPageContainer}>
            <ContactForm/>
        </div>
    )
}

export default Contact;