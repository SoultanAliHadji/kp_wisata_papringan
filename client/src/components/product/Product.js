import "../../App.css";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Body from "./Body";
import Hero from "./Hero";

const Product = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <Hero />
            </div>
            <div>
                <Body />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Product;