import React from 'react';
import styles from "./Footer.module.scss"
import stylesContainer from "../common/styles/Container.module.scss";

const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={`${stylesContainer.container} ${styles.footerContainer}`}>
                <h1 className={styles.title}>Copyright © 2022 Dzmitry Karas</h1>
                <div className={styles.footer}>
                    <span className={styles.var1}>1</span>
                    <span className={styles.var2}>2</span>
                    <span className={styles.var1}>3</span>
                    <span className={styles.var2}>4</span>
                    <span className={styles.var1}>5</span>
                    <span className={styles.var2}>6</span>
                    <span className={styles.var1}>7</span>
                    <span className={styles.var2}>8</span>
                </div>
                <div className={styles.end}>All Rights Reserved.</div>
            </div>
        </div>
    );
};

export default Footer;