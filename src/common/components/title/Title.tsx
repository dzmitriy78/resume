import React from 'react';
import styles from "./Title.module.css"

interface TitlePropsType {
    title: string
}
const Title = (props: TitlePropsType) => {

    return (
                <div className={styles.title}>
                    <h2>{props.title}</h2>
                </div>
    );
};

export default Title;