import React from 'react';
import styles from "./Title.module.scss"

interface TitlePropsType {
    title: string
}
const Title: React.FC<TitlePropsType> = ({title}) => {

    return (
                <div className={styles.title}>
                    <h2>{title}</h2>
                </div>
    )
}

export default Title;