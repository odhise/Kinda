import React from "react";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


const Login=()=>{
    return(
        <div className="login-container">
            <div>
                <h4>Login here using your Username & Password </h4>
            </div>
            <div className="user-info">
                <div className="user-detail">
                <AccountCircleOutlinedIcon />
                <input type="" placeholder="Username" />
            </div>
            </div>
            <div className="password">
            <div className="lock">
                <LockOpenIcon />
                <input type="password" placeholder="Password" />
                <VisibilityOffIcon className="visibity" />
            </div>
            </div>
            <div>
                <button className="log">Login</button>
            </div>
            <div className="sign">
                <div>
                    <p>Forgot your Password?</p>
                </div>
                <div>
                    <button className="sign-up">SignUp</button>
                </div>
            </div>

        </div>
    )
}

export default Login;