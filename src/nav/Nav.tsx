import React from 'react';
import style from "./Nav.module.scss";
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <div className={style.nav}>
            <NavLink className={({isActive}) => isActive ? style.active: style.item} to="/" >Главная</NavLink>
            <NavLink className={({isActive}) => isActive ? style.active: style.item} to="/skills">Умения</NavLink>
            <NavLink className={({isActive}) => isActive ? style.active: style.item} to="/projects">Проекты</NavLink>
            <NavLink className={({isActive}) => isActive ? style.active: style.item} to="/distanceJob">Удаленная работа</NavLink>
            <NavLink className={({isActive}) => isActive ? style.active: style.item} to="/contacts">Контакты</NavLink>
        </div>
    );
};

export default Nav;