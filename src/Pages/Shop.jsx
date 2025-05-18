import '../index.css';
import { Link, useNavigate } from 'react-router-dom';

import { Product1s } from '../Data/Productdata';
import MotionSection from '../Data/MotionSection';
import Footer from '../Data/Footer';
import Header from '../Data/Header';
import { motion } from 'framer-motion';

function Shop() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 200, delay: 0.2, damping: 10 }}
        className="pro w-[250px] cursor-pointer"
      >
        <section id="page-shop">
          <h2>STAY HOME</h2>
            <motion.div
 
>
<span className="inline-block px-4"  >
    Save more with coupons & up to 70% off!
  </span>
</motion.div>
          
            
        </section  ><br/><br/></motion.div>
       

      <MotionSection>
        <div className="Featured">
          <h2>Featured Products</h2>
          <p>Summer Collection New Modern Design</p>
        </div>
      </MotionSection>

<section id="product1" className="section-p1 px-4">
 

    {Product1s.slice(0, 10).map((product1) => (
      <motion.div
        key={product1.id}
        onClick={() => navigate(product1.link)}
        initial={{ opacity: 0, rotateX: 15, rotateY: -15, scale: 0.9 }}
        animate={{ opacity: 1, rotateX: 0, rotateY: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 15, delay: product1.id * 0.2 }}
        className="pro w-[250px] cursor-pointer"
        style={{
          borderRadius: "15px",
          color: "#00f0ff",
          padding: "10px",
          perspective: 800,
        }}
      >
        <img
          src={product1.image}
          alt={product1.title}
          height="290px"
          style={{ borderRadius: "12px", marginBottom: "12px" }}
        />
        <div className="des">
          <span className="i">{product1.brand}</span>
          <h5>{product1.title}</h5>
          <div className="star">★★★★★</div>
          <h4>${product1.price}</h4>
          <Link href={product1.cartLink} onClick={(e) => e.stopPropagation()}>
            <p>Add to cart</p>
          </Link>
     </div>
      </motion.div>
    ))}
  
</section>

      <section id="pagination" className="section-p1">
        <ul>
          <li><Link to="/Shop" className="active">1</Link></li>
          <li><Link to="/Shop2">2</Link></li>
          <li>
            <Link to="/Shop2">
              <i className="fa fa-arrow-right" />
            </Link>
          </li>
        </ul>
      </section>

      <Footer />
    </div>
  );
}

export default Shop;
