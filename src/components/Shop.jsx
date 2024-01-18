import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Product from "./Product";

const Shop = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing?limit=5")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div>
      <h2 className="px-12">MEN&rsquo;S APARREL</h2>
      <div className="flex gap-6 flex-wrap justify-center my-12">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

Shop.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Shop;
