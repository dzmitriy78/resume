import React from 'react';
import styles from "./Skills.module.scss";
import stylesContainer from "../common/styles/Container.module.scss"
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import JSI from "../assets/icons/javascript.png";
import ReactI from "../assets/icons/react.png";
import TSI from "../assets/icons/typescript.png";
import ReduxI from "../assets/icons/redux.png";
import CSSI from "../assets/icons/css.png";


const Skills = () => {
    let descriptionJS = "Здесь будет описание скилла по JS";
    let descriptionCSS = "Здесь будет описание скилла по CSS";
    let descriptionReact = "Здесь будет описание скилла по React";
    let descriptionRedux = "Здесь будет описание скилла по Redux";
    let descriptionTS = "Здесь будет описание скилла по TS";

    let JSIcon = {
        backgroundImage: `url(${JSI})`
    }
    let ReactIcon = {
        backgroundImage: `url(${ReactI})`
    }
    let TSIcon = {
        backgroundImage: `url(${TSI})`
    }
    let ReduxIcon = {
        backgroundImage: `url(${ReduxI})`
    }
    let CSSIcon = {
        backgroundImage: `url(${CSSI})`
    }


    return (
        <div className={styles.skillsBlock}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <Title title ={"Skills"}/>
                <div className={styles.skills}>
                    <Skill title={"Javascript"}  description={descriptionJS} style = {JSIcon}/>
                    <Skill title={"React"} description={descriptionReact} style = {ReactIcon}/>
                    <Skill title={"Redux"} description={descriptionRedux} style = {ReduxIcon}/>
                    <Skill title={"Typescript"} description={descriptionTS} style = {TSIcon}/>
                    <Skill title={"CSS"} description={descriptionCSS} style = {CSSIcon}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;