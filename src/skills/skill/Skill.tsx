import React from 'react';
import styles from "./skill.module.css"

interface SkillPropsType {
    title: string
    description: string
}

const Skill = (props: SkillPropsType) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}> </div>
            <h3>{props.title}</h3>
            <span className={styles.skillDescription}>
                {props.description}
            </span>
        </div>
    );
};

export default Skill;