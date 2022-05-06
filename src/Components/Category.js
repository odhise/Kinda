import React from "react";
import Image from "next/image";
import audi from "../../public/Icons/audi.svg"
import bmw from "../../public/Icons/bmw.svg"
import nissan from "../../public/Icons/nissan.svg"
import toyota from "../../public/Icons/toyota.svg"
import volkswagen from "../../public/Icons/volkswagen.svg"
import merce from "../../public/Icons/merce.svg"


const Category = () => {
    return (
        <div className="item-cost">
                <div>
                    <h3>Most popular models</h3>
                </div>

                <div className="category-item">
                    <Image src={audi} width="120px" height="80px" />
                    <Image src={bmw} width="120px" height="80px" />
                    <Image src={nissan} width="120px" height="80px" />
                    <Image src={toyota} width="120px" height="80px" />
                    <Image src={volkswagen} width="120px" height="80px" />
                    <Image src={merce} width="120px" height="80px" />

                </div>
            </div>

        
    )
}

export default Category