import React from 'react';
import styles from "./skill.module.scss"
import ReactParallaxTilt from "react-parallax-tilt";

interface SkillPropsType {
    title: string
    description: string
    style: any
}

const Skill = (props: SkillPropsType) => {
    return (
        <ReactParallaxTilt>
            <div className={styles.skill}>
                <div className={styles.icon} style={props.style}></div>
                <h3>{props.title}</h3>
                <span className={styles.skillDescription}>
                {props.description}
            </span>
            </div>
        </ReactParallaxTilt>
    );
};

export default Skill;