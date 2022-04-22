
import React from "react";
import Image from "next/image";
import rash from "../../public/Images/rash.png"



const BookItem=()=>{
    return(
        <div className="findcars">
         <div>
        <div>
            <h3>Buy brand new cars from Kinda Retailers in Kenya.</h3>
        </div>
        <div>
            <p>We are partnering with major car distributors to bring you great and affordable options especially when it comes to brand new cars. Find out what suits your choice.</p>
        </div>
        <button>Get Started</button>
         </div>

         <div>
             <div>
                 <Image src={rash} width="600px"  height="400px" />
             </div>
         </div>

        </div>
    )
}

export default BookItem;