import "../../App.css";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Body from "./Body";
import Footer from "../Footer";

const Event = () => {
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

export default Event;