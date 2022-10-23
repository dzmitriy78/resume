import React from 'react';
import styles from "../common/styles/Skills.module.scss";
import stylesContainer from "../common/styles/Container.module.scss"
import Skill from "./Skill";
import Title from "../common/components/Title";
import JSI from "../assets/icons/javascript.png";
import ReactI from "../assets/icons/react.png";
import TSI from "../assets/icons/typescript.png";
import ReduxI from "../assets/icons/redux.png";
import CSSI from "../assets/icons/css.png";
import HtmlI from "../assets/icons/html5.png";

const Zoom = require("react-reveal/Zoom");

const Skills = () => {
    let descriptionJS = "JS... Хлеб - всему голова"
    let descriptionCSS = "Красота спасет мир"
    let descriptionReact = "React - мой любимый фреймворк"
    let descriptionRedux = "Порядок - прежде всего. Стеллажи - по ранжиру"
    let descriptionHTML = "Основа основ. Grandfather"
    let descriptionTS = "Учитель и ревизор, помощник и контроллер"

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
    let HTMLIcon = {
        backgroundImage: `url(${HtmlI})`
    }
    let CSSIcon = {
        backgroundImage: `url(${CSSI})`
    }

    return (
        <div className={styles.skillsBlock}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <Zoom>
                    <Title title={"Skills"}/>
                    <div className={styles.skills}>
                        <Skill title={"Javascript"} description={descriptionJS} style={JSIcon}/>
                        <Skill title={"React"} description={descriptionReact} style={ReactIcon}/>
                        <Skill title={"Redux / Redux Toolkit"} description={descriptionRedux} style={ReduxIcon}/>
                        <Skill title={"HTML"} description={descriptionHTML} style={HTMLIcon}/>
                        <Skill title={"Typescript"} description={descriptionTS} style={TSIcon}/>
                        <Skill title={"CSS / SASS"} description={descriptionCSS} style={CSSIcon}/>
                    </div>
                </Zoom>
            </div>
        </div>
    );
};

export default Skills;