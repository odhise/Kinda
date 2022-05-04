

import React from "react"
import Image from "next/image";
import facebook from "../../public/Icons/facebook.svg"
import instagram from "../../public/Icons/instagram.svg"
import twitter from "../../public/Icons/twitter.svg"
import whatsapp from "../../public/Icons/whatsapp.svg"




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
                    <label>Email *</label>
                    <input type="Email"  />
                </div>
                <div>
                    <input type="" placeholder="SUBSCRIBES TO NEWSLTTER" />
                </div>
                <div>
                    <Image src={facebook}  width="90px"  height="50px" />
                </div>
                <div>
                    <Image src={instagram}  width="90px"  height="50px" />
                </div>
                <div>
                    <Image src={twitter}  width="90px"  height="50px" />
                </div>
                <div>
                    <Image src={whatsapp}  width="90px"  height="50px" />
                </div>
            </div>
          </div>
        </div>
    )
}

export default Newsletter;