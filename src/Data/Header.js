// src/components/Header.jsx
import { Link } from 'react-router-dom';
import MotionSection from "./MotionSection";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useCart } from './CartContext';
// Import your LoginPage component
import LoginPage from './LoginPage';

const Header = () => {
  // Language & menu state
  const [language, setLanguage] = useState('en');
  const [isActive, setIsActive] = useState(false);

  // Toggle state for the Login dropdown
  const [showLogin, setShowLogin] = useState(false);
   const { cartItems } = useCart();
   const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  const handleBarClick = () => setIsActive(true);
  const handleCloseClick = () => setIsActive(false);
  const toggleLogin = () => setShowLogin(prev => !prev);
  // Close‑login handler
  const closeLogin = () => setShowLogin(false);

  // Translations (including “login”)
  const translations = {
    en: {
      contact: "Contact us: +01 3333 678",
      searchPlaceholder: "Search...",
      home: "Home",
      shop: "Shop",
      blog: "Blog",
      about: "About",
      contactLink: "Contact",
      login: "Login"
    },
    fr: {
      contact: "Contactez-nous : +01 3333 678",
      searchPlaceholder: "Chercher...",
      home: "Accueil",
      shop: "Boutique",
      blog: "Blog",
      about: "À propos",
      contactLink: "Contact",
      login: "Connexion"
    },
    de: {
      contact: "Kontaktieren Sie uns: +01 3333 678",
      searchPlaceholder: "Suchen...",
      home: "Startseite",
      shop: "Shop",
      blog: "Blog",
      about: "Über",
      contactLink: "Kontakt",
      login: "Anmelden"
    },
    hi: {
      contact: "संपर्क करें: +01 3333 678",
      searchPlaceholder: "खोजें...",
      home: "मुख्य पृष्ठ",
      shop: "दुकान",
      blog: "ब्लॉग",
      about: "के बारे में",
      contactLink: "संपर्क",
      login: "लॉगिन"
    }
  };

  const handleLanguageChange = (e) => setLanguage(e.target.value);

  return (
    <MotionSection>
      {/* Top bar: contact & language */}
      <section className="language">
        <p className="contact">
          <img src="/assets/img/whatsapp.png" width="28" alt="WhatsApp" />
          {translations[language].contact}
        </p>
        <select onChange={handleLanguageChange} value={language}>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="hi">Hindi</option>
        </select>
      </section>

      {/* Main header */}
      <section className="header">
        {/* Logo */}
        <Link to="/">
          <img src="/assets/img/LOGO1.png" className="logo" alt="Logo" />
        </Link>

        {/* Desktop nav */}
        <div>
          <ul id="navbar" className={isActive ? 'active' : ''}>
            <li>
              <div className="search">
                <input
                  type="text"
                  placeholder={translations[language].searchPlaceholder}
                  className="searchInput"
                />
                <img
                  src="/assets/img/search.png"
                  width="20"
                  height="20"
                  alt="Search"
                  className="searchIcon"
                />
              </div>
            </li>
            <li><Link to="/">{translations[language].home}</Link></li>
            <li><Link to="/Shop">{translations[language].shop}</Link></li>
            <li><Link to="/Blog">{translations[language].blog}</Link></li>
            <li><Link to="/About">{translations[language].about}</Link></li>
            <li><Link to="/Contact">{translations[language].contactLink}</Link></li>

            {/* Cart + Login */}
            <li
              id="lg-bag"
              style={{ display: 'flex', alignItems: 'center', gap: '12px', position: 'relative' }}
            >
             <Link
          to="/Cart"
          className="hide"
                style={{ position: 'relative' }}
        >
          <img
            src="/assets/img/cart-shopping-solid.svg"
            style={{ height: 20, width: 30 }}
            alt="Cart"
          />
           {totalQuantity > 0 && (
          <span className="cart-badge">{totalQuantity}</span>
        )}
        </Link>

              <button className='hide'
                onClick={toggleLogin}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                <img
                  src="/assets/img/sign in.png"
                  alt="Login"
                  style={{ height: 45, width: 50 }}
                />
                 
              </button>

              {/* Nav-close (hamburger → ×) */}
              <div id="close" onClick={handleCloseClick}>
                <FontAwesomeIcon icon={faTimes} />
              </div>

              {/* Inline Login dropdown */}
              {showLogin && (
                <div  className='login'
                 
                  
                >
                  <LoginPage handleCloseClick={closeLogin} />
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* Mobile nav */}
        <div id="mobile">
          <ul >
            <li  >
               <img   className='myimg'
            src="/assets/img/cart-shopping-solid.svg"
            style={{ height: 20, width: 30 }}
            alt="Cart"
          />
           {totalQuantity > 0 && (
          <span className="cart-badge">{totalQuantity}</span>
        )}
            </li>
            <li>
              <button
                onClick={toggleLogin}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0 8px'
                }}
              >
               <img
                  src="/assets/img/sign in.png"
                  alt="Login"
                  style={{ height: 35, width: 50}}
                />
              </button>
            </li>
            <li>
              <Link>
                <i id="bar" onClick={handleBarClick} className="fa fa-bars"></i>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </MotionSection>
  );
};

export default Header;
