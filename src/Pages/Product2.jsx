import React from 'react'
import '../index.css';
import { Link } from 'react-router-dom';
import ImageGallery from '../Data/ImageGallery';
import MotionSection from '../Data/MotionSection';
import Footer from '../Data/Footer';
import Header from '../Data/Header';



function Product2() {
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

    ]
    return (
        <div>



            <div>

          <Header/>




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
                <div class="Featured">    <h2>Related products</h2>

                </div>

                <section id="product1" className="section-p1">
                    <div className="pro-con">
                        {products.map((product) => (
                            <div key={product.id} className="pro" onClick={() => handleRedirect(product.id)}>
                                <img src={product.image} alt={product.title} height="290px" />
                                <div className="des">
                                    <span className="i">Hawaiian shirts</span>
                                    <h5>{product.title} </h5>
                                    <div className="star">★★★★★</div>
                                    <h4>${product.price}</h4>
                                    <a href={product.cartLink} onClick={(e) => e.stopPropagation()}>
                                        <i className="fa fa-shopping-cart"></i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>


           

      <Footer/>

               

            </div>



        </div>
    );
}

export default Product2;