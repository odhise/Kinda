

import React from "react"


const Newsletter=()=>{
    return(
        <div>
            <div>
            <div className="newsletter">
            <div>
                <h3>Get Free Newsletter from Kinda</h3>
            </div>
            <div>
                <p>Sign up and get the best of Automotive News delivered straight to your email inbox, free of charge. Choose your news – we will deliver.</p>
            </div>
            </div>
            <div className="sub">
                <div>
                    <input type="Email"  placeholder="Email" />
                </div>
                <div>
                   <button className="subscribe"> SUBSCRIBES TO NEWSLTTER</button>
                </div>
            </div>
          </div>
        </div>
    )
}

export default Newsletter;