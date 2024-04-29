import CustomerInformation from "../components/Checkout/CustomerInformation";
import OrderSummary from "../components/Checkout/OrderSummary";
import Payment from "../components/Checkout/Payment";
import Steps from "../components/Checkout/Steps";
import { useState } from "react";
import { useBasket } from "../context/useBasket";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../api/orders";
import { useAuth } from "../context/useAuth";
import { v4 as uuidv4 } from "uuid";

export enum CheckoutStep {
  OrderSummary = 1,
  CustomerInformation,
  Payment,
}

type Order = {
  userId: typeof uuidv4;
  addressId: typeof uuidv4;
  products: {
    id: typeof uuidv4;
    quantity: number;
    price: number;
  }[];
};

type UserInput = {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postal: string;
};

const initialUserInput: UserInput = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  postal: "",
};

const Checkout = () => {
  const [step, setStep] = useState<number>(1);
  const [userInput, setUserInput] = useState<UserInput>(initialUserInput);

  const { basket } = useBasket();
  const { user } = useAuth();

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
    console.log(userInput);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const order: Order = {
      userId: user?.id || "",
      addressId: "76e9a22b-2999-4aef-8976-088040696d00",
      products: basket.map((item) => ({
        id: item.product.id,
        quantity: item.quantity,
        price: item.product.price,
      })), 
    }
    console.log(order);
    const createdOrder = await createOrder(order);
    console.log("Order created", createdOrder);
  };

  if (basket.length === 0) {
    return (
      <section className="empty">
        <p className="empty-basket">Your basket is empty</p>
        <button
          onClick={() => {
            navigate("/products");
          }}
        >
          Go to the shop
        </button>
      </section>
    );
  }
  return (
    <>
      <div className="checkout">
        <Steps step={step} setStep={setStep} />
        {step === CheckoutStep.OrderSummary && (
          <OrderSummary setStep={setStep} />
        )}
        {step === CheckoutStep.CustomerInformation && (
          <CustomerInformation handleChange={handleChange} setStep={setStep} />
        )}
        {step === CheckoutStep.Payment && (
          <Payment handleChange={handleChange} handleSubmit={handleSubmit} setStep={setStep} />
        )}
      </div>
    </>
  );
};

export default Checkout;
