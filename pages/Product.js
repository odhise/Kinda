

import React, { useState } from "react";
import Nav from "../src/Components/Nav";
import Footer from "../src/Components/Footer";


const Product = () => {
    const [imgUrl, setImgUrl] = useState("");

    const [disabled, setDisabled] = useState(false);

    const [formData, setFormData] = useState({

        productname: "",
        description: "",
        image: "",
        smallImages:"",
        model: "",
        colors: "",
        price: "",
        contact:""

    })
const [submitting, setSubmitting] = useState(true)
    const urlList = [];
    const uploadImage = async (e) => {
        const mainImgData = new FormData()

        const fileInput = e.target
        const files = fileInput.files

        for (let file of files) {
            mainImgData.append("file", file)
            mainImgData.append("upload_preset", "kinda_uploads")
        }

        try {
            await fetch("https://api.cloudinary.com/v1_1/myc-tech-academy/image/upload", {

                method: "POST",
                body: mainImgData,
            }
            )
            .then(res=>res.json())
            .then(dataResult=>{
                console.log(dataResult.secure_url)
                return setFormData({...formData, image:dataResult.secure_url})
            })
        }
        catch (err) {
            console.log(err);
        }
    }

    const uploadImages = async (e) => {
        const smallImgData = new FormData()

        const fileInput = e.target
        const files = fileInput.files

        for (let file of files) {
            smallImgData.append("file", file)
            smallImgData.append("upload_preset", "kinda_uploads")

            try {
                await fetch("https://api.cloudinary.com/v1_1/myc-tech-academy/image/upload", {
    
                    method: "POST",
                    body: smallImgData,
                }
                )
                .then(res=>res.json())
                .then(dataResult=>{
                    console.log(dataResult.secure_url)
                    return urlList.push(dataResult.secure_url)
                })
            }
            catch (err) {
                console.log(err);
            }
        }

        if(urlList.length === 4){
            setSubmitting(false)
            console.log(urlList)
        }
        
        setFormData({...formData, smallImages:urlList})
    }

    async function handleProduct(e) {
        e.preventDefault()
console.log(formData)
        const url = "https://kiunda.herokuapp.com/api/Product/add"
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)

        };


        return fetch(url, options)
            .then((res) => res.json())
            .then((data) => {
                if (data.code === 11000) {
                    console.log("product added")


                }
                else {
                    console.log(data)
                    return data;
                }
            })
            
    }

    return (
        <>
        <Nav/>
        <div className="product-add">
            <div>
                <h3>Product Details</h3>
            </div>
            <div>
                <labl>
                    productname *
                </labl>
                <input type="" placeholder="" onChange={(e) => setFormData({ ...formData, productname: e.target.value })} />
            </div>
            <div>
                <label>
                    description *
                </label>
                <input type="" placeholder="" onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
            </div>
            <div>
                <label>
                    price *
                </label>
                <input type="" placeholder="" onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
            </div>
            <div>
                <label>
                    model *
                </label>
                <input type="" placeholder=""  onChange={(e) => setFormData({ ...formData, model: e.target.value })} />
            </div>
            <div>
                <label>
                    Contact *
                </label>
                <input className="contact" type="Number" placeholder=""  onChange={(e) => setFormData({ ...formData, contact: e.target.value })} />
            </div>
            <div>
                <label>
                    colors *
                </label>
                <input type="" placeholder="" onChange={(e) => setFormData({ ...formData, colors: e.target.value })} />
            </div>
            <div>
                <label>
                    image *
                </label>
                <input type="file" name="file" placeholder="File Upload" onChange={(e) => uploadImage(e)} />
            </div>

            <div>
                <label>
                    FeaturedIamges*
                </label>
                <input type="file" name="file" placeholder="File Upload"  multiple  onChange={(e) => uploadImages(e)} />
            </div>
            
            <div>
                <button onClick={handleProduct} disabled={submitting} style={{cursor:submitting===false && "pointer"}}>Submit and Send</button>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Product;