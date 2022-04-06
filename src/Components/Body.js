import React from "react";
import Image from "next/image";
import  retanapw from "../../public/Images/retanapw.png"
import nissan3 from "../../public/Images/nissan3.png"
import macro2 from "../../public/Images/macro2.png"
import stefany from "../../public/Images/stefany.png"
import convert from "../../public/Images/convert.png"
import remy2 from "../../public/Images/remy2.png"




const Body=()=>{
    return(
        <div >
            <div>

            <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card ">
      <Image src={retanapw} width="450px" height="250px" alt="..." />
      <div class="card-body">
        <h5 class="card-title">ISUZU RX</h5>
        <p class="card-text">Price Ksh.2,500,000.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Model 2021</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div >
      <Image src={nissan3}  width="450px" height="250px" alt="..." />
      <div className="card-body">
        <h5 className="card-title">NISSAN-CX3</h5>
        <p className="card-text">Price Ksh.3,800,000.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Model 2017</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div >
      <Image src={macro2}  width="450px" height="250px"  alt="..." />
      <div className="card-body">
        <h5 className="card-title">VOLkSWAGEN </h5>
        <p className="card-text">Price Ksh.3,000,000</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Model 2019</small>
      </div>
    </div>
  </div>
</div>


<div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div class="card ">
      <Image src={stefany} width="450px" height="250px" alt="..." />
      <div className="card-body">
        <h5 className="card-title">CHEVLORET</h5>
        <p className="card-text">Price Ksh.2,500,000.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Model 2021</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div >
      <Image src={convert}  width="450px" height="250px" alt="..." />
      <div className="card-body">
        <h5 className="card-title">MAZDA</h5>
        <p className="card-text">Price Ksh.2,999,000.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Model 2017</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div >
      <Image src={remy2}  width="450px" height="250px"  alt="..." />
      <div className="card-body">
        <h5 className="card-title">AUDI </h5>
        <p className="card-text">Price Ksh.7,849,000</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Model 2021</small>
      </div>
    </div>
  </div>
</div>

            </div>
        </div>
    )
}

export default Body;