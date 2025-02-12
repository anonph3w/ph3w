import React from "react";

function Navbar(){
    return(
        <>
            <div className="bg-[rgba(52,52,54,0.04)] backdrop-blur-md p-4 rounded-2xl flex justify-between md:my-10 my-4 sticky top-0 md:top-10 z-10">
                <a href="/"><p className="text-xl font-mono font-extrabold">wscoding</p></a>

                <ul className="list flex fle-row gap-5">
                    <li><a href="" className="font-semibold text-sm opacity-50">Blogs</a></li>
                    <li><a href="#projects" className="font-semibold text-sm opacity-50">Projects</a></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar