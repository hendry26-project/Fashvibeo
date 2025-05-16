

import '../index.css';
import { Link } from 'react-router-dom';

import Footer from '../Data/Footer';
import Header from '../Data/Header';
import { motion } from 'framer-motion';
import MotionSection from '../Data/MotionSection';


function Blog() {

  const studycases = [
    {
      no: "13/01",
      image: "/assets/img/R.jfif",
      title: "The Cotton-Jersey Zip-Up Hoodie",
      paragraph: `Looking for a sweatshirt that keeps you warm and dry all day? Look 
        no further than this rain defender loose-fit heavyweight sweatshirt. This 100% 
        cotton sweatshirt is perfect for those cold, rainy days. The “Rain Defender” 
        technology will keep you dry, while the loose fit allows you to move and breathe 
        easily. In addition, the heavyweight fabric will keep you warm all day long. 
        Whether working outside or just walking, this sweatshirt is perfect for any occasion.`,
    },
    {
      no: "12/04",
      image: "/assets/img/2 w.jpg",
      title: "How to style a Quiff",
      paragraph: `Do you need a beautiful and unique dress for your next special occasion? 
        Look no further than this chiffon bridesmaid dress! This gorgeous dress features a 
        scoop neckline, lace chiffon fabric, and a hi-lo hemline that is sure to turn heads...`,
    },
    {
      no: "12/01",
      image: "/assets/img/1000_F_597940292_dmaVD664ccNHMDJqi0Wv0SCSexklLyhO.jpg",
      title: "Must-Have Skater Girl Items",
      paragraph: `Experience effortless charm with multi-colored plane dress, crafted for girls. 
        Featuring a regular fit and long sleeves...`,
    },
    {
      no: "16/01",
      image: "/assets/img/limited_edition_shirts_white_extreme_cutaway_collar_shirt_2000x.jpg",
      title: "Runway-Inspired Trends",
      paragraph: `This is something a lot of companies ignore when they're trying to write 
        product descriptions fast. A great product description shouldn't be able to apply to any similar product...`,
    },
    {
      no: "10/03",
      image: "/assets/img/k.jpg",
      title: "AW20 Menswear Trends",
      paragraph: `Experience comfort and style with blue regular-fit jeans and shirts, shoes, ties, etc. 
        Crafted from a durable blend of cotton and spandex...`,
    },
  ];

  return (



    <div>
      <Header />
      
        
      
       <motion.div
         initial={{ opacity: 0, y: -80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 200, delay:  0.2, damping: 10 }}
              className="pro w-[250px] cursor-pointer"
        >        <section id="page-shopblog" className="blog-header">

          <div className="img1">
            <img src="/assets/img/1.png" alt="" />

          </div>

          <p><b>Read all  case studies about  our products! </b>
          </p>

        </section  ><br /></motion.div>


    
    
      <MotionSection>
        <section id="blog">

          {studycases.map((studycase) => (
            <div className='blog-box' key={studycase.no}>
              <div className="blog-img">
                <img src={studycase.image} alt={studycase.title} />
              </div>
              <div className="blog-details">
                <h4>{studycase.title}</h4>
                <p>{studycase.paragraph}</p>
                <a href="">CONTINUE READING</a>
              </div>
              <h1>{studycase.no}</h1>
            </div>
          ))}

        </section>
      </MotionSection>




      <section id="pagination" className="section-p1">
        <ul>
          <li><Link to="" >1</Link></li>
          <li><Link to="">2</Link></li>
          <li>
            <Link to="">
              <i className="fa fa-arrow-right" />
            </Link>
          </li>
        </ul>
      </section>





      <Footer />

    </div>


  );
}

export default Blog
