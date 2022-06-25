import React from 'react';
import {loadFull} from "tsparticles";
import {Particles} from "react-tsparticles";

const TsParticles = () => {

    const particlesInit = async (main: any) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const options: any = {
        particles: {
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            links: {
                distance: 150,
                enable: true,
                opacity: 0.5,
            },
            move: {
                enable: true,
                speed: 2,
            }
        }
    }

    return (
        <div>
            <Particles style={{ opacity:  0.3, position: "absolute"}}
                       init={particlesInit}
                       options={options}/>
        </div>
    );
};

export default TsParticles;