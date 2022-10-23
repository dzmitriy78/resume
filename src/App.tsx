import React from 'react';
import './common/styles/App.scss';
import Skills from "./ui/Skills";
import MyJobs from "./ui/MyJobs";
import DistanceJob from "./ui/DistanceJob";
import Contacts from "./ui/Contacts";
import {Navigate, Route, Routes} from "react-router-dom";
import {Layout} from "./common/components/Layout";
import Main from "./ui/Main";

const App: React.FC = () => {
    return (
        <div className="App">

            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Navigate to={"main"}/>}/>
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
