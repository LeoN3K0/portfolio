import React, {useState} from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {Link} from "react-scroll";



const Nav = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return(
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1E1926] text-[#3ebea8] border-b-2 border-[#3100e3] shadow-md shadow-[#3100e3] ">
            <div>
                <h1 className="text-[#3ebea8] text-3xl italic font-bold name-logo">🐉E✝M🐉</h1>
            </div>            
        
            {/*Menu*/}
            <ul className="hidden md:flex">
                <li className="border-[#3ebea8] hover:border-b"><Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li className="border-[#3ebea8] hover:border-b"><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li className="border-[#3ebea8] hover:border-b"><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
                <li className="border-[#3ebea8] hover:border-b"><Link to="work" smooth={true} duration={500}>Work</Link></li>
                <li className="border-[#3ebea8] hover:border-b"><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>            

            {/*Hamburger*/}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>
            {/*Mobile menu*/}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#1e1926] flex flex-col justify-center items-center'}>
                <li className="py-6 tesxt-4xl border-[#3ebea8] hover:border-b"><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
                <li className="py-6 tesxt-4xl border-[#3ebea8] hover:border-b"><Link onClick={handleClick}  to="about" smooth={true} duration={500}>About</Link></li>
                <li className="py-6 tesxt-4xl border-[#3ebea8] hover:border-b"><Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li>
                <li className="py-6 tesxt-4xl border-[#3ebea8] hover:border-b"><Link onClick={handleClick} to="work" smooth={true} duration={500}>Work</Link></li>
                <li className="py-6 tesxt-4xl border-[#3ebea8] hover:border-b"><Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link></li> 
            </ul>

            {/*Social icon*/}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0 text-white">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3100e3]">
                        <a className="flex justify-between items-center w-full" href="https://www.linkedin.com/in/erich-malberg-89131445" target="_blank">
                            Linkedin <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600">
                        <a className="flex justify-between items-center w-full" href="https://github.com/LeoN3K0" target="_blank">
                            Github <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3ebea8]">
                        <a className="flex justify-between items-center w-full" href="mailto:emalberg@live.com">
                           Email  <HiOutlineMail size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600">
                        <a className="flex justify-between items-center w-full" href="https://jmp.sh/RfLMXxQR" target="_blank">
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;