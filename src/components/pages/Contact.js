import React from 'react';
import '../styles/Contact.css'

export default function Contact() {
  return (
    <div className='main container'>
      <h1 className='title'>Contact Page</h1>
      <form  className='contactInfo'>
  <label className='labelTitle'>
    Name :
    <input type="text" name="name" />
  </label>
  <label className='labelTitle'>
    Email :  
    <input type="text" name="name" />
  </label>
  <input className='button' type="submit" value="Submit" />

</form>
<footer className='footer'>
    © 2022 Andrew Read
  </footer>
    </div>
  );
}
