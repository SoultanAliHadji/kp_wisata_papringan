import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Tourism from "./components/tourism/Tourism";
import Homestay from "./components/homestay/Homestay";
import Product from "./components/product/Product";
import Event from "./components/event/Event";
import Gallery from "./components/gallery/Gallery";

function App() {
  return (
    <div className="container md:mx-auto md:text-[14px] text-[12px]">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/tourism" component={Tourism} />
          <Route exact path="/homestay" component={Homestay} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/event" component={Event} />
          <Route exact path="/gallery" component={Gallery} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
