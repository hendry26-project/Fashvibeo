import '../index.css';
import { Link, useNavigate } from 'react-router-dom';
import { Products } from '../Data/Productdata';
import MotionSection from '../Data/MotionSection';
import Footer from '../Data/Footer';
import Header from '../Data/Header';
import { motion } from 'framer-motion';


function Shop2() {
  const navigate = useNavigate();
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

      <Header />
    <motion.div
         initial={{ opacity: 0, y: -80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 200, delay:  0.2, damping: 10 }}
              className="pro w-[250px] cursor-pointer"
        >
                             <div className="newSeason">
        <div className="nsItem">

          <h1 class="nsTitle">NEW SEASON </h1>
          <h1 className="nsTitle">NEW COLLECTION</h1>
          <a href="#nav">
            <button className="choose">CHOOSE YOUR STYLE</button>
          </a>
        </div>

      </div>

                 </motion.div>
     
             


      
      <MotionSection>  <div className="Featured">
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
          <li><Link to="/Shop" >1</Link></li>
          <li><Link to="/Shop2" className="active">2</Link></li>
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

export default Shop2;