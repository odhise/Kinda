
import React, { useEffect, useState } from "react";
import Link from "next/link"

import axios from "axios";

const Main=()=>{

    const [products,setProducts]=useState([])
    const url= "https://kiunda.herokuapp.com/api/Product/"

    useEffect(()=>{
        axios.get(url)
        .then((res)=>{
            setProducts(()=>res.data)
        })
    },[url])

    console.log(products)


    return(
        <div style={{backgroundColor:"whitesmoke"}}>
        <div className="main-products">
                {
                    products.slice(0,8).map(item=>{
                        return(
                            <div className="map-item">
                              <Link href={`Products/${item._id}`}>
                              <img src={item.image}  width={"380px"} height={"250px"} style={{cursor:"pointer"}}/> 
                              </Link> 
                              <div className="product-end" >
                                 
                                <p>{item.model}</p>
                                
                                <p style={{color:"teal", fontSize:"1.5rem"}}>Ksh. {item.price} </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            </div>

    )
}

export default Main;
