import { useState } from 'react';
import '../index.css';
import PaymentForm from '../Data/PaymentForm';
import Footer from '../Data/Footer';
import Header from '../Data/Header';
import { motion } from 'framer-motion';
import { useCart } from '../Data/CartContext';

function CartPage() {
  const { cartItems, updateQuantity, removeItem, clearCart } = useCart();
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

  const parsePrice = (price) => {
    const clean = String(price).replace(/,/g, '');
    return isNaN(Number(clean)) ? 0 : Number(clean);
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + parsePrice(item.price) * item.quantity,
    0
  );

  const total = Math.max(subtotal - discount, 0);

  const applyCoupon = () => {
    const coupons = {
      save10: 10,
      save15: 15,
      save20: 20,
      save25: 25,
      save30: 30,
      save35: 35,
      save40: 40,
      save50: 50,
    };
    const code = coupon.trim().toLowerCase();
    if (code in coupons) {
      setDiscount(coupons[code]);
      alert(`Coupon applied! ₹${coupons[code]} discount granted.`);
    } else {
      setDiscount(0);
      alert('Invalid or expired coupon.');
    }
  };

  const togglePayment = () => {
    setPaymentVisible(!paymentVisible);
    setPaymentErrors({});
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
      clearCart();
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
      <Header />
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
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
                <tr>
                  <td colSpan="6" style={{ textAlign: 'center' }}>
                    Cart is empty.
                  </td>
                </tr>
              ) : (
                cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <button onClick={() => removeItem(item.id)}>Remove</button>
                    </td>
                    <td>
                      <img src={item.image} alt={item.title} style={{ maxWidth: '60px' }} />
                    </td>
                    <td>{item.title}</td>
                    <td>₹{parsePrice(item.price).toFixed(2)}</td>
                    <td>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, +e.target.value)}
                      />
                    </td>
                    <td>₹{(parsePrice(item.price) * item.quantity).toFixed(2)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </section>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 200, delay: 0.2, damping: 10 }}
        className="pro w-[250px] cursor-pointer"
      >
        <section id="cart-add" className="section-p1">
          <div id="coupon">
            <h3>Apply Coupon</h3>
            <div>
              <input
                type="text"
                placeholder="Enter Your Coupon"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                aria-label="Coupon code"
              />
              <button className="normal" onClick={applyCoupon}>
                Apply
              </button>
            </div>
          </div>

          <div id="subtotal">
            <h3>Cart Totals</h3>
            <table>
              <tbody>
                <tr>
                  <td>Cart Subtotal</td>
                  <td>₹{subtotal.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Shipping</td>
                  <td>Free</td>
                </tr>
                <tr>
                  <td>
                    <strong>Discount</strong>
                  </td>
                  <td>₹{discount.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td>
                    <strong>₹{total.toFixed(2)}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
            <button onClick={togglePayment} disabled={cartItems.length === 0}>
              Proceed to checkout
            </button>
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

      <Footer />
    </>
  );
}

export default CartPage;
