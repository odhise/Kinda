import React from "react";
import Image from "next/image";
import cruiserimp1 from "../../public/Images/cruiserimp1.png"
import urbandrive1 from "../../public/Images/urbandrive1.png"
import khush7i from "../../public/Images/khush7i.png"
import prestige1 from "../../public/Images/prestige1.png"
import carsoko1 from "../../public/Images/carsoko1.png"








const Body=()=>{
    return(
        <div className="body-container">
              <div>
          <h4>Dealership & Partners</h4>
          </div>
        <div className="body-pattern" >
          
            <div>
                <Image src={cruiserimp1} width="200px" height="50px" />
            </div>
            <div>
            <Image src={khush7i} width="200px" height="100px" />
            </div>
            <div>
            <Image src={prestige1} width="200px" height="100px" />
            </div>
            <div>
            <Image src={urbandrive1} width="200px" height="100px" />
            </div>
            <div>
            <Image src={carsoko1} width="200px" height="100px" />
            </div>
        </div>
        </div>
    )
}

export default Body;