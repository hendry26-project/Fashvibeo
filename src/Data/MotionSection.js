import { motion } from "framer-motion";

const MotionSection = ({ children, className = "" }) => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        delay: 0.2,
        damping: 20,
      }}
      className={`w-full ${className}`}
    >
      {children}
    </motion.section>

  );
};

export default MotionSection