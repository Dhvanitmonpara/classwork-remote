import { motion } from "motion/react"

function Content() {
  return (
    <div
      className="[perspective::1000px] [transform-style:preserve-3d] h-screen bg-neutral-900 flex items-center justify-center"
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6, 182, 212, 0.2) 0.5px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat"
      }}
    >
      <motion.button
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
          // rotate: [0,10,0], // This is how keyframe works
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
        whileHover={{
          rotateX: 25,
          rotateY: 10,
          y: -5,
          boxShadow: "0px 20px 50px rgba(8,112,184,0.7)"
        }}
        whileTap={{
          y: 0
        }}
        style={{
          translateZ: 100
        }}
        className="group relative text-neutral-500 px-12 py-4 rounded-lg bg-black shadow-[0px_1px_4px_0px_rgba(255, 255, 255, 0,1)_inset,0px_-1px_2px_0px_rgba(255, 255, 255, 0,1)_inset]">
        <span className="group-hover:text-cyan-500 transition-colors duration-300">Subscribe</span>
        <span className="absolute inset-x-0 bottom-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto"></span>
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-x-0 bottom-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[4px] w-full mx-auto blur-sm"></span>
      </motion.button>
    </div>
  )
}

export default Content