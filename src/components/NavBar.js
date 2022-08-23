import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <div>
            <NavLink to= "/">
                Home
            </NavLink>
            <NavLink to= "/foxes">
                Foxes
            </NavLink>
            <NavLink to= "/addfox">
                Register Fox
            </NavLink>
            <NavLink to= "/addsponsor">
                Register Sponsor
            </NavLink>
        </div>
    )
}

export default NavBar