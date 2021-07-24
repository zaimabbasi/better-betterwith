import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// import custom components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Flavors from "./components/Flavors";
import Inside from "./components/Inside";
import Store from "./components/Store";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Press from "./components/Press";

// import custom styles
import "./styles/App.scss";



const App = () => {
  return (
  <Router>
    <Header />
    <Route path="/" exact component={Home} />
    <Route path="/flavors" component={Flavors}></Route>
    <Route path="/inside" component={Inside}></Route>
    <Route path="/store" component={Store}></Route>
    <Route path="/story" component={Story}></Route>
    <Route path="/contact" component={Contact}></Route>
    <Route path="/press" component={Press}></Route>
    <Footer />
  </Router>
  );
}


export default App;
