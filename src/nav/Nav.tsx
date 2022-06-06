import React from 'react';
import style from "./Nav.module.scss";
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <div className={style.nav}>
            <NavLink className={style.item} to="/" >Главная</NavLink>
            <NavLink className={style.item} to="/skills">Умения</NavLink>
            <NavLink className={style.item} to="/projects">Проекты</NavLink>
            <NavLink className={style.item} to="/distanceJob">Удаленная работа</NavLink>
            <NavLink className={style.item} to="/contacts">Контакты</NavLink>
        </div>
    );
};

export default Nav;