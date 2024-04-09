import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import hero1 from "../../../public/hero1.webp";
import hero2 from "../../../public/hero2.webp";
import hero3 from "../../../public/hero3.webp";
import hero4 from "../../../public/hero4.webp";
import "../../styles/hero.css";

const images = [hero1, hero2, hero3, hero4];

const Hero = () => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      current === images.length - 1 ? setCurrent(0) : setCurrent(current + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="hero"
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`hero-image ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
    </motion.section>
  );
};

export default Hero;
