
import React, { useEffect, useState } from "react";
import Link from "next/link"
import Footer from "../src/Components/Footer";
import Nav from "../src/Components/Nav";
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
        <div>
        <Nav/>
        <div className="allproducts">
        <div className="categorized-products">
                {
                    products.map(item=>{
                        return(
                            <div className="myparagraph" >
                              <Link href={`Products/${item._id}`}>
                              <img src={item.image}  width={"400px"} height={"250px"} style={{cursor:"pointer"}}/> 
                              </Link> 
                                <p style={{color:"black", fontWeight:"bold", fontSize:"1.5rem"}}>{item.model}</p>

                                <p style={{color:" #42B83A", fontWeight:"bold",fontSize:"1.5rem"}}>Ksh. {item.price} </p>
                            </div>
                        )
                    })
                }
            </div>

        </div>
        <Footer />
        </div>
    )
}

export default allProduct
