


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
        <h2>{item.productname}</h2>                          
        <p>{item.description}</p>
        <p>{item.model}</p>
        <p>{item.price}</p>
        <p>{item.colors}</p>
        </div>
    )
}

export default SingleProductPage;