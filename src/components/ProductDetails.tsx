import { Product } from "../types/product";
import { formatCurrency } from "../utils/formatCurrency";

type ProductTypeProps = {
  product: Product;
};

const ProductDetails = ({ product }: ProductTypeProps) => {
  const { name, description, price, images, id } = product;
  return (
    <div className="product">
      <h2>{name}</h2>
      <img src={images[0].toString()} alt={name} />
      <p>{description}</p>
      <p>{formatCurrency(price)}</p>
    </div>
  );
};

export default ProductDetails;
