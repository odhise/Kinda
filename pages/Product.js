

import React, { useState } from "react";

const Product = () => {
    const [imgUrl, setImgUrl] = useState("");

    const [disabled, setDisabled] = useState(false);

    const [formData, setFormData] = useState({

        Productname: "",
        description: "",
        image: "",
        model: "",
        colors: "",
        price: ""

    })
    const uploadImage = async (e) => {
        const data = new FormData()

        const fileInput = e.target
        const files = fileInput.files

        for (let file of files) {
            data.append("file", file)
            data.append("upload_preset", "kinda_uploads")
        }

        try {
            await fetch("https://api.cloudinary.com/v1_1/myc-tech-academy/image/upload", {

                method: "POST",
                body: data,
            }
            )
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    return formData({
                        ...setFormData, formData, image: data.secure_url
                    });
                })
        }
        catch (err) {
            console.log(err);
        }
    }

    async function handleProduct(e) {
        e.preventDefault()


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
                <input type="" placeholder="" onChange={(e) => setFormData({ ...formData, model: e.target.value })} />
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
                <button onClick={handleProduct} disabled={!formData.image} >Submit and Send</button>
            </div>
        </div>
    )
}

export default Product;