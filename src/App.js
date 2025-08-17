import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {BrowserrRouter,Route,Routes} from "react-router"
import Home from "./Components/Home";
import Restaurent from "./Components/Restaurant";




// Header section: Let's build it

function App(){
    
    return(
       <BrowserrRouter>
       <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/restaurant" element={<Restaurent/>}></Route>
        <Route ></Route>
       </Routes>
       </BrowserrRouter>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);


