type PopularProductProps = {
  name: string;
  image: string;
};

const PopularProduct = ({ name, image }: PopularProductProps) => {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
};
export default PopularProduct;
