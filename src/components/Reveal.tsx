import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  yOffset?: number; 
  duration?: number;
  delay?: number;
}

const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = "100%",
  delay = 0,
  duration = 0.8,
  yOffset = 0 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "visible" }}>
      <motion.div
        variants={{
          hidden: { 
            opacity: 0, 
            y: yOffset 
          },
          visible: { 
            opacity: 1, 
            y: 0 
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ 
          duration: duration, 
          delay: delay, 
          ease: "easeOut"
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;