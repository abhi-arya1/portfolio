"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import image from "@/public/image.png"
import Projects from "@/components/projects";
import Experiences from "@/components/experiences";


export default function Home() {
  const IMAGE_DIMENSION = 250;

  return (
      <div className="flex text-sm flex-col min-h-screen font-mono">
        <Navbar />

        <div id='home' className="h-full flex flex-col md:flex-row items-center justify-center pb-10 text-center gap-y-8 flex-1 px-6 pt-20">

          <div className="p-3">
            <Typewriter
            options={{
              delay: 50,
            }}
              onInit={(typewriter) => {
                typewriter.typeString('<span style="font-size: 3.75rem; line-height: 1; font-weight: 800;">hi, i\'m </span>')
                  .typeString('<span style="padding-bottom: 3rem; font-size: 3.75rem; line-height: 1; font-weight: 800; text-decoration: underline; color: rgb(23, 37, 42); font-weight: bold;">abhi</span>')
                  .typeString('<br><br><span style="font-size: 1rem; line-height: 1.75rem; padding-top: 2rem; ">CSE Student, Full Stack Developer, <br>Embedded Software Engineer</span>')
                  .typeString('.')
                  .callFunction(() => {
                    typewriter.stop();
                  })
                  .start();
              }}
            />
          </div>
          <div className="pr-8" />
          <Image
          src={image}
          alt="Me!"
          id='experience' 
          width={IMAGE_DIMENSION}
          height={IMAGE_DIMENSION}
          className="rounded-full outline outline-4 outline-[#17252a]"
          />
        </div>

        <div className="flex flex-col h-3/6 bg-[#3aafa9] text-[#17252a] p-5 pb-9">
            <h1 className="text-3xl font-bold pb-4">Experiences</h1>
            <Experiences />
        </div>

        <div id='projects' className="flex flex-col h-3/6 bg-[#2b7a78] text-white p-5 pb-9">
            <h1 className="text-3xl font-bold pb-4">Projects</h1>
            <Projects />
        </div>
        
        <div className="flex flex-col h-3/6 bg-[#17252a] text-[#feffff] p-5 pb-9">
            <h1 className="text-3xl font-bold">About Me</h1>
            <p className="p-4 w-2/3">
              Hey! My About Section is coming very soon! You can contact me via abhigyaa[AT]uci.edu until then!
            </p>
            <span className="pl-4 w-2/3">[ Please replace the <i>[AT]</i> with <i>@</i>, to prevent spam ]</span>
        </div>

        <Footer />
      </div>
  )
}
