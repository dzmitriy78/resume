import React from 'react';
import style from "../common/styles/Header.module.scss";
import Nav from "./Nav";

const Header: React.FC = () => {
    return (
        <div className={style.header}>
            <Nav/>
        </div>
    )
}

export default Header;