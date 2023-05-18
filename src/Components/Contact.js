import React from "react";

const Contact = () => {
    return(
        <div name='contact' className="w-full h-screen flex justify-center items-center p-4 bg-[#F5F5F5]">
            <form method="POST" action="https://getform.io/f/639d9ab3-1bfa-4492-900e-a41933cdeeea" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-[#3100e3] text-[#1e1926]">Contact</p>
                    <p className="text-[#1e1926] py-4">// Submit the form below or shoot me an email - emalberg@live.com</p>
                </div>
                <input className="p-2 border-2 border-[#3100e3] bg-[#F5F5F5] shadow-md shadow-[#3100e3]" type="text" placeholder="Name:" name="name"/>
                <input className="my-4 p-2 border-2 border-[#3100e3] bg-[#F5F5F5] shadow-md shadow-[#3100e3]" type="text" placeholder="Email:" name="email"/>
                <textarea className="p-2 border-2 border-[#3100e3] bg-[#F5F5F5] shadow-md shadow-[#3100e3]"  name="message" rows="10" placeholder="Message:"></textarea>
                <button className="text-[#3ebea8] border-[#3ebea8] border-2 shadow-md shadow-[#3ebea8] hover:bg-[#3ebea8] hover:border-[#3ebea8] hover:text-[#1e1926] px-4 py-3 my-8 mx-auto flex items-centernpm">Submit</button>
            </form>

        </div>
    );
}

export default Contact;