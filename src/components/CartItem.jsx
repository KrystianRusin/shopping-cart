import PropTypes from "prop-types";

const CartItem = ({ product }) => {
  return (
    <div className="w-[1200px] h-[120px] flex items-center justify-between gap-4 border border-dashed my-2">
      <div className="w-full h-full flex items-center gap-12">
        <img
          src={product.image}
          alt=""
          className="h-full border-r border-dashed p-2"
        />
        <h1>{product.title}</h1>
      </div>
      <div className="flex items-center gap-4">
        <h1 className="mx-4">${parseFloat(product.price).toFixed(2)}</h1>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default CartItem;
