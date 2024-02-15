import React from 'react'

const Home = () => {
  return (
    <div id="home">
      <div className="home-top">
        <p className="logo">School Logo</p>
        <div>
          <h1>Custom Private School</h1>
          <h4>Instilling Greatness through hard Work</h4>
        </div>
     </div>

      <h2>Headteacher's Welcome</h2>
      <p className="home-welcome">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Harum dolores nulla inventore architecto, deleniti
        tenetur asperiores blanditiis, repudiandae temporibus,
        quae facilis recusandae consectetur! Deserunt, officia
        explicabo delectus quibusdam excepturi pariatur mollitia
        totam modi voluptas impedit fugit, numquam est?
      </p>
      <ul className="home-links">
        <li className="home-link">Contact Us</li>
        <li className="home-link">Gallery</li>
        <li className="home-link">Student Life</li>
      </ul>

      <h2>Dates for your Diary</h2>

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
      
      <h2>Testimonials</h2>

      <h5>Social Media Links</h5>
      </div>
  )
}

export default Home

