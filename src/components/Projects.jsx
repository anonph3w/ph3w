import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaPython } from "react-icons/fa";



function Projects(){
    return(
        <>
            <p id="projects" className="mx-2 font-mono md:text-xl flex gap-2 md:my-15 my-10 items-center"> <p className="opacity-40">(curated)</p> Projects  <IoMdArrowRoundForward /></p> 

            <div className="mx-5 flex gap-2 flex-wrap">  {/* make sure to add justify-center after adding 2 or more projects*/}
                <a href="https://github.com/wscodingg/FlappyBird" target="_blank" className="card font-mono py-5 bg-gray-950 px-4 my-2 rounded hover:cursor-pointer md:w-[32%] w-[100%]">
                    <div>
                        <p>FlappyBird</p>
                        <p className="text-sm">2D arcade game</p>
                        <p className="flex text-sm my-1 items-center gap-2 border-s px-2 py-1 rounded opacity-40"> <FaPython /> python</p>
                    </div>
                </a>

                

                

            </div>
        </>
    )
}

export default Projects