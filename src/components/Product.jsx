import PropTypes from "prop-types";

const Product = ({ product, addToCart }) => {
  const handleClick = () => {
    addToCart(product);
  };

  return (
    <div
      className="max-h-[450px] max-w-[300px] border border-dashed p-2 flex items-center flex-col cursor-pointer"
      onClick={handleClick}
    >
      <div className="h-10 my-4 flex justify-between gap-2">
        <h2 className="clamp-2 overflow-y-ellipsis">{product.title}</h2>
        <h2>${parseFloat(product.price).toFixed(2)}</h2>
      </div>

      <img src={product.image} alt="" className="w-full object-contain p-4" />
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Product;
