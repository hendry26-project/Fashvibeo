import MotionSection from "./MotionSection";

const Footer = () => {
  return (
    <MotionSection>
      <section id="news">
        <div>
          <h1>Subscribe To The Newsletter</h1>
        </div>
        <div className="sub">
          <input type="email" placeholder="Enter your email" className="normal" /><br /><br />
          <button className="normal">Subscribe</button>
        </div>
      </section>

      <footer className="section-p1">
        <div className="col">
          <img className="logo" src="/assets/img/LOGO1.png" alt="Logo" />
          <h4>Contact</h4>
          <p><strong>Address:</strong> 562 Wellington Road, Street 45, New York</p>
          <p><strong>Phone:</strong> +01 3333 678 / (+91) 089765 5443</p>
          <p><strong>Hours:</strong> 10.00 - 18.00, Mon-Sat</p>
          <div className="follow">
            <h4>Follow us</h4>
            <div className="icon">
              <i className="fa fa-facebook"></i>
              <i className="fa fa-twitter"></i>
              <i className="fa fa-instagram"></i>
              <i className="fa fa-pinterest"></i>
              <i className="fa fa-youtube-play"></i>
            </div>
          </div>
        </div>

        <div className="col">
          <h4>About</h4>
          <a href="/about-us">About us</a><br />
          <a href="/delivery">Delivery</a><br />
          <a href="/privacy-policy">Privacy Policy</a><br />
          <a href="/terms-and-conditions">Terms & Conditions</a><br />
          <a href="/contact">Contact us</a>
        </div>

        <div className="col">
          <h4>My Account</h4><br />
          <a href="/signin">Sign In</a><br />
          <a href="/cart">View Cart</a><br />
          <a href="/wishlist">My Wishlist</a><br />
          <a href="/track-order">Track My Order</a><br />
          <a href="/help">Help</a>
        </div>

        <div className="col install">
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <div className="row">
            <img src="/assets/img/available-on-the-app-store-logo-black-and-white-removebg-preview.png" alt="App Store" />
            <img src="/assets/img/google-play-store-declines-1689647462-removebg-preview.png" alt="Google Play" />
          </div>
          <p>Secured Payment Gateways</p>
          <img src="/assets/img/visa-removebg-preview.png" alt="Payment" />
        </div>

        <div className="copyright">
          <p> &copy; 2025 Fashvibeo</p>
        </div>
      </footer>
    </MotionSection>
  );
}

export default Footer;
