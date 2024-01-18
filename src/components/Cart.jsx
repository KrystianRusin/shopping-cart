import PropTypes from "prop-types";

const Cart = ({ cart }) => {
  return <div>{cart[0].title}</div>;
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default Cart;
