import CustomerInformation from "../components/Checkout/CustomerInformation";
import OrderSummary from "../components/Checkout/OrderSummary";
import Payment from "../components/Checkout/Payment";
import Steps from "../components/Checkout/Steps";
import { useState } from "react";

const Checkout = () => {
  const [step, setStep] = useState<number>(1);
  return (
    <>
      <div className="checkout">
        <Steps step={step} setStep={setStep} />
        {step === 1 && <OrderSummary />}
        {step === 2 && <CustomerInformation />}
        {step === 3 && <Payment />}
      </div>
    </>
  );
};

export default Checkout;
