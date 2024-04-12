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
                <li className="arrow-li flex items-start">Developed custom API library, database, and server to interact with multiple devices and GPS sensor data via a Raspberry Pi, as
                well as UI/UX design for Mixed Reality in Unity.</li>
                <li className="arrow-li flex items-start pt-2">Used Windows Device Portal API to create image dataset generation pipeline for Classifier-based Environemental Glare Reduction.</li>
                <li className="arrow-li flex items-start pt-2 ">Developed Shell (Bash) and Powershell scripts to expedite deployment of app environment for Windows, MacOS, and Linux.</li>
                <li className="arrow-li flex items-start pt-2 ">Managing GitHub, Code Reviews, AR Integration, and Test Automation strategies for both frontend and backend frameworks.</li>
                <li className="arrow-li flex items-start pt-2 pb-2"> Invited to Test Week at Johnson Space Center in May 2024 and creating research paper on Space Environment Image Processing
                algorithms with Mentors at UC Irvine, Davis, & Merced.</li>
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
                    <h2 className="flex md:w-2/3 underline">Avionics Lead</h2>
                    <i className="underline">Sep 2023 -{'>'} Present</i>
                </div>
                <ul className="pt-3 md:w-2/3">
                <li className="arrow-li flex items-start">Leading team of 12 engineers working on a 2U CubeSat, working towards preparing it for launch by 2027, through holding meetings
                and labs weekly. Employed Agile project management system to keep development on-track.
                </li>
                <li className="arrow-li flex items-start pt-2">
                Designed Raspberry Pi Cross Compilation Framework with Docker and Bash to reduce platform compatability issues and streamline
                software development lifecycle, while working on embedded sensor software with C++
                </li>
                <li className="arrow-li flex items-start pt-2">
                    Created GitHub workflow with pre-commit hooks and static testing to incorporate redundancy in production/launch-prepared
                software, and urrently working on Golang scripts to expedite static testing suites.
                </li>
                </ul>
                <div id="projects" className="pt-4 w-2/3 flex flex-wrap gap-y-3 items-center justify-center">
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