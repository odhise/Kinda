import React from "react"
import Image from "next/image"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import car2 from '../../public/Images/car2.png'
import panyukov1 from "../../public/Images/dima-panyukov1.png"
import campbell1 from "../../public/Images/campbell1.png"
import mercedez1 from "../../public/Images/mercedez1.png"
import joey2 from "../../public/Images/joey2.png"
import remy2 from "../../public/Images/remy2.png"
import aaron1 from "../../public/Images/aaron1.png"
import autocar1 from "../../public/Images/autocar1.png"
import matthijs1 from "../../public/Images/matthijs1.png"



const Main=()=>{
    return(
        <div>
            <h3>Trending Ads</h3>
        <div className="main-container">
            
            <div className="car">
                <Image src={car2} alt=" " width={500} height={400}  />
            </div>
            <div className="car">
                <Image src={panyukov1} alt="" width={500} height={400} />

            </div>
            <div className="car">
            <Image src={campbell1} alt="" width={500} height={400} />
            </div>
            <div className="car">
            <Image src={mercedez1} alt="" width={500} height={400} />
            </div>
            <div className="car">
            <Image src={joey2} alt="" width={500} height={400} />
            </div>
            <div className="car">
            <Image src={remy2} alt="" width={500} height={400} />
            </div>
            <div className="car">
            <Image src={aaron1} alt="" width={500} height={400} />
            </div>
            <div className="car">
            <Image src={autocar1} alt="" width={500} height={400} />
            </div>
            <div className="car">
            <Image src={matthijs1} alt="" width={500} height={400} />
            </div>
        </div>
        <div>
            <button className="show" >Show More</button>
            <ArrowForwardIcon />
        </div>
       
        </div>
    )
}

export default Main;