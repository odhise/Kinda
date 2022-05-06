import React, { useState } from "react"
import { Link } from "@mui/material"
import Nav from "../src/Components/Nav"
import Footer from "../src/Components/Footer"

const SignUp = () => {
    
    const [Message, setMessage] = useState("")

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",

    })
    function handleRegister(e) {

        console.log("Evans")
        const url = "https://kiunda.herokuapp.com/api/Auth/Register"
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)

        }
        return fetch(url, options)

            .then(res => res.json())
            .then(data => {
                if (data.code === 11000) {
                    return setMessage("User already Registered")
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
        <div>
        <Nav />
        <div className="signup-container">
            <div className="signup-content">
                <div className="signup-details">
                    <div>
                        <input type="text" placeholder="User Name"  onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
                    </div>
                </div>
                <div className="categories">
                    <div>
                        <input type="Email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    </div>
                    <div>
                        <input type="Password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                    </div>
                </div>
                <div>
                    <button className="register" onClick={handleRegister} >REGISTER</button>
                </div>
                <p style={{color:"white" ,fontSize:"1.3rem", fontFamily:"rampat one"}}>{Message}</p>
                <p>
                    <Link href={"/Login"}> Go to Login Page</Link>
                </p>
            </div>
        </div>
        <Footer />
        </div>
    )

}
export default SignUp;