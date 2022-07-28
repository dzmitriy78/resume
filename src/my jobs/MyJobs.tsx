import React from 'react';
import styles from "./MyJobs.module.scss"
import stylesContainer from "../common/styles/Container.module.scss";
import Jobs from "./Jobs/Jobs";
import Title from "../common/components/title/Title";
import socialNetwork from "../assets/icons/project-2.jpg";
import project_1 from "../assets/icons/project-1.jpg";
import project_2 from "../assets/icons/project-3.jpg"

const Fade = require("react-reveal/Fade");

const MyJobs = () => {
    let descriptionSNJS = "Социальная сеть на JavaScript"
    let descriptionSNTS = "Социальная сеть на TypeScript";
    let descriptionAJ = "Здесь будет описание работы по another job";
    let socialOnJS = {
        backgroundImage: `url(${socialNetwork})`
    }
    let socialOnTS = {
        backgroundImage: `url(${project_2})`
    }
    let another = {
        backgroundImage: `url(${project_1})`
    }

    const gotoSocialOnJs = () => {
        document.location = 'https://dzmitriy78.github.io/social-js'
    }
    const refToSocialJS = "https://github.com/dzmitriy78/social-js"

    const gotoSocialOnTs = () => {
        document.location = 'https://dzmitriy78.github.io/social-network-ts'
    }
    const refToSocialTS = "https://github.com/dzmitriy78/social-network-ts"
    const gotoAnother = () => {

    }
    const refToAnother = ""


    return (
        <div className={styles.myJobsBlock}>
            <Fade right big cascade>
                <div className={`${stylesContainer.container} ${styles.myJobsContainer}`}>
                    <Title title={"Projects"}/>
                    <div className={styles.jobs}>
                        <Jobs title={"social network on JS"}
                              description={descriptionSNJS}
                              style={socialOnJS}
                              button={gotoSocialOnJs}
                              referral={refToSocialJS}/>
                        <Jobs title={"social network on TS"}
                              description={descriptionSNTS}
                              style={socialOnTS}
                              button={gotoSocialOnTs}
                              referral={refToSocialTS}/>
                        <Jobs title={"another job"}
                              description={descriptionAJ}
                              style={another}
                              button={gotoAnother}
                              referral={refToAnother}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default MyJobs;