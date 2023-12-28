"use client";

import Box from "./box";

const Projects = () => {
    return ( 
        <>
        <div
        className="text-3xl font-bold pt-10 pb-2 underline"
        >
        projects...
        </div>
        <div className="flex flex-col pt-5">

        <Box
        title="Jotster"
        github_link="https://github.com/abhi-arya1/jotster"
        technologies="NextJS, Tailwind, Convex, Clerk"
        >
            <p>
            Note-taking app built with <a className="text-[#30fe00]">NextJS, TypeScript, TailwindCSS,</a>
            <a className="text-[#30fe00]">Convex, Clerk,</a> and <a className="text-[#30fe00]">Edgestore</a>
            </p>
            <li className="arrow-li italic pt-2">more info coming soon...</li>
        </Box>

        <div className="p-5" />

        <Box
        title="CoPilot"
        github_link="https://github.com/abhi-arya1/copilot-avionics-module"
        technologies="Arduino, C++, Data Filtration Systems"
        >
            <p>
            Adaptive Central Flight Computer built with <a className="text-[#30fe00]">Teensy/Arduino</a> & <a className="text-[#30fe00]">C++</a>
            </p>
            <li className="arrow-li italic pt-2">more info coming soon...</li>
        </Box>

        </div> 
        </>
    );
}
 
export default Projects;