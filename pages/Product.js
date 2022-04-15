import React,{useState} from "react";
import { Link } from "@mui/material";


const Product=()=>{

    const [Message, setMessage] = useState("")
    const [formData, setFormData] = useState({
        Productname:"",
        description:"",
        image:"",
        model:"",
        colors:"",
        price:""

    }
    )


   async function handleProduct(e) {
e.preventDefault()


        const url = "https://kiunda.herokuapp.com/api/Product/add"
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)

        }
         const data = await fetch(url, options)
            
            .catch(error => {
                console.log(error)
            })
console.log(await data.json())

        }


    return(
        <div>
            <div>
                <h3>Product Details</h3>
            </div>
            <div>
                <labl>
                    productname *
                </labl>
                <input type="" placeholder=""  onChange={(e) => setFormData({ ...formData, productname: e.target.value })} />
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
                <input type=""  placeholder="" onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
            </div>
            <div>
                <label>
                    model *
                </label>
                <input type=""  placeholder="" onChange={(e) => setFormData({ ...formData, model: e.target.value })} />
            </div>
            <div>
                <label>
                    colors *
                </label>
                <input type=""  placeholder="" onChange={(e) => setFormData({ ...formData, colors: e.target.value })} />
            </div>
            <div>
                <label>
                    image *
                </label>
                <input type="file"  placeholder="File Upload"  onChange={(e) => setFormData({ ...formData, image: e.target.value })} />
            </div>
            <div>
                <button onClick={handleProduct}>Submit and Send</button>
            </div>
            <p>{Message}</p>
            

        </div>
    )
}

export default Product;