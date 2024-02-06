"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import image from "@/public/image.png"
import adc from "@/public/adc.png"
import zotconnect from "@/public/zotconnect.png"
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
            <h1 className="text-3xl font-bold pb-4">experiences...</h1>
            <Experiences />
        </div>

        <div id='projects' className="flex flex-col h-3/6 bg-[#2b7a78] text-white p-5 pb-9">
            <h1 className="text-3xl font-bold pb-4">projects...</h1>
            <Projects />
        </div>
        
        <div id='whoami' className="flex flex-col h-3/6 bg-[#17252a] text-[#feffff] p-5 pb-9">
            <h1 className="text-3xl font-bold">~$ whoami</h1>
            <p className="p-4 w-2/3">
              Hey! I&apos;m Abhi, a First-Year CSE Student at the University of California, Irvine. 
              I&apos;ve got extensive experience both with full stack frameworks such as Flask, NodeJS, NextJS, etc. 
              I also have worked extensively with embedded software development in C++, as well as 3D Data Visualizations in Python!
              I&apos;m a motivated learner and eager to expand my horizons whenever I get the chance!<br/><br/>
              Want to chat? You can contact me via abhigyaa[AT]uci.edu!
            </p>
            <span className="pl-4 w-2/3">[ Please replace the <i>[AT]</i> with <i>@</i>, to prevent spam ]</span>
            <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-y-8 gap-x-4">
              <div className="flex flex-col items-start justify-start">
                <Image 
                className="rounded-3xl"
                src={adc}
                width={300}
                height={300}
                alt="ADC"
                />
                <p className="text-muted-foreground text-xs pt-2 pl-4">Johnson Space Center, April 2023</p>
              </div>
              <div className="flex flex-col items-start justify-start">
                <Image 
                className="rounded-3xl"
                src={zotconnect}
                width={405}
                height={300}
                alt="ZotConnect"
                />
                <p className="text-muted-foreground text-xs pt-2 pl-4">IrvineHacks, January 2024</p>
              </div>
            </div>
        </div>

        <Footer />
      </div>
  )
}
