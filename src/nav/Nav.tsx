import React from 'react';
import style from "./Nav.module.scss";
import {NavLink} from "react-router-dom";

const Nav: React.FC = () => {

    const setActive = ({isActive}:{isActive: boolean}): string => isActive ? style.active: style.item

    return (
        <div className={style.nav}>
            <NavLink className={setActive} to= "/main" >Главная</NavLink>
            <NavLink className={setActive} to="/skills">Умения</NavLink>
            <NavLink className={setActive} to="/projects">Проекты</NavLink>
            <NavLink className={setActive} to="/distanceJob">Удаленная работа</NavLink>
            <NavLink className={setActive} to="/contacts">Контакты</NavLink>
        </div>
    );
};

export default Nav;