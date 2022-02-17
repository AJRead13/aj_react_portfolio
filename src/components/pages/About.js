import React from 'react';
import MyPic from '../../assets/images/me22.jpg'
import '../styles/About.css'

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <article id="first">
      <figure className="kaiden">
        <img className="potrait" src={MyPic} alt="Graphic with Coming Soon text"/>
        <figcaption className="passage"> "To improve is to change; to be perfect is to change often." -Winston Churchill
        </figcaption>
      </figure>
    </article>
      <p>
        Full Stack Web Dev, former U.S. Army veteran, gamer, and family man.  
      </p>

    </div>
  );
}
