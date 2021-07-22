import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
// import Carousel from "./components/Carousel/carousel";
import { Route, Switch } from "react-router-dom"; //route is a component
// import AboutUs from "./pages/aboutUsPage";
// import Contact from "./pages/contactUsPage";
import ArticlesPage from "./pages/articlesPage"; 
import HomePage from "./pages/homePage";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer/footer";
import ContactForm from "./pages/ContactForm/ContactForm";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route path="/" exact component={HomePage}></Route>

        {/* Exact means that the url has to only contain the path which in this case is '/'(Slash) */}
        {/* Nothing after the slash */}

        {/* <Route path="/contact-us" component={Contact}></Route>
        <Route path="/about-us" component={AboutUs}></Route> */}

        <Route path="/contact-us" component={ContactForm}></Route>
        <Route exact path="/articles" component={ArticlesPage}></Route>
        <Route path="*" component={NotFound}></Route>
        {/* every route that is different than the defined ones will render the not found component */}
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
