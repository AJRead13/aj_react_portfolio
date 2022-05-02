import React from 'react';
import MyPic from '../../assets/images/me22.jpg'
import '../styles/About.css'

export default function About() {
  return (
    <div className='main container'>
      <h1 className='title'>About Me</h1>
      <article id="first">
      <figure className="kaiden">
        <img className="potrait" src={MyPic} alt="my son and I"/>
        <figcaption className="passage"> "To improve is to change; to be perfect is to change often." -Winston Churchill
        </figcaption>
      </figure>
    </article>
      <p>
        Full Stack Web Dev, former U.S. Army veteran, gamer, and family man. If you would like to see my 
        work experience and background, please take a look through my sites and resume.
      </p>
      <ul className='pages'>
        <li className='link'> <a href="https://github.com/AJRead13">Github</a></li>
        <li className='link'> <a href='https://docs.google.com/document/d/1XifQh1n1ZVAA9dRmn5-8M-dwS4QwfPg_/edit?usp=sharing&ouid=109577356031493900286&rtpof=true&sd=true'>Resume</a></li>
        <li className='link'> <a href="https://www.linkedin.com/in/andrew-read-85887494/">LinkedIn</a> </li>
      </ul>

      <footer className='footer'>
    © 2022 Andrew Read
  </footer>

    </div>
  );
}
