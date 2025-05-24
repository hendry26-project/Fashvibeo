import  { useState } from 'react';
import '../index.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ImageGallery from '../Data/ImageGallery';
import Footer from '../Data/Footer';
import Header from '../Data/Header';
import { motion } from 'framer-motion';
import Breadcrumbs from "../Data/Breadcrumbs";

const allProducts = [
  {
    id: 1,
    category: "Hawaiian shirts",
    title: "Button Down Shirts",
    price: 139.00,
    mainImage: "/assets/img/HSS152-Floral-Hipster.jpg",
     thumbnails: ["/assets/img/p1.webp", "/assets/img/p2.webp", "/assets/img/p3.jpg", "/assets/img/a5.jpg"],
   
    sizes: ['S', 'L', 'XL', 'XXL'],
    details: "100% Cotton poplin Hawaiian short-sleeve shirt with pattern-matched chest pocket. Genuine coconut shell buttons. Cool and lightweight. Made in Honolulu by Aloha Republic.",
    relatedProducts: [
       { id: 1, image: '/assets/img/a1.jpg', brand:'Hawaiian shirts',title: "Red Hawaii", price: 58, cartLink: '/cart' },
      { id: 2, image: '/assets/img/a2.jpg',brand:'Hawaiian shirts', title: "Aloha Republic", price: 68, cartLink: '/cart' },
      { id: 3, image: '/assets/img/a3.jpg', brand:'Hawaiian shirts',title: "Route 66", price: 45, cartLink: '/cart' },
      { id: 4, image: '/assets/img/a4.jpg', brand:'Hawaiian shirts',title: "Hibiscus Mania", price: 38, cartLink: '/cart' },
      { id: 5, image: '/assets/img/a7.jpg', brand:'Hawaiian shirts',title: "Aloha Shirt", price: 58, cartLink: '/cart' },
    ]
  },
  {
    id: 2,
    category: " Jeans",
    title: "Highlander",
    price: 90.00,
    mainImage: "/assets/img/j1.webp",
    thumbnails: ["/assets/img/j2.webp", "/assets/img/j3.webp", "/assets/img/j4.webp", "/assets/img/j5.webp"],
     sizes: ['30', '34', '36', '38'],
   
   
    details: "Blue medium wash 5-pocket mid-rise jeans, clean look with heavy fade, has a button and zip closure, waistband with belt loops",
    relatedProducts: [
        { id: 6, image: '/assets/img/g1.webp', brand: "Ketch", title: "Blue Skinny Fit Clean Look Jeans", price: 188, cartLink: '/cart' },
      { id:7, image: '/assets/img/z1.webp', brand: "Highlander", title: "Charcoal Straight Fit Jeans", price: 111, cartLink: '/cart' },
      { id: 8, image: '/assets/img/n1.webp', brand: "Highlander", title: "Blue Relaxed Fit Stretchable Jeans", price: 98, cartLink: '/cart' },
      { id: 9, image: '/assets/img/o1.webp', brand: "Highlander", title: "Blue Slim Fit Stretchable Jeans", price: 150, cartLink: '/cart' },
      { id: 10, image: '/assets/img/j6.webp', brand: "Highlander", title: "Blue Relaxed Fit Clean Look Jeans", price: 100, cartLink: '/cart' },
     
    ]
  },
  {
    id: 3,
    category: "Hawaiian shirts",
    title: "Button Down Shirts",
    price: 90,
    mainImage: "/assets/img/H1.jpg",
     thumbnails: ['/assets/img/H2.jpg', '/assets/img/H3.jpg', '/assets/img/H6.jpg', '/assets/img/H8.jpg'],
     sizes: ['XL', 'XXL', 'Small', 'Large'],
   
    details: "Hawaiian Shirts for Men Adult Short Sleeve Shirts Men Beach Shirts Mens Hawaiian Shirts Casual Button Down Shirts 80s 90s Clothes Vintage Men Shirt Funny Party Beach Clothing Mens Plaid Button",
    relatedProducts: [
      { id: 11, image: '/assets/img/T1.jpg', title: "Hawaiian Leaf Aloha Shirts", price: 118, cartLink: '/cart' },
      { id: 12, image: '/assets/img/T2.jpg', title: "Hawaiian Leaf Aloha Shirts", price: 111, cartLink: '/cart' },
      { id: 13, image: '/assets/img/T3.jpg', title: "Hawaiian Leaf Aloha Shirts", price: 98, cartLink: '/cart' },
      { id: 14, image: '/assets/img/shorts.webp', title: "Hawaiian Leaf Aloha Shirts", price: 150, cartLink: '/cart' },
      { id: 15, image: '/assets/img/n2.jpg', title: "Hawaiian Leaf Aloha Shirts", price: 88, cartLink: '/cart' },
     
    ]
  }
];

function CombinedProductPage() {
  const { id } = useParams();
  const product = allProducts.find(p => p.id === Number(id));
  const navigate = useNavigate();

  // Local state for size and quantity
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div className="p-8 text-center text-xl">Product not found</div>;

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }
    // Here you would usually update your cart context or state
    // For now, just navigate to the cart page
    navigate('/cart');
  };

  return (
    <div>
      <Header />
      <Breadcrumbs product={product} />

      <section id="prodetails" className="section-p1 section-m1 flex flex-wrap gap-8 px-6 py-10 max-w-7xl mx-auto">
        {/* Image Gallery */}
        <ImageGallery mainImage={product.mainImage} thumbnails={product.thumbnails} />

        {/* Product Details */}
        <div className="single-pro-details ">
          <h6 >Home / {product.category}</h6>
          <h4 >{product.title}</h4>
          <h2 >${product.price}</h2>

          
          <select
            id="size-select"
            value={selectedSize}
            onChange={e => setSelectedSize(e.target.value)}
            className="mb-4 w-full border border-gray-300 rounded p-2"
          >
            <option value="">Select Size</option>
            {product.sizes.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>

         
          <input
            id="quantity"
            type="number"
            min="1"
            value={quantity}
            onChange={e => setQuantity(Number(e.target.value))}
            className="mb-6 w-full border border-gray-300 rounded p-2"
          />

          <button
            className="normal"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>

          <h4 >Product Details:</h4>
          <p style={{color:'black'}} >{product.details}</p>
        </div>
      </section>

      <div className="Featured mt-12 mb-6 px-6 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
      </div>

      <section id="product1" className="section-p1 ">
        {product.relatedProducts.map((prod) => (
          <motion.div
            key={prod.id}
            onClick={() => navigate(prod.cartLink)}
            initial={{ opacity: 0, rotateX: 15, rotateY: -15, scale: 0.9 }}
            animate={{ opacity: 1, rotateX: 0, rotateY: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 15, delay: prod.id * 0.1 }}
            className="pro w-[250px] cursor-pointer "
          >
            <img
              src={prod.image}
              alt={prod.title}
              height="290"
              className="rounded-md "
            />
            <div className="des">
              {prod.brand && <span className='i'>{prod.brand}</span>}
              <h5 >{prod.title}</h5>
              <div className="star">★★★★★</div>
              <h4 >${prod.price}</h4>
              <Link 
                to={prod.cartLink}
                onClick={(e) => e.stopPropagation()}
                 s
              >
               <p>Add to cart</p> 
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

      <Footer />
    </div>
  );
}

export default CombinedProductPage;
