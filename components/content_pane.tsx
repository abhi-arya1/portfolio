import React from 'react';

interface ContentPaneProps {
  activePane: string;
}

const ContentPane: React.FC<ContentPaneProps> = ({ activePane }) => {

    switch (activePane) {
        case 'tc':
            return (
                <div className="p-5">
                    Team Cartographer Content
                </div>
            )
        case 'uci-ss':
            return (
                <div className="p-5">
                    UCI SocSci Content
                </div>
            )
        default:
            return (
                <div className="p-5">
                    CubeSat Content
                </div>
            );
    }
};

export default ContentPane;
