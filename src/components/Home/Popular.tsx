import "../../styles/popular.css";
import { motion, useScroll } from "framer-motion";
import { useEffect } from "react";

const products = [
  { name: "Product 1", image: "https://via.placeholder.com/150" },
  { name: "Product 2", image: "https://via.placeholder.com/150" },
  { name: "Product 3", image: "https://via.placeholder.com/150" },
  { name: "Product 4", image: "https://via.placeholder.com/150" },
];

const Popular = () => {
  const scrolling = useScroll();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       console.log(scrolling);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

  return (
    <section>
      <h2>Popular</h2>
      <div className="product-container">
        {products.map((product, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            key={index}
            className="product"
          >
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>

            <button>Add to cart</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Popular;
