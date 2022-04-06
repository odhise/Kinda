import React from "react";


const Select=()=>{
    return(
<div className="product">
    <div className="select-cars">

    <div className="size">
<h4>Filter Cars:Model</h4>
<select>
    <option selected disabled >Cars</option>
    <option value="1">Mazda</option>
    <option value="2">Subaru</option>
    <option value="3">BMW</option>
    <option value="4">Nissan</option>
    <option value="5">Volkswagen</option>
    <option value="6">Toyota</option>
    <option value="7">Prado</option>
    <option value="8">Mercedez-Benz</option>


</select>
</div>

<div className="color"> 
<h4>Color</h4>
<select>
<option selected disabled>Color</option>
    <option value="1">White</option>
    <option value="2">Black</option>
    <option value="3">Green</option>
    <option value="4">Red</option>
    <option value="5">Yellow</option>
    <option value="6">Maroon</option>

    </select>
    </div>
</div>

    <div className="price">
        <div>
    <h4>Filter Cars:Prices</h4>
    </div>
    <div>
    <select>
        <option selected disabled>Price</option>
        <option value="1">8Million-4Million</option>
        <option value="2">3.8Million-10Million</option>
    </select>
    </div>
</div>

</div>

    )
}

export default Select;