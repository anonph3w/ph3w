import React from "react";

function Navbar(){
    return(
        <>
            <div className="bg-[rgba(52,52,54,0.04)] backdrop-blur-md p-4 rounded-2xl flex justify-between md:my-10 my-4 sticky top-0 md:top-10 z-10">
                <a href="/"><span className="text-xl font-semibold">wscoding</span></a>

                <ul className="list flex fle-row gap-5">
                    <li><a href="" className="font-semibold text-sm">Blogs</a></li>
                    <li><a href="#projects" className="font-semibold text-sm">Projects</a></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar