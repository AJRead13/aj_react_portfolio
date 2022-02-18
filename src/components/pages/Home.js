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
       Welcome to the React Porfolio of Andrew Read.  Please use the navigation to learn more about 
       me and my work.
      </p>
      <footer className='footer'>
    © 2022 Andrew Read
  </footer>
    </div>
  );
}
