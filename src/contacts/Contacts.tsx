import React from 'react';
import styles from "./Contacts.module.css"
import stylesContainer from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";

const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${stylesContainer.container} ${styles.contactsContainer}`}>
                <Title title={"contacts"}/>
                <form className={styles.form}>
                    <input type={"text"} className={styles.input}/><br/>
                    <input type={"text"} className={styles.input}/><br/>
                    <textarea className={styles.textarea}/>
                    <button type={"submit"} className={styles.button}>Отправить</button>
                </form>

            </div>
        </div>
    );
};

export default Contacts;