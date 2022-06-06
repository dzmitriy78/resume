import React from 'react';
import Main from "../../main/Main";
import Skills from "../../skills/Skills";
import MyJobs from "../../my jobs/MyJobs";
import DistanceJob from "../../distanceJob/DistanceJob";
import Contacts from "../../contacts/Contacts";

const HomePage = () => {
    return (
        <div>
            <Main/>
            <Skills/>
            <MyJobs/>
            <DistanceJob/>
            <Contacts/>
        </div>
    );
};

export default HomePage;