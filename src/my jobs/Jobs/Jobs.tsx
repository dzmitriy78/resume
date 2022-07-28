import React from 'react';
import styles from "./Jobs.module.scss";

interface JobsPropsType {
    title: string
    description: string
    style:  any
}

const Jobs = (props: JobsPropsType) => {

    const gotoSocial = ()=>{
        document.location='https://dzmitriy78.github.io/social-js'
    }

    return (
        <div className={styles.job}>
            <div className={styles.icon} style={props.style}>
                <button className={styles.button} onClick={gotoSocial}>Смотреть</button>
            </div>
            <h3 className={styles.jobsTitle}>{props.title}</h3>
            <span className={styles.jobDescription}>
                {props.description}
            </span>
        </div>
    );
};

export default Jobs;