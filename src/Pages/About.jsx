import { motion } from 'framer-motion';
import '../index.css';
import MotionSection from '../Data/MotionSection';
import Footer from '../Data/Footer';
import Header from '../Data/Header';

function About() {
  return (
    <div>
      


   

     <Header/>
      <motion.div
         initial={{ opacity: 0, y: -80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 200, delay:  0.2, damping: 10 }}
              className="pro w-[250px] cursor-pointer"
        >
            <div className="about" >
            <div className="ns2">
                
            </div>
            <div className="ns1">
              <img src="/assets/img/banner-about.jpg" alt=""/>
               
            </div>
            <div className="ns3">
                
            </div>
        </div><br></br>
           
        </motion.div>
       


           <motion.div
            
              initial={{ opacity: 0, y: -80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 200, delay:  0.2, damping: 10 }}
              className="pro w-[250px] cursor-pointer"
              
            >
                   
        <section id="abouthead" className="section-p1">
            <img src="/assets/img/2680365.jpg" alt=""/>
            <div>
                <h1>Who We Are?</h1>
            <p>We founded Fashvibeo in January of 2012. In October 2014, not quite 3 years later, our team reached a significant milestone – the $1million sales mark; qualifying us for membership in the Envato Power Elite program. Who are we? How did we accomplish such a remarkable sales feat in so short a time?

                 We live and work in newyork. We’ve worked together for a number of years, but our turning point came in 2012, when we hooked up with ThemeForest.
                
                We believe our accomplishments are a result of hard work, team spirit, and a determination to constantly improve upon our products.
                
                Our name? There’s nothing symbolic about Fashvibeo. We made it up </p>
                <abbr title="">Feel the summer mood with our  latest exclusive 
                    clothes collection featuring bright colors and hand-painted ornaments!.</abbr><br/><br/>
                    <div className="marquee-wrapper">
  <div className="marquee-content">
    Discover our new assortment of suits, ties, shoes and shirts incorporating elegance,
    style and a fresh look from our designers.
  </div>
</div>
            </div>
            
         </section>
         <section id="about-app" className="section-p1">
  <h1>
    Download Our <a href="">App</a>
  </h1>
  <div className="video">
    <video autoPlay muted loop src="/assets/img/app.mp4" />
  </div>
</section>
<br />
            </motion.div>
     
<MotionSection>
   <section id="service" className="section-p1">
                    
            <div  className="money"> 
                <img src="/assets/img/icon_mony.png" alt=""/><p className="highlight">Money back </p>
    
            </div >
            <div className="gift">
            <img src="/assets/img/icon_gift.png" alt=""/><p className="highlight">Special Gifts</p>
            </div >
            <div className="car">
            <img src="/assets/img/icon_car.png" alt=""/><p className ="highlight">Free Shipping</p>
    
            
        </div>
        
          </section><br/><br></br>

</MotionSection>
       

       

      


   

     

<Footer/>

      


    </div>


  

    
  )
}

export default About
