import React from "react";
import HomePage from "./pages/HomePage";
import {Routes, Route, Link} from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import CounterPage from "./pages/CounterPage";
import InputPage from "./pages/InputPage";
import UserPage from "./pages/UserPage";

const styles = {
    blank: {
        marginRight: 10,
    },
};

function App() {
    return (
        <div className="App">
            <nav>
                <Link to="/" style={styles.blank}>Home</Link>
                <Link to="/about" style={styles.blank}>About</Link>
                <Link to="/counter" style={styles.blank}>Counter</Link>
                <Link to="/input" style={styles.blank}>Input</Link>
                <Link to="/user">User</Link>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/counter" element={<CounterPage/>}/>
                <Route path="/input" element={<InputPage/>}/>
                <Route path="/user" element={<UserPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
