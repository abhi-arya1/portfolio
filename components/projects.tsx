"use client";

import { GitHub, LogoDev } from "@mui/icons-material";


const Projects = () => {
    return ( 
        <div className="flex flex-col items-center justify-center gap-y-16 p-1">
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row">  
                    <h1 className="font-bold text-xl pb-1">ZotConnect</h1>
                    <div role="button" className="pl-5 hover:text-[#17252a] transition-colors ease-in-out" onClick={() => {window.open('https://github.com/abhi-arya1/zotconnect', '_blank')}}>
                        <GitHub />
                    </div>
                    <div role="button" className="pl-2 hover:text-[#17252a] transition-colors ease-in-out" onClick={() => {window.open('https://devpost.com/software/zotconnect-g6jhme', '_blank')}}>
                        <LogoDev />
                    </div>
                </div>
                <h2 className="bg-[#17252a] p-2 text-sm rounded-xl hover:bg-[#2b7a78] hover:text-white hover:underline hover:cursor-pointer transition-all ease-in-out" onClick={() => {window.open("https://devpost.com/software/zotconnect-g6jhme", '_blank')}}>🏆 Best Overall, IrvineHacks 2024</h2>
                <ul className="pt-3 md:w-2/3">
                    <li className="arrow-li flex items-start">
                    Engineered intelligent backend system with Convex with relational query API file upload serialization and Two-Factor Authentication.
                    </li>
                    <li className="arrow-li flex items-start pt-2">
                    Developed LLM Resume/CV Review with Google Cloud Vertex/Gemini and trained model to iteratively learn in-use
                    </li>
                    <li className="arrow-li flex items-start pt-2">
                    Deployed job application, tracking, and resume review features to full production in just 40 hours, and currently working with UCI ICS Council to further development of the app while growing user base.
                    </li>
                </ul>
                <div className="pt-4 flex flex-wrap gap-y-3 items-center justify-center">
                    {['Google Cloud Platform', 'React', 'ConvexDB', 'CDNs', 'LLMs'].map((item, idx) => { return (
                        <div key={idx} className="p-1">
                            <span className="bg-[#17252a] p-[0.4rem] rounded-lg hover:bg-[#2b7a78] hover:text-white hover:underline transition-all ease-in-out">{item}</span>
                        </div>
                    )})}
                </div>
            </div>

            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row">  
                    <h1 className="font-bold text-xl pb-1">Coauthor</h1>
                    <div role="button" className="pl-5 hover:text-[#17252a] transition-colors ease-in-out" onClick={() => {window.open('https://github.com/abhi-arya1/coauthor', '_blank')}}>
                        <GitHub />
                    </div>
                    <div role="button" className="pl-2 hover:text-[#17252a] transition-colors ease-in-out" onClick={() => {window.open('https://devpost.com/software/coauthor', '_blank')}}>
                        <LogoDev />
                    </div>
                </div>
                <h2 className="bg-[#17252a] p-2 text-sm rounded-xl hover:bg-[#2b7a78] hover:text-white hover:underline hover:cursor-pointer transition-all ease-in-out" onClick={() => {window.open("https://devpost.com/software/coauthor", '_blank')}}>🏆 Best First-Time Hack, SFHacks 2024</h2>
                <ul className="pt-3 md:w-2/3">
                    <li className="arrow-li flex items-start">
                    Created data pipeline with FastAPI, Convex, ngrok, Selenium, Google Gemini, and Clerk that authenticates users to push workspace
                    data to the cloud, with a Fireworks AI and Gemini custom chatbot model that trains iteratively when in use.
                    </li>
                    <li className="arrow-li flex items-start pt-2">
                    Developed workspace sharing feature using WebRTC that allows for users to collaborate in a Google-Docs-like environment, while
mantaining data security through 2FA systems.
                    </li>
                    <li className="arrow-li flex items-start pt-2">
                    Fully deployed site from end-to-end in just 40 hours.
                    </li>
                </ul>
                <div className="pt-4 flex flex-wrap gap-y-3 items-center justify-center">
                    {['FastAPI', 'AWS', 'TailwindCSS', '2FA Systems', 'ConvexDB', 'WebRTC', 'Real-Time Database System'].map((item, idx) => { return (
                        <div key={idx} className="p-1">
                            <span className="bg-[#17252a] p-[0.4rem] rounded-lg hover:bg-[#2b7a78] hover:text-white hover:underline transition-all ease-in-out">{item}</span>
                        </div>
                    )})}
                </div>
            </div>

            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row">  
                    <h1 className="font-bold text-xl pb-1">CoPilot Flight Computer </h1>
                    <div role="button" className="pl-5 hover:text-[#17252a] transition-colors ease-in-out" onClick={() => {window.open('https://github.com/abhi-arya1/copilot-avionics-module', '_blank')}}>
                        <GitHub />
                    </div>
                </div>
                <ul className="pt-3 md:w-2/3">
                    <li className="arrow-li flex items-start pt-2">
                    Developed a compact and power-efficient Central Flight Computer for amateur rocket flight, incorporating Teensy 4.1, 9-DoF IMU,
                    and Altimeter with Data Logging features, focusing on space and power efficiency.
                    </li>
                    <li className="arrow-li flex items-start pt-2">
                    Created firmware using an optimized state-machine architecture in C++, including a framework for user configuration and support
                    for various flight types.
                    </li>
                </ul>
                <div className="pt-4 flex flex-wrap gap-y-3 items-center justify-center">
                    {['Arduino', 'IoT', 'C++', 'FSMs', 'Communication Protocols', 'PCB Design'].map((item, idx) => { return (
                        <div key={idx} className="p-1">
                            <span className="bg-[#17252a] p-[0.4rem] rounded-lg hover:bg-[#2b7a78] hover:text-white hover:underline transition-all ease-in-out">{item}</span>
                        </div>
                    )})}
                </div>
            </div>

        </div> 
    );
}
 
export default Projects;