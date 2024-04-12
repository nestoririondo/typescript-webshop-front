import { Product } from "../types/product";
import "../styles/productlist.css";
import ProductPreview from "./ProductPreview";
import Reveal from "./Reveal";

type ProductListProps = {
  products: Product[];
};

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="product-list">
      {products.map((product: Product, index) => (
        <Reveal key={product.id.toString()} index={index}>
          <ProductPreview key={product.id.toString()} product={product} />
        </Reveal>
      ))}
    </div>
  );
};

export default ProductList;
