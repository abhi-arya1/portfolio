"use client";

import { GitHub } from '@mui/icons-material';
import { AppWindowIcon } from 'lucide-react';
import React from 'react';

interface BoxProps {
  title: string;
  github_link: string;
  technologies: string;
  children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ title, github_link, technologies, children }: BoxProps) => {
  return (
    <div className="max-w-md mx-auto rounded-lg shadow-lg overflow-hidden">
      <div className="flex flex-row justify-between bg-[#2E2E2E] text-white text-lg font-semibold p-2">
        <div className="flex gap-x-2">
            <AppWindowIcon className="text-[#e3ff00]" />
            {title}
            <div className="text-xs font-thin text-gray-500 pt-1.5 pl-0.5 italic truncate">
              {technologies}
            </div>
        </div>
        <div
        role="button"
        onClick={() => {open(github_link)}}
        className="h-4 w-4 pr-6"
        >
            <GitHub className="hover:text-[#00f1fe]"/>
        </div>
      </div>
      <div className="p-4 bg-[#101010] text-sm">
        {children}
      </div>
    </div>
  );
};

export default Box;
