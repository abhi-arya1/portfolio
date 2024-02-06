"use client";

import { Home, ScrollTextIcon, Code, FlaskConical } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useScrollTop } from "@/hooks/scroll_hook";
import { cn } from "@/lib/utils";
import SocialIcons from "./social_icons";
import { Person } from "@mui/icons-material";

const Navbar = () => {
  const router = useRouter();
  const scrolled = useScrollTop();

  return (
    <div className={cn(
      "z-50 bg-[#def2f1] fixed top-0 flex flex-row justify-between items-center w-full p-2.5",
      scrolled && "border-b border-[#2b7a78] shadow-sm transition-opacity"
    )}>

      <div className="flex flex-row gap-x-2">
        <Button
        onClick={() => {router.push("/#home")}}
        className="bg-[#2b7a78] hover:bg-[#17252a] hover:text-[#def2f1]"
        >
          <Home className="h-4 w-4" />
        </Button>

        <Button
        onClick={() => {router.push("/#experience")}}
        variant="ghost"
        className="hidden md:inline-flex hover:text-[#17252a]"
        >
          <FlaskConical className="h-4 w-4" />
          <p className="pl-2">experience</p>
        </Button>

        <Button
        onClick={() => {router.push("/#projects")}}
        variant="ghost"
        className="hidden md:inline-flex hover:text-[#17252a]"
        >
          <Code className="h-4 w-4" />
          <p className="pl-2">projects</p>
        </Button>

        <Button
        onClick={() => {router.push("/#whoami")}}
        variant="ghost"
        className="hidden md:inline-flex hover:text-[#17252a]"
        >
          <Person className="h-4 w-4" />
          <p className="pl-2">about</p>
        </Button>
      </div>

      <div className="flex gap-x-2">
        <SocialIcons />
        <Button
        onClick={() => open("https://drive.google.com/file/d/1sM6VJEPz_oar718KaT88HC0niAlitGLl/view?usp=sharing")}
        className="bg-[#2b7a78] hover:bg-[#17252a] hover:text-[#def2f1]"
        >
          <ScrollTextIcon className="h-4 w-4" />
          <p className="pl-2">resume</p>
        </Button>
      </div>
    </div>
  )
}

export default Navbar;