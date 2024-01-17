import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [catalogue, setCatalogue] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing?limit=5")
      .then((res) => res.json())
      .then((json) => setProducts(json));

    fetch("https://fakestoreapi.com/products/category/men's clothing?limit=10")
      .then((res) => res.json())
      .then((json) => setCatalogue(json));
  }, []);

  return (
    <div className="flex flex-col min-h-screen items-center">
      <h3>SPRING/SUMMER 24</h3>
      <div className="flex justify-center">
        <div className="max-w-[450px] min-h-[300px] p-4">
          <Carousel showThumbs={false} className="h-full">
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
      <div className="flex flex-col ">
        <h3 className="px-4">MEN&rsquo;S APARREL</h3>
        <div className="flex justify-center mt-10  w-[1400px] m-4">
          <div className="w-[1400px] max-h-[400px] border border-dashed border-slate-950 border-opacity-50">
            <Carousel
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              infiniteLoop={true}
              centerMode={true}
              centerSlidePercentage={20}
              onClickItem={(index, item) => console.log(index, item)}
            >
              {catalogue.map((product) => (
                <div
                  key={product.id}
                  className="h-full flex items-center justify-center p-4 border-l border-dashed border-slate-950 border-opacity-50"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover "
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
