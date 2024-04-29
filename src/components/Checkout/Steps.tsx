import { CheckoutStep } from "../../pages/Checkout";

type StepsProps = {
  step: CheckoutStep;
  setStep: (step: CheckoutStep) => void;
};

const Steps = ({ step, setStep }: StepsProps) => {
  return (
    <div className="checkout-steps">
      <div
        className={`checkout-step ${
          step === CheckoutStep.OrderSummary ? "active" : ""
        }`}
        onClick={() => setStep(CheckoutStep.OrderSummary)}
      >
        <span
          className={`number ${
            step === CheckoutStep.OrderSummary ? "active" : ""
          }`}
        >
          1
        </span>
        <span className="title">Order Summary</span>
      </div>

      <div
        className={`checkout-step ${
          step === CheckoutStep.CustomerInformation ? "active" : ""
        }`}
        onClick={() => setStep(CheckoutStep.CustomerInformation)}
      >
        <span
          className={`number ${
            step === CheckoutStep.CustomerInformation ? "active" : ""
          }`}
        >
          2
        </span>
        <span className="title">Customer Information</span>
      </div>
      
      <div
        className={`checkout-step ${
          step === CheckoutStep.Payment ? "active" : ""
        }`}
        onClick={() => setStep(CheckoutStep.Payment)}
      >
        <span
          className={`number ${
            step === CheckoutStep.Payment ? "active" : ""
          }`}
        >
          3
        </span>
        <span className="title">Payment</span>
      </div>
    </div>
  );
};

export default Steps;
