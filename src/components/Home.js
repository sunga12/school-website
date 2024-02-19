import React from 'react';
import { motion } from "framer-motion"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import testimonials from '../testimonials';
import Testimonial from './Testimonial';
import wellfound from './assets/images/angel list.png';
import github from './assets/images/github.png';
import linkedin from './assets/images/Linkedin icon.png';
import medium from './assets/images/medium.png';

const iconVariants = {
  hover: {
    y: -5,
    transition: {
      repeat: 10,
      repeatType: 'mirror',
      duration: 0.2,
    },
  },
};

const Home = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id="home">
      <div className="home-top">
        <p className="logo">School Logo</p>
        <div>
          <h1 className="school-name">Custom Private School</h1>
          <h4 className="motto">Instilling Greatness through hard Work</h4>
        </div>
     </div>

    <h2 className="title">Headteacher's Welcome</h2>
    <p className="home-welcome">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Harum dolores nulla inventore architecto, deleniti
      tenetur asperiores blanditiis, repudiandae temporibus,
      quae facilis recusandae consectetur! 
      <br />
      <button>
        Read More
      </button>
    </p>
    <ul className="home-links">
      <li className="home-link">Contact Us</li>
      <li className="home-link">Gallery</li>
      <li className="home-link">Student Life</li>
    </ul>

    <h2 className="title">Testimonials</h2>
    <div className="test-slider">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <Testimonial
            message={testimonial.message}
            voice={testimonial.voice}
          />
        ))}
      </Slider>
    </div>

    <h2 className="title">Dates for your Diary</h2>
    <div className="key-dates">
      <div className="key-date">
        <p>Term Start</p>
        <p className="d8">12<br /><small>Feb</small></p>
      </div>
      <div className="key-date">
        <p>Term End</p>
        <p className="d8">6<br /><small>May</small></p>
      </div>
    </div>
      
    <div className="home-bottom">
        <p className="logo">School Logo</p>
        <div>
          <h3>Custom Private School</h3>
          <p>Example Road, Town Centre, Ndola, Copperbelt<br />
          Contact Number: +260212-612-832<br />
          Email: customprivateschool@gmail.com</p>
        </div>
    </div>

    <h5 className="title">Stay Up to date with us on Social Media</h5>

    <ul className="icons">
      <motion.li
        variants={iconVariants}
        initial="initial"
        whileHover="hover"
      >
        <a href="https://www.github.com/sunga12"><img src={github} className="contact-icon" alt="github" /></a>
      </motion.li>
      <motion.li
        variants={iconVariants}
        initial="initial"
        whileHover="hover"
      >
        <a href="https://www.linkedin.com/in/sungabanja-thawethe-b3419b142"><img src={linkedin} className="contact-icon" alt="linkedIn" /></a>
      </motion.li>
      <motion.li
        variants={iconVariants}
        initial="initial"
        whileHover="hover"
      >
        <a href="https://wellfound.com/u/sungabanja-thawethe"><img src={wellfound} className="contact-icon" alt="wellfound" /></a>
      </motion.li>
      <motion.li
        variants={iconVariants}
        initial="initial"
        whileHover="hover"
      >
        <a href="https://medium.com/@sungabt"><img src={medium} className="contact-icon" alt="medium" /></a>
      </motion.li>
    </ul>

    </div>
  )
}

export default Home

