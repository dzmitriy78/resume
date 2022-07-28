import React from 'react';
import styles from "./Footer.module.scss"
import stylesContainer from "../common/styles/Container.module.scss";
import 'primeicons/primeicons.css';

export const gotoTelegram = () => {
    document.location = 'https://t.me/dzmitriy78'
}
const Footer = () => {

    const gotoGH = () => {
        document.location = 'https://github.com/dzmitriy78'
    }

    return (
        <div className={styles.footerBlock}>
            <div className={`${stylesContainer.container} ${styles.footerContainer}`}>
                <h1 className={styles.title}>Copyright © 2022 Dzmitry Karas</h1>
                <div className={styles.footer}>
                    <a className={"pi pi-phone"} title={"tel:+375293417955"} href={"tel:+375293417955"}></a>
                    <a className={"pi pi-google"} title={"dzmitriy1978@gmail.com"} href="mailto:dzmitriy1978@gmail.com"></a>
                    <span className={"pi pi-telegram"} title={"t.me/dzmitriy78"} onClick={gotoTelegram}></span>
                    <span className={"pi pi-github"} title={"Github"} onClick={gotoGH}></span>
                </div>
                <div className={styles.end}>All Rights Reserved.</div>
            </div>
        </div>
    );
};

export default Footer;