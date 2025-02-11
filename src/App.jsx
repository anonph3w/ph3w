import React from "react";
import './App.css'
import Navbar from "./components/Navbar";
import Hello from "./components/Hello";

function App(){
    return(
        <>
            <div className="md:w-[55vw] m-auto w-[98vw]">
                <Navbar></Navbar>
                <Hello></Hello>
            </div>
        </>
    )
}

export default App