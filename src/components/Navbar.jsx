import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="bg-[rgba(52,52,54,0.04)] backdrop-blur-md p-4 rounded-2xl flex justify-between md:my-10 my-4 sticky top-0 md:top-10 z-10">
            <Link to="/" className="text-xl font-mono font-extrabold">wscoding</Link>

            <ul className="list flex fle-row gap-5">
                <li><Link to="/blogs" className="font-semibold text-sm opacity-50">Blogs</Link></li>
                <li><Link to="/#projects" className="font-semibold text-sm opacity-50">Projects</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;