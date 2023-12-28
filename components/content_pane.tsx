import React from 'react';

interface ContentPaneProps {
  activePane: string;
}

const ContentPane: React.FC<ContentPaneProps> = ({ activePane }) => {

    switch (activePane) {
        case 'tc':
            return (
                <div className="w-full pl-4 break-words">
                    <h1 className="text-left text-lg font-extrabold">Lead Developer and Co-Founder @ <a className="text-[#00e9fe]">Team Cartographer</a></h1>
                    <h2 className="italic text-left pt-1 text-[#6a6a6a]">Sep 2022 -&gt; Present</h2>
                    <div className="text-left pt-4">
                        <li className="arrow-li flex items-start">
                        Coming Soon
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
                        Coming Soon
                        </li>
                    </div>
                </div>
            )
        default:
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
    }
};

export default ContentPane;
