import React from 'react';
import style from "./Nav.module.css";

const Nav = () => {
    return (
        <div className={style.nav}>
            <a className={style.item} href="">Главная</a>
            <a className={style.item} href="">Скиллы</a>
            <a className={style.item} href="">Проекты</a>
            <a className={style.item} href="">Контакты</a>
        </div>
    );
};

export default Nav;