import "../../styles/customer-information.css";
import { CheckoutStep } from "../../pages/Checkout";

type CustomerInformationProps = {
  setStep: (step: CheckoutStep) => void;
  handleChange: (userInput: any) => void;
};
const CustomerInformation = ({setStep, handleChange}: CustomerInformationProps) => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input onChange={handleChange} type="text" name="name" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input onChange={handleChange } type="email" name="email" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input onChange={handleChange} type="tel" name="phone" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input onChange={handleChange} type="text" name="address" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="city">City</label>
        <input onChange={handleChange} type="text" name="city" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="postal">Postal Code</label>
        <input onChange={handleChange} type="text" name="postal" className="form-control" />
      </div>
      <section className="next">
        <button onClick={() => setStep(CheckoutStep.Payment)}>
          Next
        </button>
      </section>
    </form>
  );
};

export default CustomerInformation;
