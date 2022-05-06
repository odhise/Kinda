
import React from "react";
import Image from "next/image";
import facebook from "../../public/Icons/facebook.svg"
import instagram from "../../public/Icons/instagram.svg"
import twitter from "../../public/Icons/twitter.svg"
import whatsapp from "../../public/Icons/whatsapp.svg"



const Footer=()=>{
    return(
        <>
        <div className="footer-background">
        <div className="footer-container">
            <div>
                
                <div>
                <ul>
                <h3>About Us</h3>
                <a href="#"><li>About Kinda</li></a>
                <a href="#"><li>Terms & Condition</li></a>
                <a href="#"><li>Privacy Policy</li></a>
                <a href="#"> <li>Billing Policy</li></a>
                </ul>
                </div>
            </div>
            <div>
                
                <div>
                    <ul>
                    <h3>Support</h3>
                    <a href="#"><li>Support@Kinda.co.ke</li></a>
                    <a href="#"> <li>Safety tip</li></a>
                    <a href="#"> <li>Contact Us</li></a>
                    <a href="#"><li>FAQ</li></a>
                    </ul>
                </div>
            </div>
            <div>
                
                <div>
                    <ul>
                    <h3>Our Services</h3>
                   <a href="#"> <li>Kinda On FB</li></a>
                       <a href="#"><li>Our Instagram</li></a>
                       <a href="#"><li>Our YouTube</li></a>
                       <a href="#"><li>Our Twitter</li></a>
                    </ul>
                </div>
            </div>
            <div>
                
                <div>
                

                    <ul>
                    <h3>Hot Links</h3>
                    <a href="#"><li>Brand</li></a>
                    <a href="#"><li>Kinda Sellers</li></a>
                    <a href="#"><li>Regions</li></a>
                    <a href="#"><li>Kinda Africa</li></a>
                    </ul>
                </div>
            </div>
        </div>
        <div style={{display:"flex",justifyContent:"center",padding:"2em 0"}}>
            <Image src={facebook} width="80px" height={"30px"} />
            <Image src={instagram} width="80px" height={"30px"}  />
            <Image src={twitter} width="80px" height={"30px"}  />
            <Image src={whatsapp} width="80px" height={"30px"}  />
        </div>
        
           <div className="bottom-link">
           <a> Kinda Automotive Marketer &copy;2022</a>
            </div>
            </div>
            </>
    )
}

export default Footer;