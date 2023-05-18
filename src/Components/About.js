import React from "react";

const About = () => {
    return(
        <div name='about' className="w-full h-screen bg-[#1e1926] text-[#F5F5F5]" >
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-[#3100e3]">About</p>
                    </div>
                    <div>
                    </div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div class='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Erich, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>I find immense joy in exploring the dynamic world of coding and staying up-to-date with the latest advancements. I believe that programming is not just a skill, but a way to bring ideas to life and make a positive impact. When I'm not diving into lines of code, you can often find me immersed in the fascinating world of 3D printing. This captivating hobby allows me to combine my creativity with technical expertise, bringing imaginative designs into tangible reality. Additionally, I am an ardent fan of all summer outdoor activities. From hiking through scenic trails to swimming in crystal-clear lakes, I embrace the opportunity to connect with nature and recharge my spirit. Combining my love for programming, 3D printing, and the great outdoors, I strive to create innovative solutions while enjoying the wonders of life around me.</p>
                    </div>    
                </div>
            </div>
        </div>
    );
}

export default About;