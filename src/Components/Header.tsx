import { UserRound, Menu as MenuIcon } from "lucide-react";
import { easeOut, motion } from "framer-motion";
import { useState } from "react";
import Menu from "../Components/Menu"

function Header() {
  const [isOpened, setIsOpened] = useState(false)
  return (
    <div>
      <motion.header 
      initial={{ y: -30}}
      animate={{ y: 0}}
      transition={{ duration: 0.5, ease: easeOut }}
      className="fixed left-0 right-0 top-0 z-20 grid grid-cols-3 items-center bg-black/60 px-6 py-4 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <MenuIcon onClick={() => setIsOpened(true)} className="mt-1 cursor-pointer" />
        </div>

        <h1 className="text-center font-heading text-4xl">
          APEX
        </h1>

        <UserRound className="justify-self-end" />
      </motion.header>

      <Menu isOpened={isOpened} onClose={() => setIsOpened(false)} />
    </div>
  );
}

export default Header;