"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ISSAnimation() {
  // Random blinking lights
  const [lights, setLights] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLights(Array.from({ length: 5 }, () => Math.random()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const solarPanelVariants = {
    animate: {
      rotateX: [0, 15, 0, -15, 0],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-1, 1, -1],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden bg-white border-2 border-black p-4">
      {/* Background Grid Grid */}
      <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] opacity-10 pointer-events-none">
        {Array.from({ length: 400 }).map((_, i) => (
          <div key={i} className="border-[0.5px] border-black" />
        ))}
      </div>

      {/* Schematic Lines / HUD elements */}
      <motion.div
        className="absolute top-4 left-4 w-32 h-32 border-l-2 border-t-2 border-black opacity-50"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-4 right-4 w-32 h-32 border-r-2 border-b-2 border-black opacity-50"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />
      
      {/* Scanning Line */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-primary/50 z-20"
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Main Container */}
      <motion.div
        className="relative w-full h-full flex items-center justify-center perspective-1000"
        variants={floatVariants}
        animate="animate"
        style={{ perspective: "1000px" }}
      >
        <svg
          viewBox="0 0 800 600"
          className="w-full h-full drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
          style={{ overflow: "visible" }}
        >
          {/* --- DEFINITIONS --- */}
          <defs>
            <pattern id="solar-grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <rect width="10" height="10" fill="white" stroke="black" strokeWidth="1" />
              <rect x="2" y="2" width="6" height="6" fill="#00FFFF" opacity="0.2" />
            </pattern>
            <pattern id="hatch-grid" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="8" stroke="black" strokeWidth="1" />
            </pattern>
          </defs>

          {/* --- TRUSS STRUCTURE (The Spine) --- */}
          <motion.g transform="translate(400, 300)">
            {/* Central Truss */}
            <rect x="-250" y="-10" width="500" height="20" fill="white" stroke="black" strokeWidth="3" />
            <line x1="-250" y1="0" x2="250" y2="0" stroke="black" strokeWidth="1" strokeDasharray="5 5" />
            
            {/* Truss Segments Details */}
            {[-200, -100, 0, 100, 200].map((x, i) => (
              <g key={i} transform={`translate(${x}, 0)`}>
                <rect x="-10" y="-15" width="20" height="30" fill="white" stroke="black" strokeWidth="2" />
                <circle cx="0" cy="0" r="3" fill={i % 2 === 0 ? "#FF00FF" : "#00FFFF"} />
              </g>
            ))}

            {/* --- SOLAR ARRAYS (Right Side) --- */}
            <motion.g transform="translate(300, 0)">
               {/* Connector */}
               <line x1="-50" y1="0" x2="0" y2="0" stroke="black" strokeWidth="4" />
               <circle cx="0" cy="0" r="10" fill="white" stroke="black" strokeWidth="3" />
               
               {/* Upper Wing */}
               <motion.g
                 animate={{ rotateX: [0, 10, 0, -10, 0] }}
                 transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
               >
                 <rect x="-60" y="-180" width="120" height="160" fill="url(#solar-grid)" stroke="black" strokeWidth="3" />
                 {/* Tech details on wing */}
                 <path d="M -60 -100 L 60 -100" stroke="black" strokeWidth="2" />
                 <rect x="-65" y="-185" width="10" height="10" fill="#FF00FF" />
                 <rect x="55" y="-25" width="10" height="10" fill="#00FFFF" />
               </motion.g>

               {/* Lower Wing */}
               <motion.g
                 animate={{ rotateX: [0, 10, 0, -10, 0] }}
                 transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 0.5 }}
               >
                 <rect x="-60" y="20" width="120" height="160" fill="url(#solar-grid)" stroke="black" strokeWidth="3" />
                 <path d="M -60 100 L 60 100" stroke="black" strokeWidth="2" />
               </motion.g>
            </motion.g>

            {/* --- SOLAR ARRAYS (Left Side) --- */}
            <motion.g transform="translate(-300, 0)">
               {/* Connector */}
               <line x1="50" y1="0" x2="0" y2="0" stroke="black" strokeWidth="4" />
               <circle cx="0" cy="0" r="10" fill="white" stroke="black" strokeWidth="3" />
               
               {/* Upper Wing */}
               <motion.g
                 animate={{ rotateX: [0, 10, 0, -10, 0] }}
                 transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 1 }}
               >
                 <rect x="-60" y="-180" width="120" height="160" fill="url(#solar-grid)" stroke="black" strokeWidth="3" />
                 <path d="M -60 -100 L 60 -100" stroke="black" strokeWidth="2" />
               </motion.g>

               {/* Lower Wing */}
               <motion.g
                 animate={{ rotateX: [0, 10, 0, -10, 0] }}
                 transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 1.5 }}
               >
                 <rect x="-60" y="20" width="120" height="160" fill="url(#solar-grid)" stroke="black" strokeWidth="3" />
                 <path d="M -60 100 L 60 100" stroke="black" strokeWidth="2" />
                  <rect x="-65" y="175" width="10" height="10" fill="#FF00FF" />
                 <rect x="55" y="15" width="10" height="10" fill="#00FFFF" />
               </motion.g>
            </motion.g>

            {/* --- RADIATORS (Top/Bottom Center) --- */}
            <motion.g transform="translate(-100, -60)">
                <rect x="0" y="0" width="80" height="40" fill="white" stroke="black" strokeWidth="2" />
                {/* Zigzag pattern */}
                <path d="M 10 20 L 20 10 L 30 20 L 40 10 L 50 20 L 60 10 L 70 20" fill="none" stroke="black" strokeWidth="2" />
            </motion.g>

             {/* --- CENTRAL MODULES (Vertical Stack) --- */}
            <motion.g transform="translate(0, 20)">
                {/* Module 1 (Top) */}
                <rect x="-30" y="0" width="60" height="80" rx="5" fill="white" stroke="black" strokeWidth="3" />
                <rect x="-20" y="10" width="40" height="5" fill="#FF00FF" stroke="none" />
                <line x1="-30" y1="40" x2="30" y2="40" stroke="black" strokeWidth="2" />
                
                {/* Module 2 (Middle - Node) */}
                <circle cx="0" cy="90" r="35" fill="white" stroke="black" strokeWidth="3" />
                <circle cx="0" cy="90" r="15" fill="none" stroke="black" strokeWidth="1" strokeDasharray="3 3" />
                
                {/* Docked Spacecraft (Left) */}
                <path d="M -35 90 L -80 70 L -80 110 Z" fill="white" stroke="black" strokeWidth="3" />
                 <rect x="-75" y="85" width="10" height="10" fill="#00FFFF" />
                
                 {/* Docked Spacecraft (Right) */}
                <path d="M 35 90 L 80 70 L 80 110 Z" fill="white" stroke="black" strokeWidth="3" />

                {/* Module 3 (Bottom) */}
                <rect x="-25" y="125" width="50" height="70" rx="5" fill="url(#hatch-grid)" stroke="black" strokeWidth="3" />
                 <rect x="-35" y="150" width="10" height="20" fill="black" />
                 <rect x="25" y="150" width="10" height="20" fill="black" />
            </motion.g>
          </motion.g>

          {/* --- FLOATING PARTICLES / DEBRIS / SATELLITES --- */}
          {Array.from({ length: 5 }).map((_, i) => (
             <motion.g key={i}>
                <motion.circle 
                    r={2 + Math.random() * 3} 
                    fill="black" 
                    initial={{ x: Math.random() * 800, y: Math.random() * 600 }}
                    animate={{ 
                        x: [Math.random() * 800, Math.random() * 800], 
                        y: [Math.random() * 600, Math.random() * 600] 
                    }}
                    transition={{ duration: 20 + Math.random() * 10, repeat: Infinity, ease: "linear" }}
                />
             </motion.g>
          ))}

          {/* --- DATA OVERLAYS --- */}
          <g transform="translate(50, 500)">
             <rect x="0" y="0" width="150" height="60" fill="white" stroke="black" strokeWidth="2" />
             <text x="10" y="25" fontFamily="monospace" fontSize="12" fill="black" fontWeight="bold">SYS_STATUS: NOMINAL</text>
             <text x="10" y="45" fontFamily="monospace" fontSize="12" fill="black" fontWeight="bold">ALT: 408 KM</text>
             <rect x="130" y="10" width="10" height="10" fill={lights[0] > 0.5 ? "#00FF00" : "black"} />
          </g>

           <g transform="translate(600, 50)">
             <path d="M 0 0 L 20 -20 L 100 -20" fill="none" stroke="black" strokeWidth="2" />
             <text x="25" y="-30" fontFamily="monospace" fontSize="12" fill="black" fontWeight="bold">TARGET: LEO</text>
              <circle cx="0" cy="0" r="5" fill="red">
                  <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" />
              </circle>
          </g>

        </svg>
      </motion.div>

      {/* CRT Scanline Effect Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,3px_100%] pointer-events-none" />
    </div>
  );
}

