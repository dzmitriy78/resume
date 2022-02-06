import React from 'react';
import styles from "./MyJobs.module.css"
import stylesContainer from "../common/styles/Container.module.css";
import Jobs from "./Jobs/Jobs";

const MyJobs = () => {
    let descriptionSN = "Здесь будет описание работы по social network";
    let descriptionAJ = "Здесь будет описание работы по another job";
    return (
        <div className={styles.myJobsBlock}>
            <div className={`${stylesContainer.container} ${styles.myJobsContainer}`}>
                <h2 className={styles.title}>Jobs</h2>
                <div className={styles.jobs}>
                    <Jobs title={"social network"} description={descriptionSN}/>
                    <Jobs title={"another job"} description={descriptionAJ}/>

                </div>
            </div>
        </div>
    );
};

export default MyJobs;