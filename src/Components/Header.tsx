import { UserRound, Menu } from "lucide-react";
import { easeOut, motion } from "framer-motion";

function Header() {
  return (
    <motion.header 
    initial={{ y: -30}}
    animate={{ y: 0}}
    transition={{ duration: 0.5, ease: easeOut }}
    className="sticky top-0 z-50 grid grid-cols-3 items-center bg-black/60 px-6 py-4 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <Menu className="mt-1 cursor-pointer"/>
      </div>

      <h1 className="text-center font-heading text-4xl">
        APEX
      </h1>

      <UserRound className="justify-self-end" />
    </motion.header>
  );
}

export default Header;