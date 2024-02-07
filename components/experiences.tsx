import { GitHub, LogoDev, Pages, Web } from "@mui/icons-material";
import { Sidebar } from "lucide-react";

const Experiences = () => {
    return ( 
        <div className="flex flex-col items-center justify-center gap-y-14 p-1">
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row">  
                    <h1 className="font-bold text-xl pb-1">NASA Johnson Space Center</h1>
                    <div role="button" className="pl-5 hover:text-white transition-colors ease-in-out" onClick={() => {window.open('https://github.com/Team-Cartographer/SUITS-2024-LMCC', '_blank')}}>
                        <GitHub />
                    </div>
                </div>
                <div className="flex justify-between gap-x-2 md:w-2/3">
                    <h2 className="flex md:w-2/3 underline">SUITS Full Stack Developer Intern</h2>
                    <i className="underline">Dec 2023 -{'>'} Jun 2024</i>
                </div>
                <ul className="pt-3 md:w-2/3">
                    <li className="arrow-li flex items-start">
                    Developed modern frontend UI and custom API library for a Local Mission Control App with NextJS and React in TypeScript. Managing GitHub, Code Reviews, AR Integration, and Test Automation strategies for both frontend and backend frameworks.
                    </li>
                    <li className="arrow-li flex items-start pt-2">
                    Built API Server and Data Pipeline with Flask and SQLite3 to interface with NASA Telemetry Streams for Mission Data, and building OpenCV & A* Pathfinding pipeline in Python with this server for HoloLens2 AR Devices
                    </li>
                    <li className="arrow-li flex items-start pt-2 pb-2">
                    Invited to Test Week at Johnson Space Center in May 2024 and creating research paper on Space Environment Image Processing
                    algorithms with Mentors at UC Irvine, Davis, & Merced.
                    </li>
                </ul>
                <div className="pt-4 w-2/3 flex flex-wrap gap-y-3 items-center justify-center">
                    {['REST API Development', 'Flask', 'TypeScript', 'Unity', 'C#', 'Python', 'Research', 'NextJS', 'UI/UX', 'Backend Optimization', 'Linux'].map((item, idx) => { return (
                        <div key={idx} className="p-1">
                            <span className="bg-white p-[0.4rem] rounded-lg hover:bg-[#3aafa9] hover:text-white hover:underline transition-all ease-in-out">{item}</span>
                        </div>
                    )})}
                </div>
            </div>

            <div className="flex flex-col items-center justify-center p-1">
                <div className="flex flex-row">  
                    <h1 className="font-bold text-xl pb-1">UCI CubeSat</h1>
                    <div role="button" className="pl-5 hover:text-white transition-colors ease-in-out" onClick={() => {window.open('https://projects.eng.uci.edu/projects/2023-2024/uci-cubesat', '_blank')}}>
                        <Web />
                    </div>
                </div>
                <div className="flex justify-between gap-x-2 md:w-2/3">
                    <h2 className="flex md:w-2/3 underline">Avionics SDE Intern</h2>
                    <i className="underline">Sep 2023 -{'>'} Present</i>
                </div>
                <ul className="pt-3 md:w-2/3">
                    <li className="arrow-li flex items-start">
                    Sole first-year Avionics software engineer. Worked with Linux Cross Compilation, Mathematical 3D Sims and Rendering in Python/Matlab, Driver Software in C++, and development with Raspberry Pis.
                    </li>
                    <li id='projects' className="arrow-li flex items-start pt-2">
                    Stuff in the works...coming soon...
                    </li>
                </ul>
                <div className="pt-4 w-2/3 flex flex-wrap gap-y-3 items-center justify-center">
                    {['C++', 'Operating Systems', 'Linux', 'F\' Software', 'Research', 'Raspberry Pi', 'Python', '3D Visualization'].map((item, idx) => { return (
                        <div key={idx} className="p-1">
                            <span className="bg-white p-[0.4rem] rounded-lg hover:bg-[#3aafa9] hover:text-white hover:underline transition-all ease-in-out">{item}</span>
                        </div>
                    )})}
                </div>
            </div>
        </div> 
    );
}
 
export default Experiences;