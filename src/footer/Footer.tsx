import React from 'react';
import styles from "./Footer.module.css"
import stylesContainer from "../common/styles/Container.module.css";

const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={`${stylesContainer.container} ${styles.footerContainer}`}>
                <h1 className={styles.title}>Дмитрий Карась</h1>
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
                <div className={styles.end}>2022 Все права защищены</div>
            </div>
        </div>
    );
};

export default Footer;