import { useState } from "react";
import Tab from "./tab";
import { motion } from "framer-motion";

export function NavTabs () {

    const [position, setPosition] = useState({
          left: 0,
          width: 0,
          opacity: 0,
        });

    return (
        <>
            <div className="flex justify-center col-span-2 py-1">
                <ul
                    onMouseLeave={() => {
                    setPosition((pv) => ({
                        ...pv,
                        opacity: 0,
                    }));
                    }}
                    className="relative mx-auto flex items-center w-fit rounded-full bg-gray-100 p-0.5"
                >
                    <Tab setPosition={setPosition} href="#">Home</Tab>
                    <Tab setPosition={setPosition} href="#about_us">About Us</Tab>
                    <Tab setPosition={setPosition} href="#approach">Our Approach</Tab>
                    <Tab setPosition={setPosition} href="#contact_us">Contact us</Tab>
                    {/*<Tab setPosition={setPosition} href="#docs">Public Reports</Tab>
                    <Tab setPosition={setPosition} href="#blog">Blog</Tab>*/}
            
                    <motion.li
                    animate={{
                        ...position,
                    }}
                    className="absolute z-0 h-5 rounded-full bg-black md:h-8"
                    />
                </ul>
            </div>
        </>
    )
}