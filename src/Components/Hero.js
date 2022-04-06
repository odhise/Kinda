import React from "react";
import Image from "next/image";

const Hero=()=>{
    return(
        <div className="hero-section">
            <div className="hero-left">
                <div>
                    <h4>How to Buy on Kinda?</h4>
                </div>
            </div>
            <div className="hero-right">
                <div>
                    <h4>Find new & used car for Sale</h4>
                    <p>Browse thousands of new and used cars for every budget from verified dealers near you.</p>

                     <div className="right-content">
                    <div>
                    <input className="make" type="" placeholder="Pick a make" />
                    </div>
                    <div>
                    <input  className="model" type="" placeholder="Pick a model" />
                    </div>
                    </div>
                    <div className="service">
                        <div>
                        <input className="year" type="" placeholder="Year" />
                        </div>
                        <div>
                        <input className="fuel" type="" placeholder="Fuel" />
                        </div>
                    </div>
                    <div>
                        <input className="search-cards" type="" placeholder="SEARCH CARDS" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero;