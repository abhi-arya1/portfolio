"use client"; 

import { Github, Linkedin, Mail, SunMediumIcon } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
    return (
      <>
        <hr/>
        <div className="flex gap-x-5 justify-between">
          <p className="text-opacity-40 text-xl pl-4 pt-6">
            © {new Date().getFullYear()} Abhigyan Arya
          </p>
          <div className="flex gap-x-2 pr-5 pt-4 pb-5">

            <Button
            onClick={() => {open("https://github.com/abhi-arya1/personal-portfolio")}}
            className="bg-slate-950 hover:bg-slate-800"
            >
                Site GitHub
            </Button>

            <Button 
            onClick={() => {open("https://www.linkedin.com/in/abhiaarya/")}}
            variant="ghost"
            >
                <Linkedin className="h-7 w-7" />
            </Button>

            <Button
            onClick={() => {open("https://github.com/abhi-arya1")}}
            variant="ghost"
            >
                <Github className="h-7 w-7" />
            </Button>

            <Button
            onClick={() => {open("mailto:abhigyaa@uci.edu")}}
            variant="ghost"
            >
                <Mail className="h-7 w-7" />
            </Button>
          </div>
        </div>
      </>
    )
  }
  
  export default Footer;