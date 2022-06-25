import React from 'react';
import style from "./Main.module.scss";
import stylesContainer from "../common/styles/Container.module.scss";
import TsParticles from "../common/components/TsParticles";


const Main = () => {

    return (
        <div className={style.mainBlock}>
            <TsParticles/>
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