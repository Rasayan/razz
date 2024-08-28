"use client";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const introHeaderVariants = {
  hide: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function HomeAbout() {
  return (
    <div className="w-full min-h-screen md:h-[150vh] flex flex-col items-center justify-start bg-zinc-950 text-white relative py-10 md:py-0 px-4 md:px-0">
      <h2 className="text-4xl font-bold z-40 mb-8 md:mb-0 md:absolute md:top-1/4 border-b-2 border-white">
        About me
      </h2>

      <div className="w-full h-screen flex flex-col md:flex-row justify-center items-end gap-6 md:absolute md:z-20 md:bottom-1/4">
        <motion.div
          className="w-full md:w-[28%] h-48 md:h-[75%] bg-gradient-to-br from-violet-600 to-indigo-600 rounded-3xl border-2 border-violet-400 p-4 md:p-0"
          initial="hide"
          animate="show"
          exit="hide"
          variants={introHeaderVariants}
          // viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-[5em] font-bold md:ml-4 md:mt-4 md:mb-[-0.5em] leading-tight">
            Web
          </h2>
          <h2 className="text-3xl md:text-[5em] font-bold md:ml-4 md:mt-0 leading-tight">
            Developer
          </h2>
        </motion.div>

        <div className="w-full md:w-[50%] h-48 md:h-[37%] bg-gradient-to-bl from-emerald-500 to-emerald-900 rounded-3xl border-2 border-emerald-400 p-4 md:p-0">
          <h2 className="text-3xl md:text-[5em] font-bold md:ml-4 md:mt-4 md:mb-[-0.5em] leading-tight">
            Graduation
          </h2>
        </div>

        <div className="w-full md:w-[28%] md:h-3/4 flex flex-col gap-6 md:gap-0 md:justify-around md:items-center">
          <div className="w-full h-48 md:h-[49%] bg-gradient-to-br from-red-500 to-orange-500 rounded-3xl border-2 border-orange-300 p-4 md:p-0">
            <h2 className="text-3xl md:text-[4em] font-bold md:ml-4 md:mt-4 md:mb-[-0.5em] leading-tight">
              Blockchain Developer
            </h2>
          </div>

          <div className="w-full h-48 md:h-[49%] bg-gradient-to-tl from-cyan-500 to-blue-500 rounded-3xl border-2 border-blue-300 p-4 md:p-0">
            <h2 className="text-3xl md:text-[4em] font-bold md:ml-4 md:mt-4 md:mb-[-0.5em] leading-tight">
              AI/ML Enthusiast
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
