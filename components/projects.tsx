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
        title="ZotConnect"
        github_link="https://github.com/abhi-arya1/zotconnect"
        technologies="Google Gemini, SQL, API Design"
        >
            <p className="pb-3">
            <li className="arrow-li pt-2">Engineered intelligent backend system with Convex with relational query API file upload serialization and Two-Factor Authentication.</li>
            <li className="arrow-li pt-2">Developed LLM Resume/CV Review with Google Cloud Vertex/Gemini and trained model to iteratively learn in-use</li>
            <li className="arrow-li pt-2">Deployed job application, tracking, and resume review features to full production in just 40 hours, and currently growing user base.</li>
            </p>

        </Box>
        <div className="p-5" />        

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