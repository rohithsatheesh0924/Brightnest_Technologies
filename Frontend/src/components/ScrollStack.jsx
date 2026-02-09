// src/components/ScrollStack.jsx
import { motion } from 'framer-motion';

export const ScrollStackItem = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.7,
          ease: "easeOut"
        }
      }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ScrollStack = ({ children }) => {
  return (
    <div className="scroll-stack">
      {children}
    </div>
  );
};

export default ScrollStack;