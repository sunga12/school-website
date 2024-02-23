import React from 'react'

const Testimonial = ({
  voice, message
}) => {
  return (
    <div className="testimonial">
      <p className="t-message">{message}</p>
      <p className="t-voice">{voice}</p>
    </div>
  )
}

export default Testimonial;
