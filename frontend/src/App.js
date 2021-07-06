import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
// import Carousel from "./components/Carousel/carousel";
import { Route, Switch} from "react-router-dom"; //route is a component
// import AboutUs from "./pages/aboutUsPage";
// import Contact from "./pages/contactUsPage";
import HomePage from "./pages/homePage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <NavBar />
       
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        {/* Exact means that the url has to only contain the path which in this case is '/'(Slash) */}
        <Route path="*" component={NotFound}></Route>
        {/* every route that is different than the defined ones will render the not found component */}
        {/* <Route path="/contact-us" component={Contact}></Route>
        <Route path="/about-us" component={AboutUs}></Route> */}
      </Switch>
    </div>
  );
}

export default App;
