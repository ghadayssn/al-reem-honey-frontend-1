import React, { useState, useEffect } from "react";
import "./App.css";
import "./styles/productsStyle.css";
import NavBar from "./components/NavBar/NavBar";
// import Carousel from "./components/Carousel/carousel";
import { Route, Switch, withRouter } from "react-router-dom"; //route is a component
// import AboutUs from "./pages/aboutUsPage";
// import Contact from "./pages/contactUsPage";
import ArticlesPage from "./pages/articlesPage";
import HomePage from "./pages/homePage";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer/footer";
import ContactForm from "./pages/ContactForm/ContactForm";
import SignInSide from "./pages/admin/SignIn";
import Dashboard from "./pages/admin/dashboard";
function App(props) {
  const [pathName, setPathName] = useState("");
  useEffect(() => {
    setPathName(props.location.pathname);
    console.log(
      pathName.includes("admin"),
      props.location.pathname,
      "location"
    );
  });

  return (
    <div className="App">
      {!pathName.includes("admin") && <NavBar />}

      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/admin" exact component={SignInSide}></Route>
        <Route path="/admin/dashboard" exact component={Dashboard}></Route>
        {/* Exact means that the url has to only contain the path which in this case is '/'(Slash) */}
        {/* Nothing after the slash */}

        {/* <Route path="/contact-us" component={Contact}></Route>
        <Route path="/about-us" component={AboutUs}></Route> */}

        <Route path="/contact-us" component={ContactForm}></Route>
        {/* <Route path="/products" component={ProductsPage}></Route> */}
        <Route path="/articles" component={ArticlesPage}></Route>

        <Route path="*" component={NotFound}></Route>
        {/* every route that is different than the defined ones will render the not found component */}
       
      </Switch>

      {!pathName.includes("admin") && <Footer />}
    </div>
  );
}

export default withRouter(App);
