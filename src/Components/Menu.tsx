import { AnimatePresence, easeOut, motion } from "framer-motion"
import { X } from "lucide-react";

function Menu({ isOpened, onClose }: { isOpened: boolean; onClose: () => void }) {
    return(
            <AnimatePresence>
            {isOpened && (
            
            <div>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: easeOut, duration: 0.4}}
            onClick={onClose} 
            className="fixed inset-0 z-50 backdrop-blur-sm" />
            
                    
                <motion.div
                initial={{ x: -1200 }}
                animate={{ x: 0 }}
                exit={{ x: -1200 }}
                transition={{ ease: easeOut, duration: 0.4 }}
                className="fixed left-0 top-0 z-100 h-screen w-200 rounded-r-2xl bg-[#F8F9FA]/40 backdrop-blur-3xl shadow-xl">
                    
                    <h1 className="font-heading text-6xl text-center mt-8">APEX</h1>
                    <X size={34} className="absolute top-4 right-4 cursor-pointer"
                    onClick={onClose} />
                    
                    <nav className="mt-20 ml-20 flex flex-col
                     items-start gap-6 font-heading text-3xl">
                        
                        <a href="#">HOME</a>
                        <a href="#">FEATURED</a>
                        <a href="#">MODELS</a>
                        <a href="#">CONTACT</a>
                    </nav>

                </motion.div>
                </div>
                    )}

                </AnimatePresence> 
            )
        }

        export default Menu;