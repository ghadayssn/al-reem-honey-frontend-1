import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/footer";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Footer />
      <About />
    </div>
  );
}

export default App;
