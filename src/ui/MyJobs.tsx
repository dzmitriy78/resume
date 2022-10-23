import React from 'react';
import styles from "../common/styles/MyJobs.module.scss"
import stylesContainer from "../common/styles/Container.module.scss";
import Jobs from "./Jobs";
import Title from "../common/components/Title";
import socialNetwork from "../assets/icons/project-2.jpg";
import project_1 from "../assets/icons/project-1.jpg";
import project_2 from "../assets/icons/project-3.jpg"

const Fade = require("react-reveal/Fade");

const MyJobs: React.FC = () => {
    let descriptionSNJS = "Социальная сеть на JavaScript"
    let descriptionSNTS = "Социальная сеть на TypeScript";
    let descriptionCards = "Программа обучения по карточкам";
    let socialOnJS = {
        backgroundImage: `url(${socialNetwork})`
    }
    let socialOnTS = {
        backgroundImage: `url(${project_2})`
    }
    let cards = {
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
    const gotoCards = () => {
        document.location = "https://dzmitriy78.github.io/cards_RTK"
    }
    const refToCards = "https://github.com/dzmitriy78/cards_RTK"


    return (
        <div className={styles.myJobsBlock}>
            <Fade right big cascade>
                <div className={`${stylesContainer.container} ${styles.myJobsContainer}`}>
                    <Title title={"Projects"}/>
                    <div className={styles.jobs}>

                        <Jobs title={"social network on TS"}
                              description={descriptionSNTS}
                              style={socialOnTS}
                              button={gotoSocialOnTs}
                              referral={refToSocialTS}/>
                        <Jobs title={"card learning"}
                              description={descriptionCards}
                              style={cards}
                              button={gotoCards}
                              referral={refToCards}/>
                        <Jobs title={"social network on JS"}
                              description={descriptionSNJS}
                              style={socialOnJS}
                              button={gotoSocialOnJs}
                              referral={refToSocialJS}/>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default MyJobs;