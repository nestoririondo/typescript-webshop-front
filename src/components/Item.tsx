import { ProductType } from "../types/product";
import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/formatCurrency";

type ItemProps = {
  product: ProductType;
};

const Item = ({ product }: ItemProps) => {

  const { id, name, description, price, stock } = product;
  return (
    <Link to={`/products/${id}`} key={name} className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        {/* <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        /> */}
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href="">
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">
          {formatCurrency(price)}
        </p>
      </div>
    </Link>
  );
};

export default Item;
