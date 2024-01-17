import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing?limit=5")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className="flex justify-center">
      <div className="max-w-[450px] max-h-[300px]">
        <Carousel className="h-full">
          {products.map((product) => (
            <div
              key={product.id}
              className="h-full flex items-center justify-center"
            >
              <img
                src={product.image}
                alt={product.title}
                className="max-h-full object-contain"
              />
              <p className="legend">{product.title}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
