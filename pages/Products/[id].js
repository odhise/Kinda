import Nav from "../../src/Components/Nav";
import Footer from "../../src/Components/Footer";


export const getStasticPaths = async () => {
    const res = await fetch("https://kiunda.herokuapp.com/api/Product/");
    const data = await res.json()


    const paths = data.map(item => {
        return {
            params: { id: item._id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getServerSideProps = async (context) => {
    const id = context.params.id;
    const res = await fetch("https://kiunda.herokuapp.com/api/Product/find/" + id)
    const data = await res.json()

    return {
        props: { item: data }
    }
}

const SingleProductPage = ({ item }) => {
    console.log(item)

    return (
        <div>
        <Nav />
        <div className="singleproduct">
            <div>

                <img src={item.image} width={"1000px"} height={"600px"} />
                <div className="small-img">
                    <img src={item.smallImages[0]} width={"240px"} height={"200px"} />
                    <img src={item.smallImages[1]} width={"240px"} height={"200px"} />
                    <img src={item.smallImages[2]} width={"240px"} height={"200px"} />
                    <img src={item.smallImages[3]} width={"240px"} height={"200px"} />
                </div>
            </div>

            <div className="jan">
                <h2 style={{ color: "red", fontSize: "1.6rem", fontFamily: "rampat one" }}>{item.productname}</h2>
                <p style={{ color: "", fontSize: "1.5rem", fontFamily: "rampat one" }}>{item.model}</p>
                <p style={{ color: "", fontSize: "1.5rem", fontFamily: "rampat one" }}>{item.description}</p>
                <p style={{ color: " #42B83A", fontSize: "1.3rem" ,fontFamily: "rampat one" ,fontWeight:"bold" }}>Ksh. {item.price}</p>
                <p style={{ color: "darkblue", fontSize: "1.5rem", fontFamily: "rampat one" }}>{item.colors}</p>
                <p style={{ color: "brown", fontSize: "1.5rem", fontFamily: "rampat one" }}>TEL:{item.contact}</p>
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default SingleProductPage;