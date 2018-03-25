import React, { Component } from 'react';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
/*import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import faGithub from '@fortawesome/fontawesome-free-regular/faGithub';
import faLinkedin from '@fortawesome/fontawesome-free-regular/faLinkedin';*/
import { faEnvelope, } from '@fortawesome/fontawesome-free-solid'
import {faLinkedin, faGithub} from '@fortawesome/fontawesome-free-brands'
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          
            <h1>¡Hola, soy Diego!</h1>
            <h3>¡Mucho gusto!</h3>
          
        </header>
        <section id="presentacion">
        <img src="https://static1.squarespace.com/static/5947fdbb414fb5ccb2098143/t/595bcbe9ff7c50120bdd276a/1499188557472/diego-herrera-big.jpg"/>
          <div id="container">
            <h2>Presentacion</h2>
            <p>
              Como ya les comenté me llamo Diego, tengo 34 años y tengo mas de 10 años trabajando en entornos de IT en diferentes empresas.
              Hace un tiempo me empezó a interesar el desarrollo web. Para profundizar mis conocimientos y tener un pantallazo general completé el curso de un año
              de Desarrollo Fulstack en Coderhouse donde aprendi lo básico de Rect, Node Js, Express y Mongodb. Se que tengo mucho que aprender todavía pero estoy muy motivado y con energía para seguir aprendiendo.
            </p>
          </div>
        </section>
        <section id="megusta">
            <h2>Me interesan estas tecnologias</h2>
            <div id="container">
            <img className="logos" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png"/>
            <img className="logos" src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png"/>
            <img className="logos" src="https://cdn.worldvectorlogo.com/logos/mongodb.svg"/>
            <img className="logos" src="https://github.com/webpack/media/blob/master/logo/icon.png?raw=true"/>
          </div>
        </section>
        <section id="contacto">
          <div id="container">
            <h2>Contáctame :)</h2>
            <a href="#"><FontAwesomeIcon className="icon-contact" icon={faEnvelope} size="6x" color="white"/></a>
            <a href=""><FontAwesomeIcon className="icon-contact" icon={faLinkedin} size="6x" color="white"/></a>
            <a href=""><FontAwesomeIcon className="icon-contact" icon={faGithub} size="6x" color="white"/></a>
          </div>
        </section>
        <footer>
          <p>Diego Eduardo Herrera - Buenos Aires 2018</p>
        </footer>
      </div>
    );
  }
}

export default App;
