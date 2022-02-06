import React from 'react';
import styles from "./DistanceJob.module.css"
import stylesContainer from "./../common/styles/Container.module.css"

const DistanceJob = () => {
    return (
        <div className={styles.block}>
            <div className={`${stylesContainer.container} ${styles.DJContainer}`}>
                <h2>Рассматриваю варианты удаленной работы</h2>
                <button className={styles.btn}>Нанять меня</button>
            </div>

        </div>
    );
};

export default DistanceJob;