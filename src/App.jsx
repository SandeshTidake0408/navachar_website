import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Privacy from "./pages/Privacy";
// import About from "./About";
// import Contact from "./Contact";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home />} />
                {/* <Route path="/about" component={About} /> */}
                {/* <Route path="/contact" component={Contact} /> */}
                <Route path="/privacy" component={<Privacy />} />
            </Routes>
        </Router>
    );
}

export default App;
