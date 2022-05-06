import React from "react";
import { Link } from "@mui/material";

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-links">
            <div>
                <h1>
                <Link href="/ " >Kinda</Link>
                </h1>
            </div>
            <div className="nav-content">
            <div>
                    <Link href="/allProduct"> <button className="btn4">All products</button></Link>
                </div>
                <div>
                    <Link href="/Product"> <button className="btn2">SELL A CAR</button></Link>
                </div>
                <div>
                    <Link href="/SignUp"> <button className="btn1">SignUp</button></Link>
                </div>

                <div>
                    <Link href="/Login"><button className="btn3">LOGIN</button></Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Nav;