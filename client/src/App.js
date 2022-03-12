import React from 'react';
import {
    Container, Toolbar,
} from '@material-ui/core';
import Navbar from "./components/Navigation Bar/Navbar";
import Home from "./components/Home Page/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";


const App = () => {
    return(
        <BrowserRouter>
            <Container width="lg" disableGutters>
                <Navbar />
                <Toolbar/>
                <Routes>
                    <Route path = "/" exact element={<Home/>}/>
                    <Route path = "/Auth" exact element={<Auth/>}/>
                </Routes>
            </Container>
        </BrowserRouter>

    )
}

export default App;