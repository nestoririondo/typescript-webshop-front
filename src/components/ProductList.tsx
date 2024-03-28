import { Product } from "../types/product";
import "../styles/productlist.css";
import ProductPreview from "./ProductPreview";

type ProductListProps = {
  products: ProductType[];
};

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="product-list">
      {products.map((product: Product) => (
        <ProductPreview key={product.id.toString()} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
