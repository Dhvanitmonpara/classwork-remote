import { cn } from "@/lib/utils"
import { FaPlus, FaXmark } from "react-icons/fa6"
import { BiMessageAltDetail } from "react-icons/bi";
import { Ri24HoursFill } from "react-icons/ri";
import { TbCube3dSphere, TbView360Number } from "react-icons/tb";
import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";

function Card() {
  const [open, setOpen] = useState(true)
  return (
    <AnimatePresence>
      {open && <motion.div
        initial={{
          opacity: 0,
          scale: 0.98,
          filter: "blur(10px)"
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)"
        }}
        exit={{
          opacity: 0,
          scale: 0.98,
          filter: "blur(10px)"
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut"
        }}
        className={cn(
          "w-72 min-h-[27rem] h-[27rem] rounded-xl",
          "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
          "p-6 flex flex-col",
        )}>
        <h2 className="font-bold text-[10px]">Aceternity UI Component</h2>
        <p className="text-neutral-600 mt-2 text-[8px]">A collection of beautiful UI Components, let's get on with it.</p>
        <div className="flex item-center justify-center">
          <button
            onClick={() => setOpen(false)}
            className="flex items-center gap-1 text-[10px] mt-4 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-md px-2 py-1"
          >
            <img
              src="https://ui.aceternity.com/logo.png"
              width={50}
              alt="logo"
              height={50}
              className="h-4 w-4"
            />
            Aceternity
            <FaXmark className="w-3 h-3 text-neutral-400" />
          </button>
        </div>
        <div className="relative bg-gray-100 flex-1 mt-4 rounded-lg border border-dashed border-neutral-200">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            whileHover={{
              opacity: 1,
              scale: 1.05,
              filter: "blur(0px)",
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            className="absolute inset-0 h-full bg-white border border-neutral-200 rounded-lg divide-y divide-neutral-200">
            <MonotonousComp
              title="Aceternity UI Components"
              description="A collection of UI components."
              icon={<BiMessageAltDetail className="h-4 w-4 text-neutral-600" />}
            />
            <MonotonousComp
              title="24 hours turnaround"
              description="Super fast delivery at wrap speed."
              icon={<Ri24HoursFill className="h-4 w-4 text-neutral-600" />}
            />
            <MonotonousComp
              title="360 days all around"
              description="We're here to help you 24/7."
              icon={<TbView360Number className="h-4 w-4 text-neutral-600" />}
            />
            <MonotonousComp
              title="Some other component"
              description="Here goes another subtitle."
              icon={<TbCube3dSphere className="h-4 w-4 text-neutral-600" />}
            />
            <div
              className="flex gap-2 p-4 items-center justify-center">
              <div className="h-4 w-4 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                <FaPlus className="h-2 w-2 text-neutral-600" />
              </div>
              <div className="flex flex-col">
                <p className="text-neutral-400 text-[8px] mt-1">Create Project</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>}
    </AnimatePresence>
  )
}

function MonotonousComp({ icon, title, description }: { icon: ReactNode, title: string, description: string }) {
  return (
    <div className="flex gap-2 p-4">
      <div
        className="h-7 w-7 flex-shrink-0 bg-gradient-to-br 
            shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
            bg-white rounded-md flex items-center justify-center"
      >
        {icon}
      </div>
      <div className="flex flex-col">
        <p className="text-[8px] font-bold text-neutral-600">
          {title}
        </p>
        <p className="text-neutral-400 text-[8px] mt-1">

          {description}
        </p>
      </div>
    </div>
  )
}

export default Card