import React from "react";
import CSS from '../Assets/css.png';
import HTML from '../Assets/html.png';
import JavaScript from '../Assets/javascript.png';
import ReactIMG from '../Assets/react.png';
import JavaIMG from '../Assets/java.png';

const Skills = () => {
    return(
        <div name='skills' className="w-full h-screen bg-[#F5F5F5] text-[#1e1926]" >
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-[#3100e3]">Skills</p>
                    <p className="py-4">// These are the technologies I've worked with</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    <div className="shadow-md shadow-[#3100e3] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
                        <p className="my-4">HTML</p>
                    </div>
                    <div className="shadow-md shadow-[#3100e3] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
                        <p className="my-4">CSS</p>
                    </div>
                    <div className="shadow-md shadow-[#3100e3] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={JavaScript} alt="JavaScript icon" />
                        <p className="my-4">JavaScript</p>
                    </div>
                    <div className="shadow-md shadow-[#3100e3] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={ReactIMG} alt="React icon" />
                        <p className="my-4">React</p>
                    </div>
                    <div className="shadow-md shadow-[#3100e3] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={JavaIMG} alt="Java icon" />
                        <p className="my-4">Java</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;