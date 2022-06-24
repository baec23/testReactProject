import React from "react"
import Main from "./components/Main"
import NavBar from "./components/Navbar"

const page = (
    <div className="container">
        <NavBar/>
        <Main/>
    </div>
)

export default function App() {
    return page
}
