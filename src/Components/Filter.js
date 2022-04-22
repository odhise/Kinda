import React from "react";

const Filter=()=>{
    return(
        <div className="car-container">
             <div>
                <h4>Use our extensive database to research and compare trims, photos, and reviews for every make and model, so you can find the car that fits your life.</h4>
            </div>
        <div>
            <div className="car-info">
            <div>
                <select>
                    <option selected disabled>Select make</option>
                    <option value="1">Suzuki</option>
                    <option value="2">Ford</option>
                    <option value="3">Nissan</option>
                    <option value="4">Mercedez</option>
                    <option value="5">Subaru</option>
                    <option value="6">Toyota</option>
                    <option value="7">BMW</option>
                    <option value="8">Volkswagen</option>
                </select>
            </div>
            <div>
                <select>
                <option selected disabled>Select Model</option>
                </select>
            </div>
            <div>
                <button>Search Cars</button>
            </div>

            </div>

        </div>
        </div>
    )
}

export default Filter