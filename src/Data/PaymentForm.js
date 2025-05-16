
import { useState } from 'react';

function PaymentForm({
  paymentInfo,
  setPaymentInfo,
  paymentErrors,
  setPaymentErrors,
  handleCheckout,
  togglePayment
})        { 



 const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
 
 



  


  const applyCoupon = () => {
    const code = coupon.trim().toLowerCase();
    if (code === 'save10') {
      setDiscount(10);
      alert('Coupon applied! $10 discount granted.');
    } else {
      setDiscount(0);
      alert('Invalid or expired coupon.');
    }
  };

 
  const handlePaymentChange = e => {
    const { name, value } = e.target;
    setPaymentInfo(prev => ({ ...prev, [name]: value }));
  };

  const validatePayment = () => {
    const errors = {};
    if (!paymentInfo.name.trim()) errors.name = 'Name is required';
    if (!paymentInfo.phone.trim()) errors.phone = 'Phone is required';
    if (!paymentInfo.address.trim()) errors.address = 'Address is required';
    if (!paymentInfo.cardNumber.trim()) errors.cardNumber = 'Card Number is required';
    else if (!/^\d{16}$/.test(paymentInfo.cardNumber)) errors.cardNumber = 'Card Number must be 16 digits';
    if (!paymentInfo.expiryMonth.trim()) errors.expiryMonth = 'Expiry Month is required';
    else if (!/^(0[1-9]|1[0-2])$/.test(paymentInfo.expiryMonth)) errors.expiryMonth = 'Expiry Month invalid';
    if (!paymentInfo.expiryYear.trim()) errors.expiryYear = 'Expiry Year is required';
    else if (!/^\d{4}$/.test(paymentInfo.expiryYear)) errors.expiryYear = 'Expiry Year must be 4 digits';
    if (!paymentInfo.cvv.trim()) errors.cvv = 'CVV is required';
    else if (!/^\d{3,4}$/.test(paymentInfo.cvv)) errors.cvv = 'CVV must be 3 or 4 digits';
    setPaymentErrors(errors);
    return Object.keys(errors).length === 0;
  };

  




























 

  // Helper to handle input changes
  const handleChange = e => {
    const { name, value } = e.target;
    setPaymentInfo(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section
      className="payment1"
      role="dialog"
      aria-modal="true"
      aria-labelledby="paymentTitle"
      style={{ display: 'flex', flexDirection: 'column', padding: '1rem', gap: '1rem' }}
    >
      <h1 className="paytitle" id="paymentTitle">Personal Information</h1>

      <label htmlFor="name">Name and Surname</label>
      <input
        type="text"
        id="name"
        name="name"
        className="payinput"
        placeholder="John Doe"
        value={paymentInfo.name}
        onChange={handleChange}
        aria-invalid={!!paymentErrors.name}
        aria-describedby="nameError"
      />
      {paymentErrors.name && <span id="nameError" style={{ color: 'red' }}>{paymentErrors.name}</span>}

      <label htmlFor="phone">Phone Number</label>
      <input
        type="text"
        id="phone"
        name="phone"
        className="payinput"
        placeholder="+1 234 5678"
        value={paymentInfo.phone}
        onChange={handleChange}
        aria-invalid={!!paymentErrors.phone}
        aria-describedby="phoneError"
      />
      {paymentErrors.phone && <span id="phoneError" style={{ color: 'red' }}>{paymentErrors.phone}</span>}

      <label htmlFor="address">Address</label>
      <input
        type="text"
        id="address"
        name="address"
        className="payinput"
        placeholder="Elton St 21 22 -145"
        value={paymentInfo.address}
        onChange={handleChange}
        aria-invalid={!!paymentErrors.address}
        aria-describedby="addressError"
      />
      {paymentErrors.address && <span id="addressError" style={{ color: 'red' }}>{paymentErrors.address}</span>}

      <div className="cardIcons" style={{ display: 'flex', gap: '1rem' }}>
        <img src="/assets/img/visa.png" alt="Visa" width="40" />
        <img src="/assets/img/master.png" alt="Mastercard" width="40" />
      </div>

      <label htmlFor="cardNumber">Card Number</label>
      <input
        type="password"
        id="cardNumber"
        name="cardNumber"
        className="payinput"
        placeholder="Card Number"
        value={paymentInfo.cardNumber}
        onChange={handleChange}
        aria-invalid={!!paymentErrors.cardNumber}
        aria-describedby="cardNumberError"
      />
      {paymentErrors.cardNumber && <span id="cardNumberError" style={{ color: 'red' }}>{paymentErrors.cardNumber}</span>}

      <div className="cardinfo" style={{ display: 'flex', gap: '0.5rem' }}>
        <input
          type="text"
          name="expiryMonth"
          placeholder="MM"
          className="payinput sm"
          value={paymentInfo.expiryMonth}
          onChange={handleChange}
          aria-invalid={!!paymentErrors.expiryMonth}
          aria-describedby="expiryMonthError"
          maxLength={2}
        />
        <input
          type="text"
          name="expiryYear"
          placeholder="YYYY"
          className="payinput sm"
          value={paymentInfo.expiryYear}
          onChange={handleChange}
          aria-invalid={!!paymentErrors.expiryYear}
          aria-describedby="expiryYearError"
          maxLength={4}
        />
        <input
          type="text"
          name="cvv"
          placeholder="CVV"
          className="payinput sm"
          value={paymentInfo.cvv}
          onChange={handleChange}
          aria-invalid={!!paymentErrors.cvv}
          aria-describedby="cvvError"
          maxLength={4}
        />
      </div>
      {(paymentErrors.expiryMonth || paymentErrors.expiryYear || paymentErrors.cvv) && (
        <span id="cardDateCvvError" style={{ color: 'red' }}>
          {paymentErrors.expiryMonth || paymentErrors.expiryYear || paymentErrors.cvv}
        </span>
      )}

      <button className="payButton1" type="button" onClick={handleCheckout}>Checkout</button>
      <button
        className="close1"
        aria-label="Close payment form"
        type="button"
        onClick={togglePayment}
        style={{ marginTop: '1rem' }}
      >
        X
      </button>
    </section>
  );
}

export default PaymentForm;
