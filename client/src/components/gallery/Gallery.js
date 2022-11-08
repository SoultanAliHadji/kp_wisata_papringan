import "../../App.css";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Body from "./Body";
import Hero from "./Hero";

const Gallery = () => {
    return (
        <div>
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
        </div>
    );
};

export default Gallery;