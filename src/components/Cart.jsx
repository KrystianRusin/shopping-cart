import PropTypes from "prop-types";
import CartItem from "./CartItem";

const Cart = ({ cart }) => {
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="flex flex-col justify-center items-center">
      {cart.length === 0 ? (
        <div className="flex flex-col justify-center items-center">
          <h1 style={{ fontSize: "2rem" }}>Your cart is empty</h1>
          <h3>Check out our store to add some products to the cart</h3>
        </div>
      ) : (
        <div className="flex flex-col gap-4 items-end">
          {cart.map((product, index) => (
            <CartItem key={index} product={product} />
          ))}
          <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default Cart;
