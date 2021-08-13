import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Flavors from "./components/Flavors";
import Inside from "./components/Inside";
import Store from "./components/Store";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Press from "./components/Press";
import Request from "./components/Request";
import "./styles/App.scss";

const App = () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/flavors" component={Flavors} />
      <Route path="/inside" component={Inside} />
      <Route path="/store" component={Store} />
      <Route path="/story" component={Story} />
      <Route path="/contact" component={Contact} />
      <Route path="/press" component={Press} />
      <Route path="/request" component={Request} />
      <Footer />
    </Router>
  );
}

export default App;
