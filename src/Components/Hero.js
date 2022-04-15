import React from "react";
import Image from "next/image";
import pexels2 from "../../public/Images/pexels2.png"
import mose1 from "../../public/Images/mose1.png"
import shaz1 from "../../public/Images/shaz1.png"



const Hero=()=>{
    return(
        <div className="hero-section">
            <div className="hero-left">
                <div>
                    <h4>Buy on Kinda.co.ke</h4>
                </div>
                <div>
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <Image src={pexels2} width="500px" height="250px"   alt="..." />
    </div>
    <div class="carousel-item">
      <Image src={mose1}  width="400px" height="250px"   alt="..." />
    </div>
    <div class="carousel-item">
      <Image src={shaz1}  width="400px" height="250px"   alt="..." />
    </div>
  </div>
</div>
                </div>
            </div>
            <div className="hero-right">
                <div>
                    <h4>Find new & used car for Sale</h4>
                    <p>Browse thousands of new and used cars for every budget from verified dealers near you.</p>

                     <div className="right-content">
                    <div>
                    <select>
                      <option className="option"  selected disabled>Pick a Make</option>
                      <option value="1">Mazda</option>
                      <option value="2">Subaru</option>
                      <option value="3">BMW</option>
                       <option value="4">Nissan</option>
                         <option value="5">Volkswagen</option>
                      <option value="6">Toyota</option>
                      <option value="7">Prado</option>
                   <option value="8">Mercedez-Benz</option>
                   <option value="9">Ford</option>
                   <option value="10">Isuzu</option>
                    </select>
                    </div>
                    <div>
                    <select>
                      <option className="option"  selected disabled>Pick a Model</option>
                      <option value="1">Model</option>

                    </select>
                    </div>
                    </div>
                    <div className="service">
                        <div>
                        <select>
                      <option className="option"  selected disabled>Year</option>
                      <option value="1">2012</option>
                      <option value="2">2013</option>
                      <option value="3">2014</option>
                       <option value="4">2015</option>
                         <option value="5">2016</option>
                      <option value="6">2017</option>
                      <option value="7">2018</option>
                      <option value="8">2019</option>
                      <option value="9">2020</option>
                      <option value="10">2021</option>
                      <option value="8">2022</option>
                    </select>
                        </div>
                        <div>
                        <select>
                      <option className="option"  selected disabled>Fuel</option>
                      <option value="1">Petrol</option>
                      <option value="2">Diesel</option>
                      <option value="3">Electric</option>
                       <option value="4">Hybrid</option>
                    </select>
                        </div>
                    </div>
                    <div>
                        <input className="search-card" type="" placeholder="SEARCH CARDS" />
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero;