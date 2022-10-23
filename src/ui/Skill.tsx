import React from 'react';
import styles from "../common/styles/skill.module.scss"
import ReactParallaxTilt from "react-parallax-tilt";

interface SkillPropsType {
    title: string
    description: string
    style: { backgroundImage: string }
}

const Skill: React.FC<SkillPropsType> = ({title, description, style}) => {
    return (
        <ReactParallaxTilt>
            <div className={styles.skill}>
                <div className={styles.icon} style={style}></div>
                <h3>{title}</h3>
                <span className={styles.skillDescription}>
                {description}
            </span>
            </div>
        </ReactParallaxTilt>
    )
}

export default Skill;