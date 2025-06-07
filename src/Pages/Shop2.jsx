import '../index.css';
import { Link, useNavigate } from 'react-router-dom';
import { Products } from '../Data/Productdata';
import MotionSection from '../Data/MotionSection';
import Footer from '../Data/Footer';
import Header from '../Data/Header';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Sidebar from '../Data/Slidebar'; // Ensure correct path and component


function Shop2() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  // Prevent errors if product.category is undefined
    const filteredProducts = selectedCategory
      ? Products.filter(product => {
          const productCat = product.category || '';
          // Case-insensitive match
          return productCat.toLowerCase() === selectedCategory.toLowerCase();
        })
      : Products.slice(0, 30);
  /*const [loading, setLoading] = useState(true); // Add loading state*/

  /* {loading && (
       <div className="loader_bg">
         <div className="loader">
           Loading...
           <img src="/img/iiiwG0vJQN.gif" alt="Loading" />
         </div>
       </div>
     )}*/
  

  return (




    <div>

      <Header />
        <Sidebar onCategorySelect={setSelectedCategory} />
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

                 </motion.div><br/><br/>
     
             

  <MotionSection>
            <div className="Featured">
              <h2 className='featured-products'>Featured Products</h2>
              <h1 className='summer-collection'>Summer Collection New Modern Design</h1>
            </div>
          </MotionSection>
      
      {/*<MotionSection>  <div className="Featured" style={{paddingTop:'70px'}}>
        <h2 className='featured-products'>New Arrival</h2>
        <h1 className='summer-collection'>Summer Collection New Modern Design</h1>
      </div>
      </MotionSection>*/}


    
              <section id="product1" className="section-p1 px-4 flex flex-wrap gap-8">
                {filteredProducts.length > 0 ? (
                  filteredProducts.slice(15,30).map((product1) => (
                    <motion.div
                      key={product1.id}
                      onClick={() => navigate(product1.link)}
                      initial={{ opacity: 0, rotateX: 15, rotateY: -15, scale: 0.9 }}
                      animate={{ opacity: 1, rotateX: 0, rotateY: 0, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 15,
                       /* delay: product1.id * 0.05*/
                      }}
                      className="product-card"
                    >
                      <img
                        src={product1.image}
                        alt={product1.title}
                        height="290px"
                        style={{ marginBottom: "12px" }}
                      />
                      <div className="des">
                        <span className="i"><b>{product1.brand}</b></span>
                        <h5>{product1.title}</h5>
                        <div className="star">★★★★★</div>
                                       <div className='pric'>
                                 
                                 
                       <h4 style={{ color: 'green' }}>₹{product1.price}</h4>
                     
                       {product1.Reduceprice && product1.Reduceprice > product1.price && (
                         <>
                           <h4 style={{ color: '#777777', fontSize: '15px' }}>M.R.P:</h4>
                           <h4 style={{ color: '#777777', fontSize: '15px' }}>
                             <del>₹{product1.Reduceprice}</del>
                           </h4>
                           <h4 style={{ color:"black",  fontSize: '15px' }}>
                             ({Math.round(((product1.Reduceprice - product1.price) / product1.Reduceprice) * 100)}% off)
                           </h4>
                           
                         </>
                       
                       )}
                     </div>
                     
                     
                     {(product1.save || product1.coupon) && (
                       <div style={{ 
                         display: 'flex', 
                         gap: '8px', 
                         alignItems: 'center', 
                         paddingBottom: '10px', 
                         marginTop: '5px', 
                         flexWrap: 'wrap' 
                       }}>
                         {product1.save && (
                           <div style={{
                             backgroundColor: 'lightgreen',
                             color: 'black',
                             fontSize: '14px',
                             padding: '10px 10px',
                             borderRadius: '4px',
                             fontWeight: 'bold'
                           }}>
                             {product1.save}
                           </div>
                         )}
                         {product1.coupon && (
                           <div style={{ color: 'black', fontSize: '13px' }}>
                             {product1.coupon}
                           </div>
                         )}
                       </div>
                     )}
                      <Link to={"/cart"} onClick={(e) => e.stopPropagation()}>
                                         Add to cart
                                       </Link>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div>No products found for this category.</div>
                )}
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