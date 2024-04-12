import CustomerInformation from "../components/Checkout/CustomerInformation";
import OrderSummary from "../components/Checkout/OrderSummary";
import Payment from "../components/Checkout/Payment";
import Steps from "../components/Checkout/Steps";
import { useState } from "react";

export enum CheckoutStep {
  OrderSummary = 1,
  CustomerInformation,
  Payment,
}

const Checkout = () => {
  const [step, setStep] = useState<number>(1);
  return (
    <>
      <div className="checkout">
        <Steps step={step} setStep={setStep} />
        {step === CheckoutStep.OrderSummary && <OrderSummary />}
        {step === CheckoutStep.CustomerInformation && <CustomerInformation />}
        {step === CheckoutStep.Payment && <Payment />}
      </div>
    </>
  );
};

export default Checkout;
