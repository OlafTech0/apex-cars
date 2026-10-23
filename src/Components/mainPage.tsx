
import McLaren from "../assets/mclaren.jpg"
import Corvette from "../assets/vette.jpg"
import Porsche from "../assets/porsche.jpg"
import MclarenLogo from "../assets/mclarenLogo.svg?react";
import ChevroletLogo from "../assets/chevroletLogo.png"
import PorscheLogo from "../assets/porscheLogo.svg"
import { ArrowUpRight, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useLenis } from '../useLenis';

function MainPage() {
    useLenis();
    return(
        <main className="flex min-h-screen flex-col bg-linear-to-b from-black via-zinc-800 to-black">
            <h1 className="mt-15 text-center font-heading text-6xl">FEATURED</h1>
            <p className="mt-3 text-center text-gray-300 font-basic">Selected machines. Exceptional stories.</p>

            <div className="mt-15 mb-15 flex gap-35 flex-row flex-1 items-center justify-center">

                 <motion.div
                 whileHover={{ scale: 1.03 }}
                 transition={{ duration: 0.2, ease: "easeOut" }}
                 className="group relative cursor-pointer">
                <img src={McLaren} className="max-h-[80vh] max-w-[90vw] w-auto object-contain
                 rounded border border-gray-500 transition-colors duration-200 group-hover:border-gray-200 shadow-2xl shadow-black" alt="McLaren" />
                  
                    <div className="absolute bottom-10 left-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <MclarenLogo/>
                    <h3 className="font-heading">McLaren P1</h3>
                    </div>

                    <div className="group-hover:opacity-0 transition-opacity duration-300">
                  <p className="text-zinc-400 font-basic absolute bottom-12 right-28">Hover There</p>
                  <Eye size={50} className="text-zinc-400 absolute bottom-10 right-10" />
                  </div>

                  <div className="flex items-center gap-2 text-zinc-400 absolute bottom-12 right-11 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                    <span className="font-basic text-md tracking-widest">VIEW</span>
                     <ArrowUpRight size={35} />
                     
                    </div>

                  </motion.div>
                
                <div className="flex flex-col gap-16">

                <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="group relative cursor-pointer">
                <img src={Corvette} className="max-h-[30vh] max-w-[90vw] w-auto object-contain
                 rounded border border-gray-500 transition-colors duration-200 group-hover:border-gray-200 shadow-2xl shadow-black" alt="Corvette"  />

                 
                 <div className="flex flex-row absolute bottom-10 left-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <img src={ChevroletLogo} className="w-20" />
                    <h3 className="font-heading mt-3">Chevrolet Corvette Stingray</h3>
                    </div>
                 

                 <Eye size={40} className="text-zinc-400 absolute bottom-5 right-6 group-hover:opacity-0 transition-opacity duration-300" />

                 <div className="flex items-center gap-2 text-zinc-400 absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                    <span className="font-basic text-sm tracking-widest">VIEW</span>
                     <ArrowUpRight size={20} />
                     
                    </div>
                 </motion.div>


                <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="group relative cursor-pointer">
                <img src={Porsche} className="max-h-[30vh] max-w-[90vw] w-auto object-contain
                 rounded border border-gray-500 transition-colors duration-200 group-hover:border-gray-200 shadow-2xl shadow-black " alt="Porsche" />
                    
                    <div className="flex flex-row absolute bottom-7 left-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <img src={PorscheLogo} className="w-10" />
                    <h3 className="font-heading ml-2 mt-4">Porsche 911 GT3 RS</h3>
                    </div>

                  <Eye size={40} className="text-zinc-400 absolute bottom-5 right-6 group-hover:opacity-0 transition-opacity duration-300" />
                  
                  <div className="flex items-center gap-2 text-zinc-400 absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                    <span className="font-basic text-sm tracking-widest">VIEW</span>
                     <ArrowUpRight size={20} />
                     
                    </div>

                  </motion.div>

                </div>

            </div>
        </main>
    )
}

export default MainPage;