


export const getStasticPaths= async ()=>{
    const res = await fetch ("https://kiunda.herokuapp.com/api/Product/");
    const data= await res.json()
      

    const paths=data.map(item=>{
        return{
            params:{id:item._id.toString()}
        }
    })
    return{
        paths,
        fallback:false
    }
}

export const getServerSideProps= async (context)=>{
    const id=context.params.id;
    const res= await fetch("https://kiunda.herokuapp.com/api/Product/find/" +id)
    const data= await res.json()

    return{
        props: {item:data}
    }
}

const SingleProductPage=({item})=>{
    console.log(item)

    return(
        <div className="singleproduct">
            
<h1>Single Product</h1>
<img src={item.image}  width={"400px"} height={"250px"}/>
        <h2 style={{color:"red" , fontSize:"1.6rem" ,fontFamily:"rampat one"}}>{item.productname}</h2> 
        <p style={{color:"white" , fontSize:"1.5rem" ,fontFamily:"rampat one"}}>{item.model}</p>
        <p style={{color:"white" , fontSize:"1.5rem" ,fontFamily:"rampat one"}}>{item.description}</p>
        <p style={{color:"blue", fontSize:"1.3rem"}}>Ksh.{item.price}</p>
        <p style={{color:"white" , fontSize:"1.5rem" ,fontFamily:"rampat one"}}>{item.colors}</p>
        <p style={{color:"brown" , fontSize:"1.5rem" ,fontFamily:"rampat one"}}>TEL:{item.contact}</p>
        </div>
    )
}

export default SingleProductPage;