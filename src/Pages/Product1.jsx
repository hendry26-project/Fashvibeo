import '../index.css';
import { Link, useNavigate } from 'react-router-dom';
import ImageGallery from '../Data/ImageGallery.js';

import Footer from '../Data/Footer.js';
import Header from '../Data/Header.js';

import { motion } from 'framer-motion';

function Product1() {
  const navigate = useNavigate();

  
  

  const products = [
    {
      id: 1,
      image: '/assets/img/T1.jpg',
      price: 118,
      link: 'product.html',
      cartLink: '/cart',
    },
    {
      id: 2,
      image: '/assets/img/T2.jpg',
      price: 111,
      cartLink: '/cart',
    },
    {
      id: 3,
      image: '/assets/img/T3.jpg',
      price: 98,
      cartLink: '/cart',
    },
    {
      id: 4,
      image: '/assets/img/shorts.webp',
      price: 150,
      cartLink: '/cart',
    },
    {
      id: 5,
      image: '/assets/img/n2.jpg',
      price: 88,
      cartLink: '/cart',
    },
  ];

  return (
    <div>
      <Header />

      <section id="prodetails" className="section-p1 section-m1">
        <ImageGallery
          mainImage="/assets/img/h1.jpg"
          thumbnails={[
            '/assets/img/H2.jpg',
            '/assets/img/H3.jpg',
            '/assets/img/H6.jpg',
            '/assets/img/H8.jpg',
          ]}
        />

        <div className="single-pro-details">
          <h6>Home / Hawaiian shirts</h6>
          <h4>Button Down Shirts</h4>
          <h2>$90.00</h2>
          <select>
            <option>Select Size</option>
            <option>S</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
          </select>
          <input type="number" defaultValue="1" />
          <button className="normal">
            <Link to="/Cart">Add to Cart</Link>
          </button>
          <h4>Product Details:</h4>
          <span>
            Hawaiian Shirts for Men Adult Short Sleeve Shirts Men Beach Shirts Mens
            Hawaiian Shirts Casual Button Down Shirts 80s 90s Clothes Vintage Men
            Shirt Funny Party Beach Clothing Mens Plaid Button
          </span>
        </div>
      </section>

      <div className="Featured">
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
                <h5>Hawaiian Leaf Aloha Shirts</h5>
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
  );
}

export default Product1;
