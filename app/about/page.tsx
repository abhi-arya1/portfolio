import Footer from "@/components/footer";
import Navbar from "@/components/navbar";


export default function Home() {
  return (
      <div className="h-full flex flex-col">
        <Navbar />

        <div className="h-full flex flex-col items-center justify-center
        md:justify-start text-center gap-y-8 flex-1 px-6 pb-10 pt-20">
          About Me
        </div>
        
        <Footer />
      </div>
  )
}
