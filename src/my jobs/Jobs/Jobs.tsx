import React from 'react';
import styles from "./Jobs.module.scss";

interface JobsPropsType {
    title: string
    description: string
    style:  any
}

const Jobs = (props: JobsPropsType) => {
    return (
        <div className={styles.job}>
            <div className={styles.icon} style={props.style}>
                <button className={styles.button}>Смотреть</button>
            </div>
            <h3 className={styles.jobsTitle}>{props.title}</h3>
            <span className={styles.jobDescription}>
                {props.description}
            </span>
        </div>
    );
};

export default Jobs;