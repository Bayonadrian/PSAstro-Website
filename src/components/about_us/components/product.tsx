import { motion } from "framer-motion";

function Product() {
    return (
        <div className="w-full max-w-6xl mx-auto text-center text-4xl text-stone-700 font-semibold py-8 relative">
            <p>
                The Polysight is a platform built for businesses navigating geopolitical complexity.
                Automate geopolitical risk assessments, monitor global trends, and access actionable intelligence—all in one streamlined interface.
            </p>

            <br />
            
            <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 w-[99%] max-w-7xl h-[10px] bg-neutral-700"
                transition={{
                    duration: 6,
                    repeatDelay: 6,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                animate={{
                    scale: [1, 0.1, 0.1, 1],
                    //rotate: [0, 0, 0, 0, 90, 0]
                    //borderRadius: ["0%", "10%", "10%", "0%"]
                }}
            />

            <br />
            
            <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 w-[70px] h-[70px] bg-neutral-700"
                transition={{
                    duration: 6,
                    repeatDelay: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                animate={{
                    scale: [1, 0.5, 0.2, 0.5, 1],
                    rotate: [0, 45, 90, 180, 0],
                    borderRadius: ["10%", "50%", "50%", "10%", "10%"]
                }}
            />

        </div>
    );
}

export default Product
