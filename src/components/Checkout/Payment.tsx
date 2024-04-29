import { CheckoutStep } from "../../pages/Checkout";

type PaymentProps = {
  setStep: (step: CheckoutStep) => void;
  handleSubmit: (e: any) => void;
  handleChange: (e: any) => void;
};

const Payment = ({ setStep, handleSubmit, handleChange }: PaymentProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="card">Card Number</label>
        <input type="text" id="card" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="expiry">Expiry Date</label>
        <input type="text" id="expiry" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="cvc">CVC</label>
        <input type="text" id="cvc" className="form-control" />
      </div>
      <section className="next">
        <button>Pay</button>
      </section>
    </form>
  );
};

export default Payment;
