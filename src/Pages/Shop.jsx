
import '../index.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Product1s } from '../Data/Productdata';
import MotionSection from '../Data/MotionSection';
import Footer from '../Data/Footer';
import Header from '../Data/Header';
import { motion } from 'framer-motion';


function Shop() {
  const navigate=useNavigate();
  /*const [loading, setLoading] = useState(true); // Add loading state*/

  /* {loading && (
       <div className="loader_bg">
         <div className="loader">
           Loading...
           <img src="/img/iiiwG0vJQN.gif" alt="Loading" />
         </div>
       </div>
     )}*/
  const handleRedirect = () => {

    window.location.href = "";
  }

  
  return (
   


      <div>

    <Header/>
          <motion.div
         initial={{ opacity: 0, y: -80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 200, delay:  0.2, damping: 10 }}
              className="pro w-[250px] cursor-pointer"
        > <section id="page-shop" > 
          
            <h2>STAY HOME</h2>
            
            <marquee style={{backgroundcolor:"transparent", loop:"-1" ,scrollamount:"5",  width:"30%"}}>
                save more with coupons & up  to 70% off!</marquee>
          
            
        </section  ><br/><br/></motion.div>
       

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
              key={product1.id}
              initial={{ opacity: 0, y: -80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                delay: product1.id * 0.2,
                damping: 10,
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








      <Footer/>


      </div>




  );
}

export default Shop;
