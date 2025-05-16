
import '../index.css';
import { Link } from 'react-router-dom';
import ImageGallery from '../Data/ImageGallery';
import MotionSection from '../Data/MotionSection';
import Footer from '../Data/Footer';
import Header from '../Data/Header';



function Product3() {
  
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
        image: '/assets/img/g1.webp',
        brand:'Ketch ',
        title: 'Blue Skinny Fit Clean Look Jeans ',
        price: 188,
        link: 'product.html',
        cartLink: '/cart'
    },
    {
        image: '/assets/img/z1.webp',
        brand:'Highlander',
        title: 'Charcoal Straight Fit Jeans',

        price: 111,
        cartLink: '/cart'
    },
    {
        image: '/assets/img/n1.webp',
        brand:'Highlander',
        title: 'Blue Relaxed Fit Stretchable Jeans',
        price: 98,
        cartLink: '/cart'
    },
    {
        image: '/assets/img/o1.webp',
        brand:'Highlander',
        title: 'Blue Slim Fit Stretchable Jeans',
        price: 150,
        cartLink: '/cart'
    },

]
  return (
    <div>

         <Header/>

       <section id="prodetails" className="section-p1 section-m1">
       <ImageGallery
        mainImage="/assets/img/j1.webp"
        thumbnails={[
          "/assets/img/j2.webp",
          "/assets/img/j3.webp",
         
         
          "/assets/img/j4.webp",
          "/assets/img/j5.webp"
        ]}
      />     
        <div className="single-pro-details">
            <h6>Home / Jeans</h6>
            <h4>
                Highlander</h4>
            <h2>
                $90.00
            </h2>
            <select>
                <option>Select Size</option>
                <option>30</option>
                <option>34</option>
                <option>36</option>
                <option>38</option>
            </select>
            <input type="number" defaultValue="1"/>
            <button className="normal" ><Link to='/Cart' >Add to Cart</Link></button>
            <h4>Product Details:</h4>
            <span>Highlander Men Blue Tapered Fit Clean Look Jeans
                </span>
        </div>

         </section>
     <div class="Featured">    <h2>Related products</h2> </div>
   
         

                <section id="product1" className="section-p1">
               
                    <div className="pro-con">
                        {products.map((product) => (
                            <div key={product.id} className="pro" >
                                <img src={product.image} alt={product.title} height="280px" />
                                <div className="des">
                                    <span className="i">{product.brand}</span>
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


                  <MotionSection>
        <section id="news">
          <div>
            <h1>Subscribe To The Newsletter</h1>
          </div>
          <div className="sub">
            <input type="email" placeholder="Enter your email" className="normal" /><br /><br />
            <button className="normal">Subscribe</button>
          </div>
        </section>
      </MotionSection>

      <Footer/>
    </div>
  );
}

export default Product3
