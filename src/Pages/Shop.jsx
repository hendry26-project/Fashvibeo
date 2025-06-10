import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import '../index.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { shop, shop2, smart, bag, Shoes } from '../Data/Productdata';
import { Products } from '../Data/Productdata';
import Footer from '../Data/Footer';
import Header from '../Data/Header';
import { motion } from 'framer-motion';
import CategoryBar from '../Data/Slidebar';
import { useCart } from '../Data/CartContext';

function Shop() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const {addToCart}=useCart();

  const [selectedCategory, setSelectedCategory] = useState(slug || "");
  const [selectedGender, setSelectedGender] = useState("");

  // Sync slug param with selectedCategory
  useEffect(() => {
    if (slug && slug !== selectedCategory) {
      setSelectedCategory(slug);
    }
  }, [slug, selectedCategory]);

  const filteredProducts = Products.filter((product) => {
    const productCategorySlug = product.categorySlug || "";
    const selectedCatSlug = selectedCategory.toLowerCase();

    const categoryMatch = selectedCategory
      ? productCategorySlug.toLowerCase() === selectedCatSlug
      : false; // change `true` to `false` so nothing shows without category

    const genderMatch = selectedGender
      ? (product.gender || "").toLowerCase() === selectedGender.toLowerCase()
      : true;

    return categoryMatch && genderMatch;
  }).slice(0, 10);

  const handleCardClick = (link) => {
    navigate(link);
  };


  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    if (slug) {
      setShowBanner(false); // Hide when category is selected
    } else {
      setShowBanner(true);  // Show when no category is selected
    }
  }, [slug]);


  return (
    <div>
      <Header />

      <CategoryBar
        onCategorySelect={({ slug, gender }) => {
          setSelectedCategory(slug);
          setSelectedGender(gender || "");
          navigate(`/shop/${slug}`);
        }}
      />
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.2, damping: 10 }}
          className="pro w-[250px] cursor-pointer"
        >
          <div className="newSeason">
            <div className="nsItem">
              {/* <h1 className="nsTitle">NEW SEASON</h1>
                <h1 className="nsTitle">NEW COLLECTION</h1>
                <a href="#nav">
                  <button className="choose">CHOOSE YOUR STYLE</button>
                </a>*/}
            </div>
          </div>
        </motion.div>
      )}
      {slug && (
        <>


          <div style={{ display: 'flex' }}>
            <main style={{ flexGrow: 1, padding: '1rem', lineHeight: "10px" }}>
              <div className="Featured">
                <h2 className="featured-products">Results:</h2>
                <p style={{ color: 'black' }}>Check each product page for other buying options. Price and other details may vary based on product size and colour.</p>

              </div>

              <section id="product1" className="section-p1">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product1) => (
                    <motion.div
                      key={product1.id}
                      className="pro"
                      role="button"
                      tabIndex={0}
                      onClick={() => handleCardClick(product1.link)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleCardClick(product1.link);
                        }
                      }}
                      initial={{ opacity: 0, rotateX: 15, rotateY: -15, scale: 0.9 }}
                      animate={{ opacity: 1, rotateX: 0, rotateY: 0, scale: 1 }}
                      transition={{ type: 'spring', stiffness: 120, damping: 15 }}
                      style={{ cursor: 'pointer' }}
                    >
                      <img
                        src={product1.image}
                        alt={product1.title}
                        height="290px"
                        style={{ marginBottom: '12px' }}
                      />
                      <div className="des">
                        <span className="i"><b>{product1.brand}</b></span>
                        <h5>{product1.title}</h5>
                        <div className="star">★★★★★</div>

                        <div className="pric">
                          <h4 className="price">₹{product1.price}</h4>
                         {product1.Reduceprice && (
    parseFloat(product1.Reduceprice.replace(/,/g, '')) > parseFloat(product1.price.replace(/,/g, '')) && (
      <>
        <h4 className='mrp'>M.R.P:</h4>
        <h4 className='mrp'>
          <del>₹{product1.Reduceprice}</del>
        </h4>
        <h4 className='red'>
          (
            {Math.round(
              ((parseFloat(product1.Reduceprice.replace(/,/g, '')) - parseFloat(product1.price.replace(/,/g, '')))
              / parseFloat(product1.Reduceprice.replace(/,/g, ''))) * 100
            )}% off)
        </h4>
      </>
    )
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
                              <div className='save'>{product1.save}</div>
                            )}
                            {product1.coupon && (
                              <div className='coupon'>{product1.coupon}</div>
                            )}
                          </div>
                        )}
                        <Link   onClick={(e) => {
    e.preventDefault();
    e.stopPropagation(); 
    addToCart(product1);}}>Add to cart</Link>
                      
      
                </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center text-gray-500 py-10">
                    No products found for this category.
                  </div>
                )}
              </section>
            </main>
          </div>

        </>
      )}
      <h2 className="related-title">Shop men's items</h2>
      <section id="product3" className='section-p3' >

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}

          slidesPerView={6}

          navigation


          loop={true}
          breakpoints={{
            375: {
              slidesPerView: 5,
              centeredSlides: true   // iPhone X and similar
            },
            768: {
              slidesPerView: 6,
              centeredSlides: true   // tablets like iPad
            },
            1024: {
              slidesPerView: 6,
              centeredSlides: false  // Windows desktop and larger screens
            },
          }}
          className="brand "
        >


          {shop.map((product1) => (
            <SwiperSlide key={product1.id}>
              <motion.div
                onClick={() => navigate(product1.link)}
                initial={{ opacity: 0, rotateX: 15, rotateY: -15, scale: 0.9 }}
                animate={{ opacity: 1, rotateX: 0, rotateY: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 15, /*delay: product1.id * 0.2 */ }}

                style={{
                  borderRadius: "15px",
                  color: "#00f0ff",
                  padding: "10px",
                  perspective: 800,
                  
                }}
              >


                <img
                  src={product1.image}
                  className='bor'
                alt=""
                />

                <div>












                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <h2 className="related-title">More products to discover</h2>
      <section id="product3" className='section-p3' >

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}

          slidesPerView={6}

          navigation


          loop={true}
          breakpoints={{
            375: {
              slidesPerView: 5,
              centeredSlides: true   // iPhone X and similar
            },
            768: {
              slidesPerView: 6,
              centeredSlides: true   // tablets like iPad
            },
            1024: {
              slidesPerView: 6,
              centeredSlides: false  // Windows desktop and larger screens
            },
          }}
          className="brand "
        >


          {shop2.map((product1) => (
            <SwiperSlide key={product1.id}>
              <motion.div
                onClick={() => navigate(product1.link)}
                initial={{ opacity: 0, rotateX: 15, rotateY: -15, scale: 0.9 }}
                animate={{ opacity: 1, rotateX: 0, rotateY: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 15, /*delay: product1.id * 0.2 */ }}

                style={{
                  borderRadius: "15px",
                  color: "#00f0ff",
                  padding: "10px",
                  perspective: 800,
                }}
              >


                <img
                  src={product1.image}
                  className='bor'
                  alt=''

                />

                <div>












                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>



      <div className='twopro'>
        <section id="product4" className='section-p4' >
          <h2 className="related-title" style={{ paddingLeft: "10px" }}>Additional products for you</h2>

          <Swiper
            modules={[Pagination]}
            spaceBetween={0}

            slidesPerView={2}




            loop={true}
            
            className="smart "
          >


            {bag.slice(0, 2).map((product1) => (
              <SwiperSlide key={product1.id}>
                <motion.div
                  onClick={() => navigate(product1.link)}
                  initial={{ opacity: 0, rotateX: 15, rotateY: -15, scale: 0.9 }}
                  animate={{ opacity: 1, rotateX: 0, rotateY: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 120, damping: 15, /*delay: product1.id * 0.2 */ }}

                  style={{
                    borderRadius: "15px",
                    color: "#00f0ff",
                    padding: "10px",
                    perspective: 800,
                  }}
                >


                 <div >
                    <img
                      src={product1.image}
                      className='bir'
                      alt=''



                    />
                    <div className='psf'>
                      <p>{product1.title}</p>
                      <h1 >₹{product1.price}</h1>

                    </div>













                  </div>
                </motion.div>
              </SwiperSlide>
            ))}

          </Swiper>
        </section>

        <section id="product4" className='section-p4' >
          <h2 className="related-title" style={{ paddingLeft: "10px" }}>You might also like</h2>
          <Swiper
            modules={[Pagination]}
            spaceBetween={0}

            slidesPerView={3}




            loop={true}
           
            className="smart "
          >


            {smart.slice(0, 3).map((product1) => (
              <SwiperSlide key={product1.id}>
                <motion.div
                  onClick={() => navigate(product1.link)}
                  initial={{ opacity: 0, rotateX: 15, rotateY: -15, scale: 0.9 }}
                  animate={{ opacity: 1, rotateX: 0, rotateY: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 120, damping: 15, /*delay: product1.id * 0.2 */ }}

                  style={{
                    borderRadius: "15px",
                    color: "#00f0ff",
                    padding: "10px",
                    perspective: 800,
                   
                  }}
                >






                  <div>
                    <img
                      src={product1.image}
                      className='bir'
                      alt=''



                    />
                    <div className='psf'>
                      <p>{product1.title}</p>
                      <h1 >₹{product1.price}</h1>

                    </div>













                  </div>
                </motion.div>
              </SwiperSlide>
            ))}

          </Swiper>
        </section>
      </div>

      <section id="banner2" className="section-m4">
        {/* <h3>READ MORE</h3>
          <h2>Up to <span>70% Off</span> - All T-Shirts & Accessories</h2><br /><br />
          <button className="normal">Explore More</button>//* */}
      </section>
      <h2 className="related-title"  >Nike sneakers |Up to 20% off</h2>
      <section id="product3" className='section-p3' >

        <Swiper
          modules={[ Pagination]}
          spaceBetween={0}

          slidesPerView={5}

        


          loop={true}
         
          className="brand "
        >


          {Shoes.slice(0, 5).map((product1) => (
            <SwiperSlide key={product1.id}>
              <motion.div
                onClick={() => navigate(product1.link)}
                initial={{ opacity: 0, rotateX: 15, rotateY: -15, scale: 0.9 }}
                animate={{ opacity: 1, rotateX: 0, rotateY: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 15, /*delay: product1.id * 0.2 */ }}

                style={{
                  borderRadius: "15px",
                  color: "#00f0ff",
                  padding: "10px",
                  perspective: 800,
                }}
              > 
               <img
                  src={product1.image}
                  className='bor'
                  alt=''


                />


                <div className='psf'>

                  <p >{product1.Title}</p>
                  <h1>₹{product1.price}</h1>
                  <p>M.R.P: ₹<del>{product1.Reduceprice}</del></p>


                </div>

                <div>












                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <br /><br />
      <Footer />
    </div>
  );
}

export default Shop;
