import React from 'react'
import { Link } from 'react-scroll'

const Navigation = () => {
  return (
    <nav>
      LOGO
      <ul>
        <li><Link to="home" smooth duration={500}>Home</Link></li>
        <li><Link to="about" smooth duration={500}>About</Link></li>
        <li><Link to="news" smooth duration={500}>News</Link></li>
        <li><Link to="student-life" smooth duration={500}>Student Life</Link></li>
        <li><Link to="news" smooth duration={500}>News</Link></li>
        <li><Link to="gallery" smooth duration={500}>Gallery</Link></li>
        <li><Link to="contact" smooth duration={500}>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation