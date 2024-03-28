import { Product } from "../types/product";
import { formatCurrency } from "../utils/formatCurrency";

type ProductTypeProps = {
  product: Product;
};

const ProductDetails = ({ product }: ProductTypeProps) => {
  const { name, description, price, id } = product;
  return (
    <div className="product">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{formatCurrency(price)}</p>
    </div>
  );
};

export default ProductDetails;
