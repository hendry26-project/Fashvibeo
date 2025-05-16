import { Link } from 'react-router-dom';
import MotionSection from "./MotionSection";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';



const Header = () => {
  // State to manage the current language
  const [language, setLanguage] = useState('en');

  const [isActive, setIsActive] = useState(false);

  const handleBarClick = () => {
    setIsActive(true);
  };

  const handleCloseClick = () => {
    setIsActive(false);
  };
  // Translations for different languages
  const translations = {
    en: {
      contact: "Contact us: +01 3333 678",
      searchPlaceholder: "Search...",
      home: "Home",
      shop: "Shop",
      blog: "Blog",
      about: "About",
      contactLink: "Contact"
    },
    fr: {
      contact: "Contactez-nous : +01 3333 678",
      searchPlaceholder: "Chercher...",
      home: "Accueil",
      shop: "Boutique",
      blog: "Blog",
      about: "À propos",
      contactLink: "Contact"
    },
    de: {
      contact: "Kontaktieren Sie uns: +01 3333 678",
      searchPlaceholder: "Suchen...",
      home: "Startseite",
      shop: "Shop",
      blog: "Blog",
      about: "Über",
      contactLink: "Kontakt"
    },
    hi: {
      contact: "संपर्क करें: +01 3333 678",
      searchPlaceholder: "खोजें...",
      home: "मुख्य पृष्ठ",
      shop: "दुकान",
      blog: "ब्लॉग",
      about: "के बारे में",
      contactLink: "संपर्क"
    }
  };

  // Handle language change
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
     <MotionSection>
      <section className="language">
        <p className="contact">
          <img src="/assets/img/whatsapp.png" width="28px" alt="WhatsApp" />
          {translations[language].contact}
        </p>
        <select onChange={handleLanguageChange} value={language}>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="hi">Hindi</option>
        </select>
      </section>
      
      <section className="header">
        <Link to="/">
          <img src="/assets/img/LOGO1.png" className="logo" alt="Logo" />
        </Link>

        <div>
          <ul id="navbar" className={isActive ? 'active' : ''}>
            <li>
              <div className="search">
                <input type="text" placeholder={translations[language].searchPlaceholder} className="searchInput" />
                <img src="/assets/img/search.png" width="20" height="20" alt="Search" className="searchIcon" />
              </div>
            </li>
            <li><Link to="/">{translations[language].home}</Link></li>
            <li><Link to="/Shop">{translations[language].shop}</Link></li>
            <li><Link to="/Blog">{translations[language].blog}</Link></li>
            <li><Link to="/About">{translations[language].about}</Link></li>
            <li><Link to="/Contact">{translations[language].contactLink}</Link></li>
  <li id="lg-bag">
  <Link to="/Cart">
    <img src="/assets/img/cart-shopping-solid.svg" style={{ height: 20, width: 30 }} alt="Cart" />
  </Link>

  <div id="close" onClick={handleCloseClick} >
 <FontAwesomeIcon icon={faTimes} />
  </div>
</li>


          </ul>
        </div>

        <div id="mobile">
          <ul>
            <li>
              <Link to="/Cart">
                <img src="/assets/img/cart-shopping-solid.svg" height="20" width="30" alt="Cart" />
                
              </Link>
              <Link><i id="bar" onClick={handleBarClick} className="fa fa-bars"></i></Link>
            </li>
          </ul>
        </div>
      </section>
    </MotionSection>
  );
}

export default Header;
