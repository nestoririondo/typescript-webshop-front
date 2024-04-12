import "../../styles/popular.css";
import Reveal from "../Reveal";
import PopularProduct from "./PopularProduct";

const products = [
  { name: "Product 1", image: "https://via.placeholder.com/150" },
  { name: "Product 2", image: "https://via.placeholder.com/150" },
  { name: "Product 3", image: "https://via.placeholder.com/150" },
  { name: "Product 4", image: "https://via.placeholder.com/150" },
  { name: "Product 5", image: "https://via.placeholder.com/150" },
  { name: "Product 6", image: "https://via.placeholder.com/150" },
  { name: "Product 7", image: "https://via.placeholder.com/150" },
  { name: "Product 8", image: "https://via.placeholder.com/150" },
];

const Popular = () => {
  return (
    <section className="popular">
      <h2>Popular</h2>
      <div className="product-container">
        {products.map((product, index) => (
          <Reveal key={index} index={index}>
            <PopularProduct {...product} key={index} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Popular;
