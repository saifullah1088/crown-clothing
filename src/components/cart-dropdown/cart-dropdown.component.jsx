import { useSelector } from "react-redux";
import { useCallback } from "react";
import { selectCartItems } from "../../store/cart/cart.selectors";
import CartItem from "../cart-item/cart-item.component";
import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";
import {
  CartDropDownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";

const CartDropDown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = useCallback(() => {
    navigate("/checkout");
  }, []);

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage as="span">Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>Go TO CHECKOUT</Button>
    </CartDropDownContainer>
  );
};
export default CartDropDown;
