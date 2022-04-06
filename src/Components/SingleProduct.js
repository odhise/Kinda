import React from "react";
import Image from "next/image";
import lambo from "../../public/Images/lambo.png"

const SingleProduct=()=>{
    return(
        <div className="">
            <div>
                <h4>New Car Showroom/Dealers  in kenya</h4>
                <p>Looking to buy a new car? Welcome to Kinda.co.ke comprehensive dealer locator to help you find authorised new car showrooms/dealers in Kenya</p>
            </div>
            <div>
                <Image src={lambo} width="400px" height="300px" />
                <p>Well maintained Lamborghini for sale in Nairobi</p>
            </div>
            <div>

            </div>

        </div>
    )
}

export default SingleProduct