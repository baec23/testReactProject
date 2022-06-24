import React from "react";
import logoImage from "../images/react-icon-small.png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logoImage} alt="logoImage"/>
            <h1>ReactFacts</h1>
            <h2>React Course - Project 1</h2>
        </nav>
    )
}