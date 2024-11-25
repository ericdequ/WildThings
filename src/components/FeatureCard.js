import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const FeatureCard = ({ data }) => {
  return (
    <motion.div
      id="feature-card"
      className="w-64 h-64 bg-cover bg-center p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2.5 transform transition-all duration-300 ease-in-out text-white"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/pexels.webp')",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      }}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
    >
      <i className={data.icon + " text-2xl mb-4 block"}></i>
      <h3 className="text-xl mb-2">{data.title}</h3>
      <p>{data.text}</p>
    </motion.div>
  );
};

export default FeatureCard;
