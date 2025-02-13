import React from "react";
import './App.css'
import Navbar from "./components/Navbar";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Projects from "./components/Projects";
import HomeBlogs from "./components/HomeBlogs";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Blogs from "./components/Blogs";

// Create a layout component that includes the Navbar
const Layout = () => {
    return (
        <div className="md:w-[50vw] m-auto w-[98vw]">
            <Navbar />
            <Outlet />
        </div>
    );
};

const Home = () => {
    return (
        <>
            <Hello />
            <Message />
            <Projects />
            <HomeBlogs />
        </>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/blogs",
                element: <Blogs />
            }
        ]
    }
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;