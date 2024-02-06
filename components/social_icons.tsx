"use client";

import { Button } from "./ui/button";
import { GitHub, LinkedIn, Mail } from "@mui/icons-material";


const SocialIcons = () => {
    return ( 
        <div className="flex flex-row gap-x-0">

            <Button 
            onClick={() => {open("https://www.linkedin.com/in/abhiaarya/")}}
            variant="ghost"
            className={`hover:text-[#17252a]`}
            >
                <LinkedIn className="h-5 w-5" />
            </Button>

            <Button
            onClick={() => {open("https://github.com/abhi-arya1")}}
            variant="ghost"
            className={`hover:text-[#17252a]`}
            >
                <GitHub className="h-5 w-5" />
            </Button>

            <Button
            onClick={() => {open("mailto:abhigyaa@uci.edu")}}
            variant="ghost"
            className={`hover:text-[#17252a]`}
            >
                <Mail className="h-5 w-5" />
            </Button>
            
          </div>
     );
}
 
export default SocialIcons;