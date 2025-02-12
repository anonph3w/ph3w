import React from "react";
import './App.css'
import Navbar from "./components/Navbar";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Projects from "./components/Projects";
import HomeBlogs from "./components/HomeBlogs";

function App(){
    return(
        <>
            <div className="md:w-[50vw] m-auto w-[98vw]">
                <Navbar></Navbar>
                <Hello></Hello>
                <Message></Message>
                <Projects></Projects>
                <HomeBlogs></HomeBlogs>
            </div>
        </>
    )
}

export default App