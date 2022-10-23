import React from 'react';
import './App.scss';
import Skills from "./skills/Skills";
import MyJobs from "./my jobs/MyJobs";
import DistanceJob from "./distanceJob/DistanceJob";
import Contacts from "./contacts/Contacts";
import {Route, Routes} from "react-router-dom";
import {Layout} from "./common/components/Layout";
import Main from "./main/Main";

const App: React.FC = () => {
    return (
        <div className="App">

            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="main" element={<Main/>}/>
                    <Route path="skills" element={<Skills/>}/>
                    <Route path="projects" element={<MyJobs/>}/>
                    <Route path="distanceJob" element={<DistanceJob/>}/>
                    <Route path="contacts" element={<Contacts/>}/>
                    <Route path="*" element={
                        <div style={{fontSize: 100, color: "$bgColor1"}}>
                            Упс! Страница не найдена!
                        </div>
                    }/>
                </Route>
            </Routes>
        </div>
    )
}

export default App;
