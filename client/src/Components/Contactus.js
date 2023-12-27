import React from 'react'

const ContactUs = (props) => {
  return (
    <div>
      <h3>Meet US</h3>
      <h3>{props.user}</h3>
      <h3>{props.phonenumber}</h3>
      <h3>{props.email}</h3>
    </div>

  )
}

export default ContactUs;