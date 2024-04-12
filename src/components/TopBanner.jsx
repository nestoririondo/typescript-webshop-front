import "../styles/topbanner.css";
import { useEffect, useRef } from "react";

const TopBanner = () => {
  const topBanner = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      topBanner.current.style.height = "2rem";
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <header ref={topBanner} className="topbanner">
      <ul>
        <li>Free Shipping above 49 €</li>
        <li>100% safe and sustainable packaging</li>
      </ul>
    </header>
  );
};

export default TopBanner;
