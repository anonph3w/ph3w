import React from "react";
import './App.css'
import Navbar from "./components/Navbar";
import Hello from "./components/Hello";
import Message from "./components/Message";


function App(){
    return(
        <>
            <div className="md:w-[50vw] m-auto w-[98vw] text-center">
                <Navbar></Navbar>
                <Hello></Hello>
                <Message></Message>
            </div>
        </>
    )
}

export default App