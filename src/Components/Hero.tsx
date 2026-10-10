import vid from "../assets/svj.mp4"
import { motion } from "framer-motion";

function Hero() {
return(
<section className="relative h-screen overflow-hidden">
<video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" src={vid} />
<div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/10 to-transparent" />


              <div className="relative z-10 flex flex-col items-start h-full px-8 md:px-16 text-center justify-center">
                <div className="items-center">
              <h1 className="font-heading uppercase text-white text-5xl md:text-7xl leading-tight tracking-wide">
                Lamborghini<br />SVJ</h1>
                <p className="font-basic text-gray-300">The pinnacle of Lamborghini engineering</p>
                <motion.button className="bg-transparent w-60 h-13 cursor-pointer text-white py-1 px-2 rounded font-basic mt-4 border-white
                border" whileHover={{ color: "#000", backgroundColor: "#fff", }} transition={{ duration: 0.3 }}
                >DISCOVER</motion.button>
                </div>
                 </div>

                 
        </section>
)

}

export default Hero;