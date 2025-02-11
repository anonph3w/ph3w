import React from "react";

function Navbar(){
    return(
        <>
            <div className="bg-gray-900 m-2 p-4 rounded-xl flex justify-between md:my-10 my-5">
                <a href="/"><span className="text-xl font-semibold">wscoding</span></a>

                <ul className="list flex fle-row gap-5">
                    <li><a href="" className="font-semibold text-sm">Blogs</a></li>
                    <li><a href="" className="font-semibold text-sm">Projects</a></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar