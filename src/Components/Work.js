import React from "react";
import robotFriends from '../Assets/robots.jpg';
import faceDetection from '../Assets/Face.png';
import emailGenerator from '../Assets/email.jpg';
import emailDemo from '../Assets/email_manager.jar';

const Work = () => {
    return(
        <div name='work' className="w-full md:h-screen text-[#F5F5F5] bg-[#1e1926]" >
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-[#3100e3]">Work</p>
                    <p className="py-6">// Check out some of my recent work</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div style={{backgroundImage: `url(${robotFriends})`}} 
                    className="shadow-lg shadow-[#F5F5F5] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-[#F5F5F5] tracking-wider">
                                Robo Friends
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://leon3k0.github.io/robofriends/" target="_blank">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#F5F5F5] text-[#1e1926] font-bold text-lg">Demo</button>
                                </a>
                                <a href="https://github.com/LeoN3K0/robofriends" target="_blank">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#F5F5F5] text-[#1e1926] font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${faceDetection})`}} 
                    className="shadow-lg shadow-[#F5F5F5] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-[#F5F5F5] tracking-wider">
                                Smart Image-Face Detection
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://leon3k0.github.io/smartimg/" target="_blank">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#F5F5F5] text-[#1e1926] font-bold text-lg">Demo</button>
                                </a>
                                <a href="https://github.com/LeoN3K0/smartimg" target="_blank">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#F5F5F5] text-[#1e1926] font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${emailGenerator})`}} 
                    className="shadow-lg shadow-[#F5F5F5] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-[#F5F5F5] tracking-wider">
                                New Hire Email Manager
                            </span>
                            <div className="pt-8 text-center">
                                <a href={emailDemo} download="Email_Demo.jar" target="_blank">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#F5F5F5] text-[#1e1926] font-bold text-lg">Demo Download</button>
                                </a>
                                <a href="https://github.com/LeoN3K0/email_manager" target="_blank">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#F5F5F5] text-[#1e1926] font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;