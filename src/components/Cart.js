import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const carItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
     <div className="text-center m-4 p-4">
      <h1 className="text-2xl   font-bold">Cart</h1>
      <div className="w-6/12 m-auto  ">
        <button
          className="p-2 m-2 bg-black text-white rounded-md"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {carItems.length === 0 && (
          <h1 className="">Cart is empty. Add items to the cart!</h1>
        )}
        <ItemList items={carItems} />
      </div>
    </div>
  );
};

export default Cart;
