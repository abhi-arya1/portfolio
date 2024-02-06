"use client";
import SocialIcons from "./social_icons";



const Footer = () => {

    return (
      <>
        <div className="bg-[#17252a] relative flex flex-col gap-x-5 justify-center items-center pt-10">
          <p className="text-sm pt-5">
            Built by Abhigyan Arya, {new Date().getFullYear()}
            </p>
          <div className="pt-2 pb-5"><SocialIcons /></div>
        </div>
      </>
    )
  }
  
  export default Footer;