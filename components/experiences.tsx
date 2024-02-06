import { GitHub, LogoDev } from "@mui/icons-material";

const Experiences = () => {
    return ( 
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row">  
                    <h1 className="font-bold text-xl pb-1">NASA Johnson Space Center</h1>
                    <div role="button" className="pl-5 hover:text-white transition-colors ease-in-out" onClick={() => {window.open('https://github.com/abhi-arya1/zotconnect', '_blank')}}>
                        <GitHub />
                    </div>
                </div>
                <h2 className="">SUITS Project Manager and Full Stack Developer Intern, <i>Dec 2023 -> Jun 2024</i></h2>
                <ul className="pt-3 w-2/3">
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
                            <span className="bg-white p-[0.4rem] rounded-lg">{item}</span>
                        </div>
                    )})}
                </div>
            </div>
        </div> 
    );
}
 
export default Experiences;