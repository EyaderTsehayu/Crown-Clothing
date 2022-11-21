import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import {
  CartDropDownContainer,
  EmptyMessage,
  cartItems,
  CartItems,
} from "./cart-dropdown.styles.jsx";
//import "../cart-item/cart-item.component";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import Checkout from "../../routes/checkout/checkout.component";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("Checkout");
  };

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems?.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropDownContainer>
  );
};
export default CartDropdown;
