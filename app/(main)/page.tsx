"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import hero_image from "@/public/hero_image.png"
import Projects from "@/components/projects";
import Sidebar from "@/components/sidebar";
import ContentPane from "@/components/content_pane";
import { useState } from "react";


export default function Home() {
  const IMAGE_DIMENSION = 200;
  const [activePane, setActivePane] = useState<string>('');

  return (
      <div className="flex flex-col min-h-screen font-mono">
        <Navbar />

        <div className="h-full flex flex-col items-center justify-center
        md:justify-start text-center gap-y-8 flex-1 px-6 pb-20 pt-20">

          <div className="font-extrabold text-6xl p-3">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("hi, i'm ")
                  .typeString('<span style="text-decoration: underline; color: rgb(0, 255, 0); font-weight: bold;">abhi</span>')
                  .typeString('.')
                  .callFunction(() => {
                    typewriter.stop();
                  })
                  .start();
              }}
            />
          </div>

          <div className="font-bold text-xl text-left">
            <li className="arrow-li text-[#c8d5e6]">
              computer science & engineering (b.sc.) <a className="text-slate-400">@</a> uc irvine
            </li>
            <li className="arrow-li text-slate-400">
              full stack and embedded software developer
            </li>
          </div>

          <Image
          src={hero_image}
          alt="Me!"
          id="experience"
          width={IMAGE_DIMENSION}
          height={IMAGE_DIMENSION}
          />

          <div
          className="text-3xl font-bold pt-25 underline"
          >
            experience...
          </div>

          <div className="flex p-5 w-[60%]">
              <Sidebar setActivePane={setActivePane} />
              <ContentPane activePane={activePane} />
          </div>

          <div id="projects" className="w-250">
            <Projects />
          </div>

        </div>

        <Footer />
      </div>
  )
}
