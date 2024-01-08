import React from 'react';

interface ContentPaneProps {
  activePane: string;
}

const ContentPane: React.FC<ContentPaneProps> = ({ activePane }) => {

    switch (activePane) {
        case 'tc':
            return (
                <div className="w-full pl-4 break-words">
                    <h1 className="text-left font-extrabold">Lead Developer and Co-Founder @ <a className="text-[#00e9fe]">Team Cartographer</a></h1>
                    <h2 className="italic text-left pt-1 text-[#6a6a6a]">Sep 2022 -&gt; Present</h2>
                    <div className="text-left pt-4">
                        <li className="arrow-li flex items-start">
                        Co-Founder and Lead Developer at an emerging STEM Education Nonprofit specializing in space and NASA-related coding challenges
                        to enhance STEM learning. Worked with Avionics, Web Dev, Data Science, and AR/VR.</li>
                        <li className="arrow-li flex items-start">
                        Placed Top 10 and Top 3 Nationwide in 2 NASA App and Firmware Dev Challenges, and Placed Top 500 Globally in NASA&apos;s Space Apps Challenge Hackathon
                        </li>
                        <li className="arrow-li flex items-start">
                        Responsible for team leadership, GitHub management, principal software design, project planning, fundraising, and code development.
                        </li>
                    </div>
                </div>
            )
        case 'uci-ss':
            return (
                <div className="w-full pl-4 break-words">
                    <h1 className="text-left text-lg font-extrabold">Research Intern @ <a className="text-[#00e9fe]">UCI School of Social Sciences</a></h1>
                    <h2 className="italic text-left pt-1 text-[#6a6a6a]">Jun 2022 -&gt; Aug 2022</h2>
                    <div className="text-left pt-4">
                        <li className="arrow-li flex items-start">
                        Co-authored a white paper with a group of 5 other interns to provide a comprehensive report and solutions to social prejudice and
                        explicit/implicit biases instilled in AI Models and Technological Education contrasted with historical examples
                        </li>
                    </div>
                </div>
            )
        case 'cs':
            return (
                <div className="w-full pl-4 break-words">
                    <h1 className="text-left text-lg font-extrabold">Avionics Software Engineer @ <a className="text-[#00e9fe]">UCI CubeSat</a></h1>
                    <h2 className="italic text-left pt-1 text-[#6a6a6a]">Sep 2023 -&gt; Present</h2>
                    <div className="text-left pt-4">
                        <li className="arrow-li flex items-start">
                        Led development of Quad Photodiode Sun Sensor mathematical simulations in Python and Simulink, using Spherical Vectors and Quaternions for 3D graph rendering.
                        </li>
                        <li className="arrow-li flex items-start pt-2">
                        Currently building optimized driver software for GPS and Sun Sensor modules with Radiation Mitigation strategies
                        </li>
                    </div>
                </div>
            );
        default:
            return (
                <div className="w-full pl-4 break-words">
                <h1 className="text-left text-lg font-extrabold">Project Manager & Full Stack Developer @ <a className="text-[#00e9fe]">NASA Johnson Space Center</a></h1>
                <h2 className="italic text-left pt-1 text-[#6a6a6a]">Dec 2023 -&gt; May 2024 (Current)</h2>
                <div className="text-left pt-4">
                    <li className="arrow-li flex items-start">
                        Led development of a Flask/NextJS Stack with a custom Flask Server and API to efficiently process and display data.
                    </li>
                    <li className="arrow-li flex items-start">
                        Built image processing and filtering algorithms with OpenCV/OpenAI/Python to integrate with HoloLens2 Devices for usage with NASA's Artemis Program
                    </li>
                    <li className="arrow-li flex items-start">
                        Configured build automation through Bash and Powershell Scripting cutting configuration times by over 70%.
                    </li>
                    <li className="arrow-li flex items-start">
                        Oversaw, learned, and facilitated best practices for a full software development life cycle, including coding standards, code reviews, testing, and operations.
                    </li>
                </div>
            </div>
            )
    }
};

export default ContentPane;
