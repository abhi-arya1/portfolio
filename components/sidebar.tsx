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
        <div className="flex flex-col w-80 px-2">
            {buttons.map(button => (
                <Button
                key={button.id}
                className={`rounded-sm hover:bg-[#4700fe]/10 px-4 bg-transparent py-2 ${activeButton === button.id ? 'border-r-4 border-r-[#4700fe] text-[#00e9fe] bg-[#4700fe]/30 hover:bg-[#4700fe]/20' : 'rounded-none border-r-4 border-r-gray-900'}`}
                onClick={() => { setActivePane(button.id); setActiveButton(button.id) }}
                >
                    {button.name}
                </Button>
            ))}
        </div>
    );
    };

export default Sidebar;