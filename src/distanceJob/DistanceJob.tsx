import React from 'react';
import styles from "./DistanceJob.module.scss"
import stylesContainer from "../common/styles/Container.module.scss"
// @ts-ignore
import Fade from 'react-reveal/Fade';

const DistanceJob = () => {
    return (
        <div className={styles.block}>
            <Fade right big>
            <div className={`${stylesContainer.container} ${styles.DJContainer}`}>
                <h2 className={styles.title}>Рассматриваю варианты удаленной работы</h2>
                <button className={styles.btn}>Нанять меня</button>
            </div>
                </Fade>
        </div>
    );
};

export default DistanceJob;