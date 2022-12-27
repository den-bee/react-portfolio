import React from 'react';
import logo from './logo.svg';
import styles from "./Contact.module.css"
import ContactForm from 'components/Contact/ContactForm/ContactForm';

const Contact = () => {
    return (
        <div className={styles.contactPageContainer}>
            <div className={styles.textContainer}>
                <p>Any questions? Contact me! <br /> Or just send me a funny joke, whatever you want!</p>
            </div>
            
            <ContactForm/>
        </div>
    )
}

export default Contact;