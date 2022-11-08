import "../../App.css";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Footer from "../Footer";
import Body from "./Body";

const Tourism = () => {
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

export default Tourism;
