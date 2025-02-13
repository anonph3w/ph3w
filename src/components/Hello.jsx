import React from "react";
import asciiArt from '../assets/comic.png'
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

function Hello() {
    return (
        <>
            <div className="">
                <img className="md:w-[30%] m-auto w-[70%]" src={asciiArt} alt="whitespacecoding-pfp" />
                <div className="flex align-center justify-center gap-8 my-4">
                    <a href="https://github.com/wscodingg">
                        <FaGithub className="size-7" />
                    </a>
                    <a href="mailto:whitespacecoding@gmail.com">
                        <IoIosMail className="size-7" />
                    </a>
                    <a href="https://x.com/wscoding">
                        <FaXTwitter className="size-7" />
                    </a>

                </div>
                <hr className="m-2" />
            </div>
        </>
    )
}

export default Hello