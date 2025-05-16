import React, { useState } from 'react';
import '../index.css';
import PaymentForm from '../Data/PaymentForm';

import MotionSection from '../Data/MotionSection';
import Fotter from '../Data/Footer';
import Header from '../Data/Header';
import { motion } from 'framer-motion';


function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Highlander Men Blue Jeans', price: 88, quantity: 1, image: '/assets/img/j1.webp' },
    { id: 2, name: 'Floral Hipster Shirt', price: 78, quantity: 1, image: '/assets/img/HSS152-Floral-Hipster.jpg' },
    { id: 3, name: 'Ladyful Men\'s Corduroy Shirt', price: 85, quantity: 1, image: '/assets/img/13.jpg' }
  ]);

  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const [paymentVisible, setPaymentVisible] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState({
    name: '',
    phone: '',
    address: '',
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
  });
  const [paymentErrors, setPaymentErrors] = useState({});

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCartItems(prev => prev.map(item => (item.id === id ? { ...item, quantity } : item)));
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = Math.max(subtotal - discount, 0);

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

  const togglePayment = () => {
    setPaymentVisible(!paymentVisible);
    setPaymentErrors({});
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

  const handleCheckout = () => {
    if (validatePayment()) {
      alert('Purchase successful! Thank you.');
      // Reset cart and payment info
      setCartItems([]);
      setPaymentVisible(false);
      setCoupon('');
      setDiscount(0);
      setPaymentInfo({
        name: '',
        phone: '',
        address: '',
        cardNumber: '',
        expiryMonth: '',
        expiryYear: '',
        cvv: '',
      });
      setPaymentErrors({});
    }
  };

  return (
    <>
<Header/>
<motion.div
  initial={{ opacity: 0, x: 80 }} // 👈 Start below
  whileInView={{ opacity: 1, x: 0 }} // 👈 Move up into place
  transition={{ type: 'spring', stiffness: 200, delay: 0.2, damping: 10 }}
  className="pro w-[250px] cursor-pointer"
>
   <section id="cart" className="section-p1">
        <table>
          <thead>
            <tr>
              <td>Remove</td>
              <td>Image</td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Subtotal</td>
            </tr>
          </thead>
          <tbody>
            {cartItems.length === 0 ? (
              <tr><td colSpan="6" style={{ textAlign: 'center' }}>Cart is empty.</td></tr>
            ) : (
              cartItems.map(item => (
                <tr key={item.id}>
                  <td>
                    <button onClick={() => removeItem(item.id)} aria-label={`Remove ${item.name}`}>
                      <i className="fa fa-dot-circle-o"></i>
                    </button>
                  </td>
                  <td><img src={item.image} alt={item.name} style={{ maxWidth: '60px' }} /></td>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td><input type="number" min="1" value={item.quantity} onChange={e => updateQuantity(item.id, +e.target.value)} /></td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>
</motion.div>
     
<motion.div
  initial={{ opacity: 0, y: 80 }} // 👈 Start below
  whileInView={{ opacity: 1, y: 0 }} // 👈 Move up into place
  transition={{ type: 'spring', stiffness: 200, delay: 0.2, damping: 10 }}
  className="pro w-[250px] cursor-pointer"
> <section id="cart-add" className="section-p1">
        <div id="coupon">
          <h3>Apply Coupon</h3>
          <div>
            <input type="text" placeholder="Enter Your Coupon" value={coupon} onChange={e => setCoupon(e.target.value)} />
            <button className="normal" onClick={applyCoupon}>Apply</button>
          </div>
        </div>

        <div id="subtotal">
          <h3>Cart Totals</h3>
          <table>
            <tbody>
              <tr><td>Cart Subtotal</td><td>${subtotal.toFixed(2)}</td></tr>
              <tr><td>Shipping</td><td>Free</td></tr>
              <tr><td><strong>Discount</strong></td><td>${discount.toFixed(2)}</td></tr>
              <tr><td><strong>Total</strong></td><td><strong>${total.toFixed(2)}</strong></td></tr>
            </tbody>
          </table>
          <button onClick={togglePayment}>Proceed to checkout</button>
        </div>
      </section>
</motion.div>
     
      {paymentVisible && (
        <PaymentForm
          paymentInfo={paymentInfo}
          setPaymentInfo={setPaymentInfo}
          paymentErrors={paymentErrors}
          setPaymentErrors={setPaymentErrors}
          handleCheckout={handleCheckout}
          togglePayment={togglePayment}
        />
      )}

  

     <Fotter/>
    </>
  );
}

export default CartPage;

