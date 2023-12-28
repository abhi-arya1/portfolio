"use client"; 

import { Github, Linkedin, Mail, SunMediumIcon } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {

    return (
      <>
        <div className="pt-30" />
        <hr />
        <div className="flex flex-col gap-x-5 justify-center items-center">
          <p className="text-sm pt-5">
            Built by Abhigyan Arya, {new Date().getFullYear()}
          </p>
          <div className="flex gap-x-2 pr-5 pt-2 pb-5">

            <Button 
            onClick={() => {open("https://www.linkedin.com/in/abhiaarya/")}}
            variant="ghost"
            >
                <Linkedin className="h-5 w-5" />
            </Button>

            <Button
            onClick={() => {open("https://github.com/abhi-arya1")}}
            variant="ghost"
            >
                <Github className="h-5 w-5" />
            </Button>

            <Button
            onClick={() => {open("mailto:abhigyaa@uci.edu")}}
            variant="ghost"
            >
                <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </>
    )
  }
  
  export default Footer;