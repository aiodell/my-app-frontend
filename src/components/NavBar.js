import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    const linkStyles ={
        display: "inline-block",
        width: "75px",
        padding: "12px",
        margin: "0 6px 0px",
        background: "#234F1E",
        textDecoration: "none",
        color: "white"
    }
    return (
        <div>
            <NavLink to= "/" exact style={linkStyles} activeStyle={{background: "#5DBB63"}}>
                Home
            </NavLink>
            <NavLink to= "/foxes"exact style={linkStyles} activeStyle={{background: "#5DBB63"}}>
                Foxes
            </NavLink>
            <NavLink to= "/addfox"exact style={linkStyles} activeStyle={{background: "#5DBB63"}}>
                Register Fox
            </NavLink>
            <NavLink to= "/addsponsor" exact style={linkStyles} activeStyle={{background: "#5DBB63"}}>
                Register Sponsor
            </NavLink>
        </div>
    )
}

export default NavBar
