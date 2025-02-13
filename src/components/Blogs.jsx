import React from "react";
import Hello from "./Hello";

function Blogs(){
    return(
        <>
            <Hello></Hello>

            {/* 2025 */}
            <div className="font-mono mx-5 mt-10">
                <h1 className="text-3xl">2025</h1>
                <hr className="w-[20%] opacity-40 my-5"/>

                {/* Blog1 2025 */}
                <p className="flex justify-between my-1"><span>1. Copium </span> <p className="opacity-50">21 Jan 2025</p></p>
                <p className="text-sm opacity-50 mx-5">small yap about how i use to cope</p>

                <br />

                {/* Blog2 2025 */}
                <p className="flex justify-between my-1"><span>2. Failure </span> <p className="opacity-50">14 Feb 2025</p></p>
                <p className="text-sm opacity-50 mx-5">failed in semester subject</p>
            </div>
        </>

    )
}

export default Blogs