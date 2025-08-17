import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Home from "./Components/Home";
import Restaurent from "./Components/Restaurant";
import { BrowserRouter, Routes, Route } from "react-router";
import RestaurantMenu from "./Components/RestaurantMenu";




// Header section: Let's build it

function App(){
    
    return(
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/restaurant" element={<Restaurent/>}></Route>
        <Route path="/city/delhi/:id" element={<RestaurantMenu/>}></Route>
       </Routes>
       </BrowserRouter>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);


