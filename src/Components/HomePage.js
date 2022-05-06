import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import Image from "next/image";
import homecar from "../../public/Images/homecar.png"



const HomePage = () => {
    return (
        <div className="search-model">
             <div className="search">
                 <h1>We know what you’re searching for</h1>

                 <div className="search-form">
                <input type="" placeholder="I am loooking for..." />
                < SearchIcon className="search-icon" />
                </div>

            </div>
            <div>
                <Image src={homecar} />

            </div>
        </div>


    )
}

export default HomePage;