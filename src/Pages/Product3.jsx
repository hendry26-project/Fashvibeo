
import '../index.css';
import { Link } from 'react-router-dom';
import ImageGallery from '../Data/ImageGallery';

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
     {
        image: '/assets/img/j6.webp',
        brand:'Highlander',
        title: '  Blue Relaxed Fit Clean Look Jeans',
        price: 100,
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
            <span>Blue medium wash 5-pocket mid-rise jeans, clean look with heavy fade, has a button
               and zip closure, waistband with belt loops
                </span>
        </div>

         </section>
     <div class="Featured">    <h2>Related products</h2> </div>
   
         

                <section id="product1" className="section-p1">
               
                   <div className="pro-con" style={{ display: 'contents' }}>
                        {products.slice(0, 10).map((product) => (

                            <div key={product.id} className="pro" >
                                <img src={product.image} alt={product.title} height="280px" />
                                <div className="des">
                                    <span className="i">{product.brand}</span>
                                    <h5>{product.title} </h5>
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

export default Product3
