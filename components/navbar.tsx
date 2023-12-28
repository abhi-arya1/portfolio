import { Home } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between pt-2 pl-3 pr-3">
      <Button>
        <Home className="h-4 w-4" />
        <p className="pl-2">Home</p>
      </Button>
    </div>
  )
}

export default Navbar;