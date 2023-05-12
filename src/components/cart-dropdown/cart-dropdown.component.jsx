import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

const CartDrowdown = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  const navigate = useNavigate();
  const routeChange = () => {
    const path = "/checkout";
    navigate(path);
    toggleIsCartOpen();
  };
  const { cartItems } = useContext(CartContext);
  console.log("CARTITEMS: ", cartItems);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={routeChange}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDrowdown;
