import React from "react";
import Image from "next/image";

const Hero=()=>{
    return(
        <div className="hero-section">
            <div className="hero-left">
                <div>
                    <h2>How to Buy on Kinda?</h2>
                </div>
            </div>
            <div className="hero-right">
                <div>
                    <h2>Find new & used car for Sale</h2>
                    <p>Browse thousands of new and used cars for every budget from verified dealers near you.</p>

                    <div>
                    <input type="" placeholder="Pick a make" />
                    </div>
                    <div>
                    <input type="" placeholder="Pick a model" />
                    </div>
                    <div className="service">
                        <div>
                        <input type="" placeholder="Year" />
                        </div>
                        <div>
                        <input type="" placeholder="Fuel" />
                        </div>
                    </div>
                    <div>
                        <input type="" placeholder="SEARCH CARDS" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero;