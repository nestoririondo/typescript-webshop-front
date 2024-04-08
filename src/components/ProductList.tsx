import { Product } from "../types/product";
import "../styles/productlist.css";
import ProductPreview from "./ProductPreview";
import { motion } from "framer-motion";

type ProductListProps = {
  products: Product[];
};

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="product-list">
      {products.map((product: Product, index) => (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 * index }}
        >
          <ProductPreview key={product.id.toString()} product={product} />
        </motion.div>
      ))}
    </div>
  );
};

export default ProductList;
