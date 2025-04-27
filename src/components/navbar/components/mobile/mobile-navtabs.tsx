import { useState } from "react";
import { NavTabs } from "../desktop/nav-tabs";
import { motion } from "framer-motion";

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden lg:flex">
        <NavTabs />
      </div>

      {/* Mobile Navbar */}
      <div className="flex justify-between items-center p-4 lg:hidden">
        <div>
          <button 
            className="text-black focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg 
              className="w-6 h-6" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          className="overflow-hidden bg-gray-100 lg:hidden"
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <a href="#" className="text-black text-lg" onClick={() => setIsOpen(false)}>Home</a>
            </li>
            <li>
              <a href="#about_us" className="text-black text-lg" onClick={() => setIsOpen(false)}>About Us</a>
            </li>
            <li>
              <a href="#features" className="text-black text-lg" onClick={() => setIsOpen(false)}>Features</a>
            </li>
            <li>
              <a href="#docs" className="text-black text-lg" onClick={() => setIsOpen(false)}>Docs</a>
            </li>
            <li>
              <a href="#blog" className="text-black text-lg" onClick={() => setIsOpen(false)}>Blog</a>
            </li>
          </ul>
        </motion.div>
      )}
    </>
  );
};

export default MobileNavBar;
