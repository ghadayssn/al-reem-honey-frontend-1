import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Carousel from "./components/Carousel/carousel";
import { Route,Switch} from "react-router-dom";
import AboutUs from "./pages/about"
function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
      <Route path="/">
        <Carousel />
      </Route>
      <Route path="/about-us">
        <AboutUs />
      </Route>
      </Switch>
      
    </div>
  );
}

export default App;
