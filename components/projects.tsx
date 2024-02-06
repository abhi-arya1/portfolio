"use client";

import { GitHub, LogoDev } from "@mui/icons-material";


const Projects = () => {
    return ( 
        <div className="flex flex-col items-center justify-center gap-y-16">
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
                <h2 className="bg-[#17252a] p-2 text-sm rounded-xl">🏆 Best Overall, IrvineHacks 2024</h2>
                <ul className="pt-3">
                    <li className="arrow-li flex items-start">
                        Details Soon...
                    </li>
                </ul>
                <div className="pt-4 flex flex-wrap gap-y-3 items-center justify-center">
                    {['Google Cloud Platform', 'React', 'ConvexDB', 'CDNs', 'LLMs'].map((item, idx) => { return (
                        <div key={idx} className="p-1">
                            <span className="bg-[#17252a] p-[0.4rem] rounded-lg">{item}</span>
                        </div>
                    )})}
                </div>
            </div>

            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row">  
                    <h1 className="font-bold text-xl pb-1">CoPilot</h1>
                    <div role="button" className="pl-5 hover:text-[#17252a] transition-colors ease-in-out" onClick={() => {window.open('https://github.com/abhi-arya1/copilot-avionics-module', '_blank')}}>
                        <GitHub />
                    </div>
                </div>
                <ul className="pt-3">
                    <li className="arrow-li flex items-start">
                        Details Soon...
                    </li>
                </ul>
                <div className="pt-4 flex flex-wrap gap-y-3 items-center justify-center">
                    {['Arduino', 'IoT', 'C++', 'FSMs', 'Communication Protocols', 'PCB Design'].map((item, idx) => { return (
                        <div key={idx} className="p-1">
                            <span className="bg-[#17252a] p-[0.4rem] rounded-lg">{item}</span>
                        </div>
                    )})}
                </div>
            </div>
        </div> 
    );
}
 
export default Projects;