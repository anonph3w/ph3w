import React from "react";
import musashi from '../assets/musashi.png'
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

function Hello() {
    return (
        <>
            <div className="">
                <img className="md:w-[80%] m-auto w-[90%]" src={musashi} alt="whitespacecoding-pfp" />
                <div className="flex align-center justify-center gap-8 my-4">
                    <a href="https://github.com/anonph3w" className="hover:outline-2 rounded-full active:scale-94">
                        <FaGithub className="size-7" />
                    </a>
                    {/* <a href="mailto:whitespacecoding@gmail.com">
                        <IoIosMail className="size-7" />
                    </a> */}
                    <a href="https://x.com/anonph3w" className="hover:outline-2 rounded active:scale-94">
                        <FaSquareXTwitter className="size-7" />
                    </a>

                </div>
                <hr className="m-2" />
            </div>
        </>
    )
}

export default Hello