import React from "react";
import { Link } from "@mui/material";

const Nav=()=>{
    return(
        <div className="nav-container">
             <div>
                    <h1><span>Kinda</span><strong>.co.ke</strong></h1>
                </div>
            <div className="nav-content">
                <div>
                    <button className="btn1">Buy a Car</button>
                </div>
                <div>
                    <button className="btn2">Sell a Car</button>
                </div>
                <div>
                <button className="btn3">LOGIN</button>
                </div>
            </div>

        </div>
    )
}

export default Nav