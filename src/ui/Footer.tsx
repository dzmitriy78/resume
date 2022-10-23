import React from 'react';
import styles from "../common/styles/Footer.module.scss"
import stylesContainer from "../common/styles/Container.module.scss";
import 'primeicons/primeicons.css';

export const gotoTelegram = () => {
    document.location = 'https://t.me/dzmitriy78'
}
const Footer: React.FC = () => {

    const gotoGH = () => {
        document.location = 'https://github.com/dzmitriy78'
    }

    return (
        <div className={styles.footerBlock}>
            <div className={`${stylesContainer.container} ${styles.footerContainer}`}>
                <h1 className={styles.title}>Copyright © 2022 Dzmitry Karas</h1>
                <div className={styles.footer}>
                    <span className={"pi pi-phone"} title={"tel:+375293417955"}></span>
                    <span className={"pi pi-google"} title={"dzmitriy1978@gmail.com"}></span>
                    <a className={"pi pi-telegram"} title={"telegram"} onClick={gotoTelegram}></a>
                    <a className={"pi pi-github"} title={"Github"} onClick={gotoGH}></a>
                </div>
                <div className={styles.end}>All Rights Reserved.</div>
            </div>
        </div>
    );
};

export default Footer;