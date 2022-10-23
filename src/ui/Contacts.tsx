import React from 'react';
import styles from "../common/styles/Contacts.module.scss"
import stylesContainer from "../common/styles/Container.module.scss";
import Title from "../common/components/Title";
import ContactsForm from "../common/components/ContactsForm"

const Contacts: React.FC = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${stylesContainer.container} ${styles.contactsContainer}`}>
                <Title title={"contacts"}/>
                <div className={styles.description}>
                    Свяжитесь со мной по электронной почте
                </div>
                <ContactsForm/>
            </div>
        </div>
    )
}

export default Contacts;