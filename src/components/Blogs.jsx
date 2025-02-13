import React from "react";
import Hello from "./Hello";
import { Link } from "react-router-dom";

function Blogs() {
    return (
        <>
            <Hello></Hello>

            {/* 2025 */}
            <div className="font-mono mx-5 mt-10">
                <h1 className="text-3xl">2025</h1>
                <hr className="w-[20%] opacity-40 my-5" />

                {/* Blog1 2025 */}
                <Link to="/failure">
                    <p className="flex justify-between my-1"><span>1. Failure </span> <p className="opacity-50">14 Feb 2025</p></p>
                    <p className="text-sm opacity-50 mx-5">rant about my failure in a college subject</p>
                </Link>
            </div>
        </>

    )
}

export default Blogs