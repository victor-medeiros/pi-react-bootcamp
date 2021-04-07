import React from 'react';
import logoImg from "../assets/images/logo.png";
import avatarImg from "../assets/images/avatar.png"

function NavBar() {
    return (
        <nav>
            <div className="container">
                <img className="logo" src={logoImg} alt="Logo"/>
                <img src={avatarImg} alt="Avatar" className="avatar"/>
            </div>
        </nav>
    );
}

export default NavBar;