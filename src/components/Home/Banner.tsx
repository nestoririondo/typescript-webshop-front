import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-text">
        <h1>ExoBotanica: plants from another world</h1>
        <p>
          You will not find these plants in any other shop on Earth. They have
          been brought from a distant planet and are now available for you to
          purchase.
        </p>
        <Link to="/products" className="shop-now-btn">Shop Now</Link>
      </div>
    </section>
  );
};

export default Banner;
