type StepsProps = {
  step: number;
  setStep: (step: number) => void;
};

const Steps = ({ step, setStep }: StepsProps) => {
  return (
    <div className="checkout-steps">
      <div
        className={`checkout-step ${step === 1 ? "active" : ""}`}
        onClick={() => setStep(1)}
      >
        Order Summary
      </div>
      <div
        className={`checkout-step ${step === 2 ? "active" : ""}`}
        onClick={() => setStep(2)}
      >
        Customer Information
      </div>
      <div
        className={`checkout-step ${step === 3 ? "active" : ""}`}
        onClick={() => setStep(3)}
      >
        Payment
      </div>
    </div>
  );
};

export default Steps;
