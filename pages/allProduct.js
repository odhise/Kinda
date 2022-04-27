
import React, { useEffect, useState } from "react";
import Link from "next/link"

import axios from "axios";

const allProduct=()=>{

    const [products ,setProducts]=useState([])
    const url= "https://kiunda.herokuapp.com/api/Product/"

    useEffect(()=>{
        axios.get(url)
        .then((res)=>{
            setProducts(()=>res.data)
        })
    },[url])

    console.log(products)


    return(
        <div className="allproducts">
        <div className="categorized-products">
                {
                    products.map(item=>{
                        return(
                            <div>
                              <Link href={`Products/${item._id}`}>
                              <img src={item.image}  width={"400px"} height={"250px"} style={{cursor:"pointer"}}/> 
                              </Link> 
                                <h2>{item.productname}</h2>
                                <p>{item.description}</p>
                                <p>{item.model}</p>
                                <p>{item.price}</p>
                                <p>{item.colors}</p>
                                <p>{item.contact}</p>
                            </div>
                        )
                    })
                }

                <div>
                <Link href={"/Products"}> Go to Products </Link>
                </div>
            </div>

        </div>
    )
}

export default allProduct