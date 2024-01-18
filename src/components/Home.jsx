import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [menCatalogue, setmenCatalogue] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing?limit=5")
      .then((res) => res.json())
      .then((json) => setProducts(json));

    fetch("https://fakestoreapi.com/products/category/men's clothing?limit=10")
      .then((res) => res.json())
      .then((json) => setmenCatalogue(json));
  }, []);

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-black cursor-pointer"
        onClick={onClick}
      >
        <ArrowForwardIosIcon />
      </div>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-black z-10 cursor-pointer"
        onClick={onClick}
      >
        <ArrowBackIosNewIcon />
      </div>
    );
  }

  var settingsFirst = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  var settingsSecond = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="flex flex-col min-h-screen items-center">
      <h3 className="p-2">SPRING/SUMMER 24</h3>
      <div className="flex justify-center">
        <div className="w-[500px] h-[750px] p-4">
          <Slider {...settingsFirst}>
            {products.map((product) => (
              <div key={product.id}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-contain w-full h-full"
                />
                <p className="legend">{product.title}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="flex flex-col my-12">
        <h3 className="px-4">MEN&rsquo;S APARREL</h3>
        <div className="flex justify-center mt-10 m-4">
          <div className="w-[1000px] h-[385px] border border-dashed border-slate-950 border-opacity-50">
            <Slider {...settingsSecond}>
              {menCatalogue.map((product) => (
                <div
                  key={product.id}
                  className="p-4 border-r border-dashed border-slate-950 border-opacity-50"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-contain w-[250px] h-[350px]"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
