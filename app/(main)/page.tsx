"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Typewriter from 'typewriter-effect';

import hero_image from "@/public/hero_image.png"


export default function Home() {
  const IMAGE_DIMENSION = 200;

  return (
      <div className="h-full flex flex-col">
        <Navbar />

        <div className="h-full flex flex-col items-center justify-center
        md:justify-start text-center gap-y-8 flex-1 px-6 pb-20 pt-20">

          <div className="font-extrabold text-6xl">
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
          className="text-3xl font-bold pt-15 underline"
          id="experience"
          >
            experience
          </div>

          <div id="projects">
            <div
            className="text-3xl font-bold pt-10 pb-10 underline"
            >
              projects
            </div>
            <div>
              Box 1
            </div>
          </div>


        </div>

        <Footer />
      </div>
  )
}
