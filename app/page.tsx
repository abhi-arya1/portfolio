import Footer from "@/components/footer";


export default function Home() {
  return (
      <div className="h-full flex flex-col">
        <div className="h-full flex flex-col items-center justify-center
        md:justify-start text-center gap-y-8 flex-1 px-6 pb-10 pt-20">
          <div className="font-extrabold text-6xl">
            Abhigyan Arya
          </div>
        </div>
        <Footer />
      </div>
  )
}
