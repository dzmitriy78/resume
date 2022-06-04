import React from 'react';
import styles from "./Contacts.module.scss"
import stylesContainer from "../common/styles/Container.module.scss";
import Title from "../common/components/title/Title";
import ContactsForm from "../common/components/form/ContactsForm"

const Contacts = () => {
    return <div className={styles.contactsBlock}>
            <div className={`${stylesContainer.container} ${styles.contactsContainer}`}>
                <Title title={"contacts"}/>
                <ContactsForm/>
            </div>
        </div>
}

export default Contacts;