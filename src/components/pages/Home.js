import React from 'react';

import Eclipse from '../../assets/images/eclipse.jpg'
import '../styles/Home.css' 

export default function Home() {
  return (
    <div className='main container'>
      <h1 className='title'>Home Page</h1>
      <article id="first">
      <figure className="kaiden">
        <img className="eclipse" src={Eclipse} alt="desert at dusk"/>
        <figcaption className="passage"> "To improve is to change; to be perfect is to change often." -Winston Churchill
        </figcaption>
      </figure>
    </article>
      <p>
       Experienced professional with a a certicate in Full Stack Web Development.  Able to work in both front and back end to develop interactive web applications using JavaScript, SQL, React.js, MongoDB, etc.  I have spent over a decade in various management positions and have experience in team building as well as training.
      </p>
      <footer className='footer'>
    © 2022 Andrew Read
  </footer>
    </div>
  );
}
