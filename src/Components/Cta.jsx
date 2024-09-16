import React from "react";

import { cn } from "../lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
import { TypewriterEffect } from "./ui/Typewriter-effect.tsx";
import memoji from "./../memoji.png";

export default function Cta() {
  const words = [
    {
      text: "Hi,",
    },
    {
      text: "my",
    },
    {
      text: "name",
    },
    {
      text: "is",
    },
    {
      text: "Mahamed.",
      className: "text-blue-500",
    },
  ];

  return (
    <div className=" flex flex-col  items-center gap-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }} // Starts invisible and above
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: "easeOut",
          },
        }} // Fades in and moves to its final position
        transition={{ duration: 1, ease: "easeOut" }} // Fade-in duration and easing
      >
        <motion.img
          src={memoji} // Use the imported image
          className="h-36 md:h-56"
          initial={{ y: 0 }} // Start position
          animate={{
            y: [-10, 10], // Moves up and down between -10px and 10px
            transition: {
              repeat: Infinity, // Makes the hover effect infinite
              duration: 2, // Duration for each up-down hover loop
              ease: "easeInOut",
              repeatType: "mirror", // Alternates between up and down
            },
          }}
        />
      </motion.div>

      <div className="text-2xl font-bold flex flex-col items-center gap-6  max-w-64 text-center md:max-w-full">
        <TypewriterEffect words={words} className="text-xl" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          // style={{ fontSize: "24px", fontWeight: "bold" }}
          className="text-2xl font-normal"
        >
          and I am a Full Stack Developer!
        </motion.div>
      </div>
    </div>
  );
}
