import React from 'react';
import StarTrek from '../../assets/images/startrekQuiz.png';
import HypeMovie from '../../assets/images/hypemovie.png';
import PassGen from '../../assets/images/passwordGen.png';
import noteTaker from '../../assets/images/noteTaker.jpg';
import Jate from '../../assets/images/textScreenshot.jpg';
import '../styles/Project.css'

export default function Blog() {
  return (
    <div className="main container">
      <h1 className="title">Project Page</h1>
      <section className="project-windows">
      <article className="bodies bigOne">
        <figure className="card">
          <h2 className="card-head">Movie Hype Generator</h2>
          <div className="card-contents"><a href="https://ajread13.github.io/Movie-Hype-Generator/"><img className="hypeMovie"
                src={HypeMovie} alt="Hype Movie Generator"/></a>
            <p>Movie Hype Generator was a collaborative project meant to help users look further into the comic books characters that now appear on the big screen.</p>
            <a className="movieRep repoLink" href="https://github.com/AJRead13/Movie-Hype-Generator">Repository</a>
          </div>
        </figure>
      </article>
      <article className="bodies">
        <figure className="card">
          <h2 className="card-head">Password Generator</h2>
          <div className="card-contents"><a href="https://ajread13.github.io/JShw-passgen/"><img class="space" src={PassGen}
              alt="Password Generator Thumbnail"/></a>
            <p>A single page app to generate a random password</p>
            <a className="passGenRepo repoLink" href="https://github.com/AJRead13/JShw-passgen">Repository</a>
          </div>
        </figure>
      </article>
      <article className="bodies">
        <figure className="card">
          <h2 className="card-head">Star Trek Quiz</h2>
          <div className="card-contents"><a href="https://ajread13.github.io/Quiz_Game_Star_Trek/"><img className="space" src={StarTrek} alt="Star Trek Quiz ending"/></a>
            <p> A short quiz to test your Star Trek Knowledge</p>
            <a className="trekRepo repoLink" href="https://github.com/AJRead13/Quiz_Game_Star_Trek">Repository</a>
          </div>
        </figure>
      </article>
      <article className="bodies">
        <figure className="card">
          <h2 className="card-head">Note-Taker</h2>
          <div className="card-contents"><a href="https://shrouded-brushlands-69591.herokuapp.com/"><img className="space" src={noteTaker} alt="note app"/></a>
            <p>A simple app using a database to store notes</p>
            <a className="noteRepo repoLink" href="https://github.com/AJRead13/Basic_Notes_Taker">Repository</a>
          </div>
        </figure>
      </article>
      <article className="bodies">
        <figure className="card">
          <h2 className="card-head">Text.Editor.Xtreme.(J.A.T.E)</h2>
          <div className="card-contents"><img className="jate" src={Jate}
              alt="close up of starship hull"/>
            <p>A simple text editor that one can install.</p>
            <a className="jateRepo repoLink" href="https://github.com/AJRead13/Text_Editor_Xtreme">Repository</a>
          </div>
        </figure>
      </article>
      
    </section>
    <footer className='footer'>
    © 2022 Andrew Read
  </footer>
    </div>
  );
}
