import React from "react";
import ParticlesBg from "particles-bg";
import {HiArrowNarrowRight} from 'react-icons/hi';
import {Link} from "react-scroll";

const Home = () => {
    return (
            <div name='home' className="w-full  h-screen bg-gray">
                {/*Container*/}
                <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                    <p className="text-[#3ebea8]">Hello, my name is</p>
                    <h1 className="text-4xl sm:text-7xl font-bold text-[#3100e3]" >Erich Malberg</h1>
                    <h2 className="text-3xl sm:text-7xl font-bold text-[#3100e3]">I'm a Full Stack Developer</h2>
                    <p className="text-[#1e1926] py-4 max-w-[700px]">I'm a full-stack developer specializing in building exceptional digital experiences. Currently, I'm focused on building responsive full-stack web application.</p>
                    <div>
                        <Link to="work" smooth={true} duration={500}>
                            <button className="text-[#3ebea8] group border-2 border-[#3ebea8] shadow-md shadow-[#3ebea8] px-6 py-3 my-2 flex items-center hover:bg-[#1e1926] hover:border-[#1e1926]">View Work
                                <span className="group-hover:rotate-90 duration-300">
                                    <HiArrowNarrowRight className="ml-4"/>
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>         
            </div>
    );
}

export default Home;