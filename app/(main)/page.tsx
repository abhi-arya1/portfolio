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
        md:justify-start text-center gap-y-8 flex-1 px-6 pb-10 pt-20">

          <div className="font-extrabold text-6xl">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("hi, i'm<br>")
                .typeString('<span style="text-decoration: underline; font-weight: bold;">abhigyan arya</span>')
                .typeString('.')
                .callFunction(() => {
                  typewriter.stop();
                })
                .start();
            }}
          />
          </div>
          <div className="font-bold text-xl">
          • computer science & engineering student at uc irvine <br />
          • full stack and embedded software developer <br />
          </div>

          <Image
          src={hero_image}
          alt="Me!"
          width={IMAGE_DIMENSION}
          height={IMAGE_DIMENSION}
          />

          <div
          className="text-3xl font-bold pt-20 underline"
          id="projects"
          >
            projects
          </div>

        </div>

        <Footer />
      </div>
  )
}
