import React from 'react';
import './App.css';
import Django from './LogosPNG/Django-logo2.png';
import MongoDB from './LogosPNG/MongoDB3.png';
import CSS from './LogosPNG/css3.png';
import HTML from './LogosPNG/html5.png';
import JS from './LogosPNG/javascript.png';
import NodeJS from './LogosPNG/nodejs.png';
import Postgres from './LogosPNG/postgres.png';
import ReactImg from './LogosPNG/react.png';
import Sequelize from './LogosPNG/sequelize.png';
import TS from './LogosPNG/ts.png';
import Miguel from './LogosPNG/Miguel_self.jpg'


function App() {
  return (
    <div className="App">
      <img src={Miguel} alt="Miguel Floresca-Cravens" className="self"/>
      <nav>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Skills</li>
        </ul>
      </nav>
      <h2>Hello, my name is Miguel!</h2>
      <h3>I am a full stack developer transitioning from the 
        finance world. I have learned many valuable skills that
         I look forward to transitioning in to software development!
      </h3>
      <h2>Skills</h2>
      <div className="iconsList">
        <img className="icons" src={ReactImg} alt="React"/>
        <img className="icons" src={MongoDB} alt="MongoDB"/>
        <img className="icons" src={JS} alt="JS"/>
        <img className="icons" src={TS} alt="TypeScript"/>
        <img className="icons" src={CSS} alt="CSS"/>
        <img className="icons" src={HTML} alt="HTML"/>
        <img className="icons" src={Sequelize} alt="Sequelize"/>
        <img className="icons" src={NodeJS} alt="NodeJS"/>
        <img className="icons" src={Postgres} alt="Postgres"/>
        <img className="icons" src={Django} alt="Django"/>
      </div>

    </div>
  );
}

export default App;
