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
                  < Link href="/Product"> <button className="btn2">SELL A CAR</button></Link>
                </div>
                <div>
                <Link href="/SignUp"> <button className="btn1">SignUp</button></Link>
                </div>
                
                <div>
                <Link href="/Login"><button className="btn3">LOGIN</button></Link>
                </div>
            </div>

        </div>
    )
}

export default Nav