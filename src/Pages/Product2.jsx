
import '../index.css';
import { Link } from 'react-router-dom';
import ImageGallery from '../Data/ImageGallery';
import { useNavigate } from 'react-router-dom';
import Footer from '../Data/Footer';
import Header from '../Data/Header';
import { motion } from 'framer-motion';



function Product2() {
  
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
  

    const products = [
        {
            image: '/assets/img/a1.jpg',
            title: 'Red Hawaii ',
            price: 58,
            link: 'product.html',
            cartLink: '/cart'
        },
        {
            image: '/assets/img/a2.jpg',
            title: 'Aloha Republic',

            price: 68,
            cartLink: '/cart'
        },
        {
            image: '/assets/img/a3.jpg',
            title: 'Route 66',
            price: 45,
            cartLink: '/cart'
        },
        {
            image: '/assets/img/a4.jpg',
            title: 'Hibiscus Mania',
            price: 38,
            cartLink: '/cart'
        },
         {
            image: '/assets/img/a7.jpg',
            title: 'Aloha Shirt ',
            price: 58,
            cartLink: '/cart'
        },

    ]
    return (
        <div>



            <div>

                <Header />




                <section id="prodetails" className="section-p1 section-m1">
                    <ImageGallery
                        mainImage="/assets/img/HSS152-Floral-Hipster.jpg"
                        thumbnails={[
                            "/assets/img/p1.webp",
                            "/assets/img/p2.webp",


                            "/assets/img/p3.jpg",
                            "/assets/img/a5.jpg"
                        ]}
                    />


                    <div className="single-pro-details">
                        <h6>Home / Hawaiian shirts</h6>
                        <h4>Floral Hipster</h4>
                        <h2>
                            $139.00
                        </h2>
                        <select>
                            <option>Select Size</option>
                            <option>XL</option>
                            <option>XXL</option>
                            <option>Small</option>
                            <option>Large</option>
                        </select>
                        <input type="number" defaultValue="1" />
                        <button className="normal"  ><Link to={"/Cart"} >Add to Cart</Link></button>
                        <h4>Product Details:</h4>
                        <span>100% Cotton poplin Hawaiian short-sleeve shirt with pattern-matched chest pocket. Genuine
                            coconut shell buttons. Cool and lightweight. Made in Honolulu by Aloha Republic.
                        </span>
                    </div>



                </section>
                <div class="Featured">
                    <h2>Related products</h2>

                </div>
                
      <section id="product1" className="section-p1">
       
          {products.slice(0, 10).map((product) => (
            <motion.div
             key={product.id}
        onClick={() => navigate(product.link)}
        initial={{ opacity: 0, rotateX: 15, rotateY: -15, scale: 0.9 }}
        animate={{ opacity: 1, rotateX: 0, rotateY: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 15, delay: product.id * 0.2 }}
        className="pro w-[250px] cursor-pointer"
        
             
             
            >
              <img
                src={product.image}
                alt={`Product ${product.id}`}
                height="290px"
                className="rounded-md"
              />
              <div className="des">
                <span className="i">Hawaiian shirts</span>
                <h5>{product.title}</h5>
                
                <div className="star">★★★★★</div>
                <h4>${product.price}</h4>
                <Link
                  href={product.cartLink}
                  onClick={(e) => e.stopPropagation()}
                  >
                <p> Add to cart</p>
                </Link>
              </div>
            </motion.div>
          ))}
      
      </section>




                <Footer />



            </div>
            </div>




            );
}

            export default Product2;