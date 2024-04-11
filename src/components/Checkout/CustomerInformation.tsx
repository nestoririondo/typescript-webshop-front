const CustomerInformation = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input type="text" id="address" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="city">City</label>
        <input type="text" id="city" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">
        Continue
      </button>
    </form>
  );
};

export default CustomerInformation;
