import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";


function HomeBlogs() {
    return (
        <>
            <p id="blogs" className="mx-2 font-mono md:text-xl flex gap-2 md:mt-15 mb-6 mt-10 items-center"> <p className="opacity-40">(recent)</p> Blogs  <IoMdArrowRoundForward /></p>

            <div className="md:mx-5 mx-7 md:text-base text-sm rounded hover:outline-1 active:scale-99 p-2">


                <Link to="/failure">
                    <p className="flex justify-between font-mono py-2"><span className="font-bold">1. Failure </span><p className="opacity-50">14 Feb 2025</p></p>
                </Link>

            </div>
        </>
    )


}


export default HomeBlogs

