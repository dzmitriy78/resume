import React from 'react';
import styles from "./MyJobs.module.css"
import stylesContainer from "../common/styles/Container.module.css";
import Jobs from "./Jobs/Jobs";
import Title from "../common/components/title/Title";
import project_2 from "../assets/icons/project-2.jpg";
import project_1 from "../assets/icons/project-1.jpg"

const MyJobs = () => {
    let descriptionSN = "Здесь будет описание работы по social network";
    let descriptionAJ = "Здесь будет описание работы по another job";
    let social = {
        backgroundImage: `url(${project_2})`
    }
    let another = {
        backgroundImage: `url(${project_1})`
    }

    return (
        <div className={styles.myJobsBlock}>
            <div className={`${stylesContainer.container} ${styles.myJobsContainer}`}>
                    <Title title ={"Projects"}/>
                <div className={styles.jobs}>
                    <Jobs title={"social network"}
                          description={descriptionSN}
                          style={social}/>
                    <Jobs title={"another job"}
                          description={descriptionAJ}
                          style={another}/>

                </div>
            </div>
        </div>
    );
};

export default MyJobs;