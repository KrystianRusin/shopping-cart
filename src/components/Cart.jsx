import PropTypes from "prop-types";
import CartItem from "./CartItem";

const Cart = ({ cart }) => {
  return (
    <div className="flex flex-col justify-start items-center">
      {cart.length === 0 ? (
        <div className="flex flex-col justify-center items-center">
          <h1 style={{ fontSize: "2rem" }}>Your cart is empty</h1>
          <h3>Check out our store to add some products to the cart</h3>
        </div>
      ) : (
        cart.map((product, index) => <CartItem key={index} product={product} />)
      )}
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default Cart;
