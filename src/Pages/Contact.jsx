import { motion } from 'framer-motion';
import '../index.css';
import Footer from '../Data/Footer';
import Header from '../Data/Header';

function Contact() {
  const peoples = [
    {
      no: 1,
      image: "/assets/img/don.jpeg",
      name: 'William Jack',
      post: 'Senior Marketing Manager',
      contact: 'Phone: +000 123 000 77 88',
      email: 'Email: contact@example.com',
    },
    {
      no: 2,
      image: "/assets/img/BEN robert.jpg",
      name: 'Ben Robert',
      post: 'Senior Marketing Manager',
      contact: 'Phone: +000 123 000 77 88',
      email: 'Email: contact@example.com',
    },
    {
      no: 3,
      image: "/assets/img/Tom.jpg",
      name: 'Tom Holland',
      post: 'Senior Marketing Manager',
      contact: 'Phone: +000 123 000 77 88',
      email: 'Email: contact@example.com',
    },
  ];

  return (
    <div>
      <Header />

      <motion.div
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 200, delay: 0.2, damping: 10 }}
        className="pro w-[250px] cursor-pointer"
      >
        <section id="page-header" className="about-header">
          <div className="talk">
            <div id="cc">
              <img src="/assets/img/_R5A5846.webp" alt="Contact banner" />
            </div>
            <h2>Get Touch</h2>
            <p>Want to get in touch? We'd love to hear from you. Here's how you can reach us</p>
          </div>
          <div className="photo">
            <div className="video1">
              <video autoPlay muted loop src="/assets/img/back.mp4" />
            </div>
          </div>
        </section>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 200, delay: 0.2, damping: 10 }}
        className="pro w-[250px] cursor-pointer"
      >
        <section id="contact-details" className="section-p1">
          <div className="details">
            <span>GET IN TOUCH</span>
            <h2>Visit one of our agency location or contact us today</h2>
            <h3>Head Office</h3>
            <ul>
              <li><i className="fa fa-map-marker" aria-hidden="true"></i> 56 Glassford Street Glasgow G1 1UL New York</li>
              <li><i className="fa fa-envelope-square" aria-hidden="true"></i> shop@fashvibeo.com</li>
              <li><i className="fa fa-envelope-square" aria-hidden="true"></i> shop@fashvibeo.com</li>
              <li><i className="fa fa-clock-o" aria-hidden="true"></i> Monday to Saturday :10.00am to 18.00pm</li>
            </ul>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841337506007!2d-73.9881175246138!3d40.75797467138668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sin!4v1742888190370!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            />
          </div>
        </section>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 200, delay: 0.2, damping: 10 }}
        className="pro w-[250px] cursor-pointer"
      >
        <section id="form-details">
          <form action="">
            <span>LEAVE MESSAGE</span>
            <h2>We love to hear from you</h2>
            <input type="text" name="name" placeholder="Your Name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="text" name="subject" placeholder="Subject" />
            <textarea name="message" cols={30} rows={10} placeholder="Your Message"></textarea>
            <button className="normal" type="submit">
              Submit
            </button>
          </form>
          <div className="people">
            {peoples.map((people) => (
              <div key={people.no}>
                <img src={people.image} alt={people.name} />
                <p>
                  <span>{people.name}</span> {people.post}
                  <br />
                  {people.contact}
                  <br />
                  {people.email}
                </p>
              </div>
            ))}
          </div>
        </section>
      </motion.div>

      <Footer />
    </div>
  );
}

export default Contact;
