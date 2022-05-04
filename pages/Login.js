import React, { useEffect, useState } from "react";
import { Link } from "@mui/material"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LockOpenIcon from '@mui/icons-material/LockOpen';


const Login = () => {
    const [Message, setMessage] = useState("")

    const [formData, setFormData] = useState({
        username: "",
        password: ""

    })
    function handleLogin(e) {

        const url = "https://kiunda.herokuapp.com/api/Auth/Login"
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)

        }
        return fetch(url, options)
            .then(res => res.json())
            .then(data => {
                if (data.code === 11000) {
                    return setMessage("User already Loggedin")
                } else {
                    console.log(data)
                    setMessage("Succesfully Registered you can Login")
                    return data
                }
            })
            .catch(error => {
                console.log(error.response.status)
            })
    }
    return (
        <div className="login-container">
            <div>
                <h3>Login here using your Username & Password </h3>
            </div>
            <div className="user-info">
                    <AccountCircleOutlinedIcon />
                    <input type="" placeholder="Username" onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
            </div>
            <div className="password">
                    <LockOpenIcon />
                    <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
            </div>
            <div>
                <button className="log" onClick={(e) => handleLogin(e)} >Login</button>
            </div>
            <div className="sign">
                <div>
                    <p>Forgot your Password?</p>
                </div>
                <div>
                    <button className="sign-up"  >SignUp</button>
                </div>
                <p>
                    <Link href={"/Login"}> Go to SignUp Page</Link>
                </p>
            </div>

        </div>
    )
}
export default Login;