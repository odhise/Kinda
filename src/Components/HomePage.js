import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';



const HomePage=()=>{
    return(
        <div>
        <div className="container1">
            <div className="homee">
            <div>
            <p>Find anything in</p>
            </div>
            <div className="home-address">
                <div className="find">
                <LocationOnIcon />
                </div>
                <div>
                <input type="" placeholder="All Kenya" />
                </div>
            </div>
            </div>

            <div className="form">
                <div>
                    <input type="" placeholder="I am loooking for..." />
                    </div>
                    <div className="form-icon">
                        <SearchIcon />
                    </div>
                </div>
        </div>
        </div>
    )
}

export default HomePage;