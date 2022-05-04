
import React, { useEffect, useState } from "react";
import Link from "next/link"
import Announcements from "../src/Components/Announcements";
import Nav from "../src/Components/Nav";
import Footer from "../src/Components/Footer";

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
        <>
        <Announcements />
        <Nav />
        <div className="allproducts">
        <div className="categorized-products">
                {
                    products.map(item=>{
                        return(
                            <div className="myparagraph">
                              <Link href={`Products/${item._id}`}>
                              <img src={item.image}  width={"400px"} height={"250px"} style={{cursor:"pointer"}}/> 
                              </Link> 
                                <h2>{item.productname}</h2>
                                <p>{item.model}</p>
                                <p>{item.description}</p>
                                <p>Ksh.{item.price}</p>
                                <p>{item.colors}</p>
                                <p>TEL:{item.contact}</p>
                            </div>
                        )
                    })
                }
            </div>

        </div>
        <Footer />
        </>
    )
}

export default allProduct
