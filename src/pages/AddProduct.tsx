import { useState } from "react";
import { addProduct } from "../api/products";

const emptyProduct = {
  name: "",
  price: 0,
  description: "",
  stock: 0,
  file: null,
}; 

const AddProduct = () => {
  const [product, setProduct] = useState(emptyProduct);

  const handleChange = (key: string, value: any) => {
    setProduct({ ...product, [key]: value });
    console.log(product, "HERE");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!product) return;

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price.toString());
    formData.append("description", product.description);
    formData.append("stock", product.stock.toString());
    formData.append("file", product.file);
    await addProduct(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          className="form-control"
          id="price"
          onChange={(e) => handleChange("price", e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          className="form-control"
          id="description"
          rows={3}
          onChange={(e) => handleChange("description", e.target.value)}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="stock">Stock</label>
        <input
          type="number"
          className="form-control"
          id="stock"
          onChange={(e) => handleChange("stock", e.target.value)}
        />
      </div>
      <input
        type="file"
        name="file"
        id="file"
        className="inputfile"
        onChange={(e) => handleChange("file", e.target.files[0])}
      />
      <button type="submit" className="btn btn-primary">
        Add Product
      </button>
    </form>
  );
};

export default AddProduct;
