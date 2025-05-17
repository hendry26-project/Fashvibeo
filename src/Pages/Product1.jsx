
import '../index.css';
import { Link } from 'react-router-dom';
import ImageGallery from '../Data/ImageGallery.js';

 
import Footer from '../Data/Footer.js';
import Header from '../Data/Header.js';





function Product1() {

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
            image: '/assets/img/T1.jpg',

            price: 118,
            link: 'product.html',
            cartLink: '/cart'
        },
        {
            image: '/assets/img/T2.jpg',


            price: 111,
            cartLink: '/cart'
        },
        {
            image: '/assets/img/T3.jpg',
            price: 98,
            cartLink: '/cart'
        },
        {
            image: '/assets/img/T4.jpg',
            price: 150,
            cartLink: '/cart'
        },
         {
            image: '/assets/img/n2.jpg',


            price: 88,
            cartLink: '/cart'
        },

    ]
    return (
      



            <div>
<Header/>




      <section id="prodetails" className="section-p1 section-m1">
        
    <ImageGallery
        mainImage="/assets/img/h1.jpg"
        thumbnails={[
          "/assets/img/H2.jpg",
          "/assets/img/H3.jpg",
         
         
          "/assets/img/H6.jpg",
          "/assets/img/H8.jpg"
        ]}
      />
    
                    <div className="single-pro-details">
                        <h6>Home /Hawaiian shirts</h6>
                        <h4>
                            Button Down Shirts</h4>
                        <h2>
                            $90.00
                        </h2>
                        <select>
                            <option>Select Size</option>
                            <option>S</option>
                            <option>L</option>
                            <option>XL</option>
                            <option>XXL</option>
                        </select>
                        <input type="number" defaultValue="1" />
                        <button className="normal"  ><Link to={"/Cart"} >Add to Cart</Link></button>
                        <h4>Product Details:</h4>
                        <span>Hawaiian Shirts for Men Adult Short Sleeve Shirts Men Beach Shirts Mens Hawaiian Shirts Casual Button Down
                            Shirts 80s 90s Clothes Vintage Men Shirt Funny Party Beach Clothing Mens Plaid Button
                        </span>
                    </div>
                


                
                </section>


    
  


                
                <div className="
     Featured">    <h2>Related products</h2>

                </div>




     <section id="product1" className="section-p1">
                    <div className="pro-con" style={{display:'contents'}}>
                        {products.slice(0, 10).map((product) => (
                              
                            <div key={product.id} className="pro" onClick={() => handleRedirect(product.id)}>
                                <img src={product.image} alt={product.title} height="290px" />
                                <div className="des">
                                    <span className="i">Hawaiian shirts</span>
                                    <h5>Hawaiian Leaf Aloha Shirts </h5>
                                    <div className="star">★★★★★</div>
                                    <h4>${product.price}</h4>
                                    <a href={product.cartLink} onClick={(e) => e.stopPropagation()}>
                                        <p>Add to cart</p>
                                    </a>
                                </div>
                            </div>
                           
                        ))}
                    </div>
                </section>

               









      <Footer/>
               
            </div>



       
    );
}

export default Product1;