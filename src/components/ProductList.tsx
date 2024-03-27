import { ProductType } from "../types/product";
import "../styles/productlist.css";
import Item from "./Item";

type ProductListProps = {
  products: ProductType[];
};

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="product-list">
      {products.map((product: ProductType) => (
        <Item key={product.id.toString()} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
