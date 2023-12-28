"use client";

import { AppWindowIcon, GithubIcon } from 'lucide-react';
import React from 'react';

interface BoxProps {
  title: string;
  github_link: string;
  children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ title, github_link, children }: BoxProps) => {
  return (
    <div className="max-w-md mx-auto rounded-lg shadow-lg overflow-hidden">
      <div className="flex flex-row justify-between bg-[#2E2E2E] text-white text-lg font-semibold p-2">
        <div className="flex gap-x-2">
            <AppWindowIcon />
            {title}
        </div>
        <div
        role="button"
        onClick={() => {open(github_link)}}
        className="h-4 w-4 pr-6"
        >
            <GithubIcon className="hover:text-[#0055fe]"/>
        </div>
      </div>
      <div className="p-4 bg-[#101010] text-sm">
        {children}
      </div>
    </div>
  );
};

export default Box;
