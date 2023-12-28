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
        <div className="flex flex-col pt-2">
        <Box title="Jotster" github_link="https://github.com/abhi-arya1/jotster">
            <p>
            Note-taking app built with <a className="text-[#30fe00]">NextJS, TypeScript, TailwindCSS,</a>
            <a className="text-[#30fe00]">Convex, Clerk,</a> and <a className="text-[#30fe00]">Edgestore</a>
            </p>
            <li className="arrow-li italic">more info coming soon...</li>
        </Box>

        </div> 
        </>
    );
}
 
export default Projects;