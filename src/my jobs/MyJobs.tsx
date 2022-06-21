import React from 'react';
import styles from "./MyJobs.module.scss"
import stylesContainer from "../common/styles/Container.module.scss";
import Jobs from "./Jobs/Jobs";
import Title from "../common/components/title/Title";
import socialNetwork from "../assets/icons/project-2.jpg";
import project_1 from "../assets/icons/project-1.jpg"
// @ts-ignore
import Fade from 'react-reveal/Fade';

const MyJobs = () => {
    let descriptionSN = "Здесь будет описание работы по social network";
    let descriptionAJ = "Здесь будет описание работы по another job";
    let social = {
        backgroundImage: `url(${socialNetwork})`
    }
    let another = {
        backgroundImage: `url(${project_1})`
    }

    return (
        <div className={styles.myJobsBlock}>
            <Fade right big cascade>
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
                </Fade>
        </div>
    );
};

export default MyJobs;