import React from 'react';
import styles from "./DistanceJob.module.scss"
import stylesContainer from "../common/styles/Container.module.scss"
import ReactTypingEffect from 'react-typing-effect';
import {gotoTelegram} from "../footer/Footer";

const Fade = require("react-reveal/Fade")

const DistanceJob: React.FC = () => {
    return (
        <div className={styles.block}>
            <Fade right big>
                <div className={`${stylesContainer.container} ${styles.DJContainer}`}>
                    <h2 className={styles.title}>
                        <ReactTypingEffect text={"Рассматриваю варианты удаленной работы"}
                                           speed={100}
                                           eraseSpeed={50}/>
                    </h2>
                    <button className={styles.btn} onClick={gotoTelegram}>Нанять меня</button>
                </div>
            </Fade>
        </div>
    );
};

export default DistanceJob;