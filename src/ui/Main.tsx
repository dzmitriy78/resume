import React from 'react';
import style from "../common/styles/Main.module.scss";
import stylesContainer from "../common/styles/Container.module.scss";
import TsParticles from "../common/components/TsParticles";
import ReactTypingEffect from 'react-typing-effect';
import rootPhoto from "../assets/images/rootPhoto.jpg"
import ReactParallaxTilt from "react-parallax-tilt";
import Skills from "./Skills";
import MyJobs from "./MyJobs";
import DistanceJob from "./DistanceJob";
import Contacts from "./Contacts";
import Footer from "./Footer";

const Main: React.FC = () => {

    return (
        <div className={style.mainBlock}>
            <div className={style.particles}>
                <TsParticles/>
            </div>
            <div className={stylesContainer.container}>
                <div className={style.mainText}>
                    <h1>Hello,</h1>
                    <p className={style.title}>I am Dzmitry Karas</p>
                    <h1><ReactTypingEffect text={"Front-end developer"} speed={100}/></h1>
                </div>
                <ReactParallaxTilt>
                    <div className={style.mainPhoto}>
                        <img className={style.rootPhoto} src={rootPhoto} alt={"rootPhoto"}/>
                    </div>
                </ReactParallaxTilt>
            </div>
            <Skills/>
            <MyJobs/>
            <DistanceJob/>
            <Contacts/>
            <Footer/>
        </div>
    )
}

export default Main;