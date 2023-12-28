import React, { useState } from 'react';
import { Button } from './ui/button';

interface SidebarProps {
  setActivePane: (pane: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setActivePane }) => {
    const [activeButton, setActiveButton] = useState<string | null>('cs');

    const buttons = [
        { id: 'cs', name: 'UCI CubeSat' },
        { id: 'tc', name: 'Team Cartographer' },
        { id: 'uci-ss', name: 'UCI School of Social Sciences' },
    ]
    
    return (
        <div className="flex flex-col w-80 px-2 truncate">
            {buttons.map(button => (
                <Button
                key={button.id}
                className={`hover:bg-gray-800 px-4 bg-transparent underline py-2 rounded-none ${activeButton === button.id ? 'border-r-4 border-r-[#4700fe] bg-gray-800 hover:bg-gray-900' : 'rounded-none border-r-4 border-r-gray-900'}`}
                onClick={() => { setActivePane(button.id); setActiveButton(button.id) }}
                >
                    {button.name}
                </Button>
            ))}
        </div>
    );
    };

export default Sidebar;