import React from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import { initialState, reducer } from './reducer';
import { StateProvider } from './StateProvider'; // <-- Make sure you've added this import

function App() {
    return (
        <StateProvider initialState={initialState} reducer={reducer}>
            <Router>
                <div className="app">
                   <Header />
                    <Routes>
                        <Route path="/checkout" element={
                            <>
                                <Checkout />
                            </>
                        } />
                        <Route path="/" element={
                            <>
                                <Home />
                            </>
                        } />
                    </Routes>
                </div>
            </Router>
        </StateProvider>
    );
}

export default App;
