import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/footer";
import ContactForm from "./pages/ContactForm";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Footer />
      <ContactForm />
    </div>
  );
}

export default App;
