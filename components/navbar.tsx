"use client";

import { Home, ScrollTextIcon, Code, FlaskConical } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useScrollTop } from "@/hooks/scroll_hook";
import { cn } from "@/lib/utils";
import SocialIcons from "./social_icons";

const Navbar = () => {
  const router = useRouter();
  const scrolled = useScrollTop();

  return (
    <div className={cn(
      "z-50 bg-[#000000] fixed top-0 flex flex-row justify-between items-center w-full p-2.5",
      scrolled && "border-b border-[#3F3F3F] shadow-sm transition-opacity"
    )}>

      <div className="flex gap-x-2">
        <Button
        onClick={() => {router.push("/")}}
        className="bg-[#101010] hover:bg-[#1b1b1b] hover:text-[#00e9fe]"
        >
          <Home className="h-4 w-4" />
        </Button>
        <Button
        onClick={() => {router.push("/#experience")}}
        variant="ghost"
        className="hover:text-[#00e9fe]"
        >
          <FlaskConical className="h-4 w-4" />
          <p className="pl-2">experience</p>
        </Button>

        <Button
        onClick={() => {router.push("/#projects")}}
        variant="ghost"
        className="hover:text-[#00e9fe]"
        >
          <Code className="h-4 w-4" />
          <p className="pl-2">projects</p>
        </Button>
      </div>

      <div className="flex gap-x-2">
        <SocialIcons color="#00e9fe" />
        <Button
        onClick={() => open("https://drive.google.com/file/d/1sM6VJEPz_oar718KaT88HC0niAlitGLl/view?usp=sharing")}
        className="bg-[#101010] hover:bg-[#1b1b1b] hover:text-[#00e9fe]"
        >
          <ScrollTextIcon className="h-4 w-4" />
          <p className="pl-2">resume</p>
        </Button>
      </div>
    </div>
  )
}

export default Navbar;