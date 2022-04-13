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
                <div>

                <select>
<option selected disabled>Counties</option>
    <option value="1">Machakos</option>
    <option value="2">Nairobi</option>
    <option value="3">Kisumu</option>
    <option value="4">Mombasa</option>
    <option value="5">Siaya</option>
    <option value="6">Homabay</option>
    <option value="7">Eldoret</option>
    <option value="8">Kitui</option>
    <option value="9">Vihiga</option>
    <option value="10">Lamu</option>
    <option value="11">Kajiado</option>
    <option value="12">Mandera</option>
    <option value="13">Bungoma</option>
    <option value="14">Migori</option>
    <option value="15">Busia </option>
    </select>

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