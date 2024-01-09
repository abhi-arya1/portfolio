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
            Adaptive Markdown-based Note Taking application (inspired by Notion). 
            </p>
            <li className="arrow-li pt-2">Built User-Authentication with Clerk and a custom document structure with ConvexDB</li>
        </Box>

        <div className="p-5" />

        <Box
        title="CoPilot"
        github_link="https://github.com/abhi-arya1/copilot-avionics-module"
        technologies="Arduino, C++, Data Filtration Systems"
        >
            <p className="pb-3">
            Adaptive & Customizable Central Flight Computer built with Teensy 4.1, a 9-DoF IMU, Altimeter, and Data-Logging SD Card Module.</p> 
            <li className="arrow-li pt-2">Tuned automatic launch detection, Kalman Filters, and more data-logging systems.</li>
        </Box>

        </div> 
        </>
    );
}
 
export default Projects;