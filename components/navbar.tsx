"use client";

import { Home, ScrollTextIcon, Smile } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="flex flex-row justify-between pt-2 pl-2 pr-2">
      <Button
      onClick={() => {router.push("/")}}
      >
        <Home className="h-4 w-4" />
        <p className="pl-1">home</p>
      </Button>

      <div className="flex gap-x-2">
        <Button
        onClick={() => {router.push("/about")}}
        >
          <Smile className="h-4 w-4" />
          <p className="pl-1">about me</p>
        </Button>

        <Button
        onClick={() => open("https://drive.google.com/file/d/1sM6VJEPz_oar718KaT88HC0niAlitGLl/view?usp=sharing")}
        >
          <ScrollTextIcon className="h-4 w-4" />
          <p className="pl-1">resume</p>
        </Button>
      </div>
    </div>
  )
}

export default Navbar;