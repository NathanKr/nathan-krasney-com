import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import Top from "./Top.js";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App ">
        <div className="container">
          <Top />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
