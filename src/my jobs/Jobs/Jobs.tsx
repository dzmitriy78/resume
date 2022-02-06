import React from 'react';
import styles from "./Jobs.module.css"

interface JobsPropsType {
    title: string
    description: string
}

const Jobs = (props: JobsPropsType) => {
    return (
        <div className={styles.job}>
            <div className={styles.icon}>
                <img src={""} alt={"Картинка"}/>
                <button className={styles.button}>Смотреть</button>
            </div>
            <h3>{props.title}</h3>
            <span className={styles.jobDescription}>
                {props.description}
            </span>
        </div>
    );
};

export default Jobs;