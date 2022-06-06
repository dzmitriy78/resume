import React from 'react';
import './App.scss';
import Skills from "./skills/Skills";
import MyJobs from "./my jobs/MyJobs";
import DistanceJob from "./distanceJob/DistanceJob";
import Contacts from "./contacts/Contacts";
import {Route, Routes} from "react-router-dom";
import HomePage from "./common/components/HomePage";
import {Layout} from "./common/components/Layout";

function App() {
    return (
        <div className="App">

            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
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
    );
}

export default App;
