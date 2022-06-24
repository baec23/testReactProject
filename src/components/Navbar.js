import React from "react";
import logoImage from "../images/react-icon-small.png"

export default function Navbar() {
    return (
        <HeaderLeft/>
    )
}

function HeaderLeft() {
    return (
        <div className="headerLeft">
            <ul>
                <li><img src={logoImage} alt="logoImage"/></li>
                <li><h1>ReactFacts</h1></li>
            </ul>
        </div>
    )
}