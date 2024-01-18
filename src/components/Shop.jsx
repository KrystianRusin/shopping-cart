import { useEffect, useState } from "react";
import Product from "./Product";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing?limit=5")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className="flex gap-6 flex-wrap justify-center my-12">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
