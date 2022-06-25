import React from 'react';
import style from "./Main.module.scss";
import stylesContainer from "../common/styles/Container.module.scss";
import TsParticles from "../common/components/TsParticles";
import ReactTypingEffect from 'react-typing-effect';


const Main = () => {

    return (
        <div className={style.mainBlock}>
            <TsParticles/>
            <div className={stylesContainer.container}>
                <div className={style.mainText}>
                    <h4>Hello,</h4>
                    <h1 className={style.root}>I'm Dzmitry Karas</h1>
                    <h4><ReactTypingEffect text={"Frontend Developer"}/></h4>
                </div>
                <div className={style.mainPhoto}>
                </div>
            </div>
        </div>
    );
};

export default Main;