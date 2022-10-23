import React from 'react';
import styles from "../common/styles/Jobs.module.scss";

interface JobsPropsType {
    title: string
    description: string
    style: { backgroundImage: string }
    button: () => void
    referral: string
}

const Jobs = (props: JobsPropsType) => {

    return (
        <div className={styles.job}>
            <div className={styles.icon} style={props.style}>
                <button className={styles.button} onClick={props.button}>Смотреть</button>
            </div>
            <h3 className={styles.jobsTitle}>{props.title}</h3>
            <span className={styles.jobDescription}>
                {props.description}
                <p>Код <a href={props.referral}>здесь</a></p>
            </span>
        </div>
    );
};

export default Jobs;