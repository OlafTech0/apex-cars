
import McLaren from "../assets/mclaren.jpg"
import Corvette from "../assets/vette.jpg"
import Porsche from "../assets/porsche.jpg"
import { Pointer } from "lucide-react";

function MainPage() {
    return(
        <main className="flex min-h-screen flex-col bg-linear-to-b from-black via-zinc-800 to-black">
            <h1 className="mt-15 text-center font-heading text-6xl">FEATURED</h1>
            <p className="mt-3 text-center text-gray-300 font-basic">Selected machines. Exceptional stories.</p>

            <div className="mt-15 mb-15 flex gap-35 flex-row flex-1 items-center justify-center">

                 <div className="relative cursor-pointer">
                <img src={McLaren} className="max-h-[80vh] max-w-[90vw] w-auto object-contain
                 rounded border border-gray-500 shadow-2xl shadow-black" alt="Ferrari" />
                  <Pointer size={55} className="absolute bottom-10 right-10" />
                  </div>
                
                <div className="flex flex-col gap-16">

                <div className="relative cursor-pointer">
                <img src={Corvette} className="max-h-[30vh] max-w-[90vw] w-auto object-contain
                 rounded border border-gray-500 shadow-2xl shadow-black" alt="Corvette"  />
                 <Pointer size={55} className="absolute bottom-5 right-6" />
                 </div>

                <div className="relative cursor-pointer">
                <img src={Porsche} className="max-h-[30vh] max-w-[90vw] w-auto object-contain
                 rounded border border-gray-500 shadow-2xl shadow-black " alt="Porsche" />
                  <Pointer size={55} className="absolute bottom-5 right-6" />
                  </div>

                </div>

            </div>
        </main>
    )
}

export default MainPage;