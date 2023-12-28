"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import hero_image from "@/public/hero_image.png"
import Projects from "@/components/projects";


export default function Home() {
  const IMAGE_DIMENSION = 200;

  return (
      <div className="flex flex-col min-h-screen">
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
          <div className="font-bold text-xl">
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
          width={IMAGE_DIMENSION}
          height={IMAGE_DIMENSION}
          />

          <div
          className="text-3xl font-bold pt-25 underline"
          id="experience"
          >
            experience...
          </div>
          <p className="italic">
            coming soon...
          </p>

          <div id="projects">
            <Projects />
          </div>


        </div>

        <Footer />
      </div>
  )
}
