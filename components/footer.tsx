"use client"; 

import { Button } from "./ui/button";
import { GitHub, LinkedIn, Mail } from "@mui/icons-material";

const Footer = () => {

    return (
      <>
        <div className="relative flex flex-col gap-x-5 justify-center items-center pt-10">
          <p className="text-sm pt-5">
            Built by Abhigyan Arya, {new Date().getFullYear()}
            </p>
          <div className="flex flex-row gap-x-2 pt-2 pb-5">

            <Button 
            onClick={() => {open("https://www.linkedin.com/in/abhiaarya/")}}
            variant="ghost"
            className="hover:text-[#006efe]"
            >
                <LinkedIn className="h-5 w-5" />
            </Button>

            <Button
            onClick={() => {open("https://github.com/abhi-arya1")}}
            variant="ghost"
            className="hover:text-[#006efe]"
            >
                <GitHub className="h-5 w-5" />
            </Button>

            <Button
            onClick={() => {open("mailto:abhigyaa@uci.edu")}}
            variant="ghost"
            className="hover:text-[#006efe]"
            >
                <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </>
    )
  }
  
  export default Footer;