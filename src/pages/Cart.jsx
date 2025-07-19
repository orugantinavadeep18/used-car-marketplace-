import Navbar from "../components/Navbar";
import Footer from "./Footer";
import { useCart } from "./Home/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  return (
    <div>
        <Navbar/>
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((car, index) => (
            <div key={index} className="bg-white p-4 rounded shadow flex justify-between items-center">
              <div>
                <h2 className="font-semibold">{car.name}</h2>
                <p className="text-sm text-gray-500">{car.price}</p>
              </div>
              <button
                className="text-red-500 font-bold"
                onClick={() => removeFromCart(car.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            onClick={() => navigate("/payment")}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
    <Footer/>
    </div>
  );
};

export default Cart;
