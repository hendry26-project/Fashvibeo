import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Product1s, Shoes, Products } from '../Data/Productdata';
import MotionSection from '../Data/MotionSection';
import Footer from '../Data/Footer';
import '../index.css';
import Header from '../Data/Header';

const MotionWrapper = ({ children, initial, whileInView, transition }) => (
  <motion.section
    initial={initial}
    whileInView={whileInView}
    transition={transition}
  >
    {children}
  </motion.section>
);


function Index() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const [bgIndex, setBgIndex] = useState(0);

 useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => clearInterval(interval); // Clear interval on cleanup
  }, []);

   

  return (
    <div>
      <Header />

      <MotionWrapper
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 100, delay: 0.2, damping: 20 }}
      >
        <section  className={`offer ${bgIndex === 0 ? 'offer-bg1' : bgIndex === 1 ? 'offer-bg2' : 'offer-bg3'}`}>
          {/*<h1>Trade-in-offer</h1>
          <h2>Super Value deals</h2>
          <h3>on all products</h3>
          <p>save more with coupons & up to 70% off!</p>
          <div className="bst" onClick={() => navigate('/Shop')}>
            <button className="but">Shop Now</button>
          </div>*/}
        </section>
      </MotionWrapper>

      <MotionSection>
        <section id="service" className="section-p1">
          <div className="money">
            <img src="/assets/img/icon_mony.png" alt="money-back" />
            <p className="highlight">Money back</p>
          </div>
          <div className="gift">
            <img src="/assets/img/icon_gift.png" alt="special-gift" />
            <p className="highlight">Special Gifts</p>
          </div>
          <div className="car">
            <img src="/assets/img/icon_car.png" alt="free-shipping" />
            <p className="highlight">Free Shipping</p>
          </div>
        </section>
      </MotionSection>

      <MotionSection>
        <div className="Featured">
          <h2>Featured Products</h2>
          <p>Summer Collection New Modern Design</p>
        </div>
      </MotionSection>

      <section id="product1" className="section-p1">
        <div className="pro-con flex flex-wrap justify-center gap-6">
          {Product1s.map((product1) => (
            <motion.div
              key={`featured-${product1.id}`}
              initial={{ opacity: 0, y: -80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 300, delay: product1.id * 0.1, damping: 20 }}
              className="pro w-[250px] cursor-pointer"
              onClick={() => navigate(product1.link)}
            >
              <img src={product1.image} alt={product1.title} height="290px" />
              <div className="des">
                <span className="i">{product1.brand}</span>
                <h5>{product1.title}</h5>
                <div className="star">★★★★★</div>
                <h4>${product1.price}</h4>
                <Link onClick={(e) => { e.stopPropagation(); navigate(product1.cartLink); }}>
                  <i className="fa fa-shopping-cart"></i>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 100, delay: 0.3, damping: 20 }}
      >
        <section id="banner" className="section-m1">
        {/* <h3>READ MORE</h3>
          <h2>Up to <span>70% Off</span> - All T-Shirts & Accessories</h2><br /><br />
          <button className="normal">Explore More</button>//* */} 
        </section>
      </motion.div>

      <section id="ban">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.3, damping: 20 }}
        >
          <section id="banner3">
            <div className="banner-box">
              <h2><strong>Exclusive Clothing<br />Summer Collection 2025</strong></h2>
              <h3>Feel the summer mood with our<br/> latest exclusive clothes collection!</h3>
              <button className="shopnow">Shop now</button>
            </div>
          </section>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.3, damping: 20 }}
        >
          <section id="banner4">
            <div className="banner-boxnew">
              <h2><strong>New Men's Clothing<br />Collection 2025</strong></h2>
              <h3>Discover new suits, ties, shoes,<br/> and shirts from our designers.</h3>
              <button className="shopnow">Shop now</button>
            </div>
          </section>
        </motion.div>
      </section>

      <MotionSection>
        <div className="Featured">
          <h2>New Arrival</h2>
          <p>Summer Collection New Modern Design</p>
        </div>
      </MotionSection>

   <section id="product1" className="section-p1">
        <div className="pro-con flex flex-wrap justify-center gap-6">
          {Products.map((product1) => (
            <motion.div
              key={product1.id}
              initial={{ opacity: 0, y: -80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                delay: product1.id * 0.1,
                damping: 20,
              }}
              className="pro w-[250px] cursor-pointer"
              onClick={() => navigate(product1.link)}
            >
              <img src={product1.image} alt={product1.title} height="290px" />
              <div className="des">
                <span className="i">{product1.brand}</span>
                <h5>{product1.title}</h5>
                <div className="star">★★★★★</div>
                <h4>${product1.price}</h4>
                <a href={product1.cartLink} onClick={(e) => e.stopPropagation()}>
                  <i className="fa fa-shopping-cart"></i>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <nav id="nav">
        <div className="navTop">
          <div className="navItem">
            <img src="/assets/img/sneakers.png" alt="Sneakers" />
          </div>
          <div className="nike">
            <h2>NIKE SHOES</h2>
          </div>
          <div className="navItem">
            <span className="limitedOffer"><b>Limited Offer!</b></span>
          </div>
        </div>
        <div className="navBottom">
          {Shoes.map((shoe, index) => (
            <h3
              key={index}
              className={`menuItem ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              style={{ cursor: 'pointer' }}
            >
              {shoe.Title}
            </h3>
          ))}
        </div>
      </nav>

      <div className="slider">
        <div
          className="sliderWrapper"
          style={{
            display: 'flex',
            width: `${Shoes.length * 100}vw`,
            transform: `translateX(-${currentIndex * 100}vw)`,
            transition: 'transform 0.5s ease',
          }}
        >
          {Shoes.map((shoe, index) => (
            <div
              key={index}
              className="sliderItem"
              style={{
                width: '100vw',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <img src={shoe.image} alt={shoe.Title} className="sliderImg" />
              <div className="sliderBg"></div>
              <h1 className="sliderTitle">
                {shoe.Title}<br />NEW<br />SEASON<br />upto 20% off
              </h1>
              <h2 className="sliderPrice"><del>{shoe.Reduceprice}</del></h2>
              <h2 className="sliderPrice2">{shoe.price}</h2>
              <Link to='/Nike'><button className="buyButton">BUY NOW!</button></Link>
            </div>
          ))}
        </div>
      </div>

      <section id="sm-banner" className="section-p1">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.3, damping: 20 }}
        >
          <div className="banner-box">
            <h4>crazy deals</h4>
            <h1>buy 1 get 1 free</h1>
            <span>The best classic dress is on sale at Fashvibeo</span>
            <button className="white">Learn More</button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.3, damping: 20 }}
        >
          <div className="banner-box2">
            <h4>spring/summer</h4>
            <h1>upcoming season</h1>
            <span>The best classic dress is on sale at Fashvibeo</span>
            <button className="white">Collection</button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

export default Index;
