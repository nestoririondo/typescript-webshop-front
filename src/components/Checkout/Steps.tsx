import { CheckoutStep } from '../../pages/Checkout';

type StepsProps = {
  step: CheckoutStep;
  setStep: (step: CheckoutStep) => void;
};

const Steps = ({ step, setStep }: StepsProps) => {
  return (
    <div className="checkout-steps">
      <div
        className={`checkout-step ${step === CheckoutStep.OrderSummary ? "active" : ""}`}
        onClick={() => setStep(CheckoutStep.OrderSummary)}
      >
        Order Summary
      </div>
      <div
        className={`checkout-step ${step === CheckoutStep.CustomerInformation ? "active" : ""}`}
        onClick={() => setStep(CheckoutStep.CustomerInformation)}
      >
        Customer Information
      </div>
      <div
        className={`checkout-step ${step === CheckoutStep.Payment ? "active" : ""}`}
        onClick={() => setStep(CheckoutStep.Payment)}
      >
        Payment
      </div>
    </div>
  );
};

export default Steps;
