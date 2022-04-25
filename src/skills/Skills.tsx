import React from 'react';
import styles from "./Skills.module.css";
import stylesContainer from "./../common/styles/Container.module.css"
import Skill from "./skill/Skill";

const Skills = () => {
    let descriptionJS = "Здесь будет описание скилла по JS";
    let descriptionCSS = "Здесь будет описание скилла по CSS";
    let descriptionReact = "Здесь будет описание скилла по React";
    return (
        <div className={styles.skillsBlock}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skills}>
                    <Skill title={"JS"} description={descriptionJS}/>
                    <Skill title={"React"} description={descriptionReact}/>
                    <Skill title={"CSS"} description={descriptionCSS}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;