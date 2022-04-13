import React from "react"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';




const Main=()=>{
    return(
        <div className="main-container">

        <div>
            <h3>Trending Ads</h3>
            </div>

        <div>
            <button className="show" >Show More</button>
            <ArrowForwardIcon />
        </div>
       
        </div>
    )
}

export default Main;