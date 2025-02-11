import React from "react";
import './App.css'
import Navbar from "./components/Navbar";

function App(){
    return(
        <>
            <div className="md:w-[55vw] m-auto w-[98vw]">
                <Navbar></Navbar>
            </div>
        </>
    )
}

export default App