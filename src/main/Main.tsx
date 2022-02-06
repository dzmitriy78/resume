import React from 'react';
import style from "./Main.module.css";
import stylesContainer from "./../common/styles/Container.module.css"

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={stylesContainer.container}>
                <div className={style.mainText}>
                    <span>Hi,</span>
                    <h1>I am Dzmitry Karas</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.mainPhoto}>
                </div>
            </div>
        </div>
    );
};

export default Main;