import Footer from "@/components/footer";
import Navbar from "@/components/navbar";


export default function Home() {
  return (
      <div className="h-full flex flex-col">
        <Navbar />

        <div>
            About Me
        </div>
        
        <Footer />
      </div>
  )
}
