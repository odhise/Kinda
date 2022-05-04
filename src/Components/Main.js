
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
        <div className="main-container">
        <div className="main-products">
                {
                    products.slice(1,9).map(item=>{
                        return(
                            <div>
                              <Link href={`Products/${item._id}`}>
                              <img src={item.image}  width={"400px"} height={"250px"} style={{cursor:"pointer"}}/> 
                              </Link> 
                              <div className="product-end" >
                                  <div className="maked">
                                <h2>{item.productname}</h2>
                                <p>{item.model}</p>
                                </div>
                                <p>{item.description}</p>
                                <p>Ksh.{item.price}</p>
                                <p>{item.colors}</p>
                                <p>TEL:{item.contact}</p>
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
