import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import './App.css';
import Particles from 'react-particles-js';
import Project from './components/Project';
import Contact from './components/Contact';
import About from './components/About';
function App() {
  return (
    <React.Fragment>
      <Particles
        className='particles-canvas'
        params={{
          particles: {
            number: { value: 70, density: { enable: true, value_area: 900 } },
            shape: { type: 'circle', stroke: { width: 6, color: '#fff' } },
          },
        }}
      />
      <Header />
      <div id='Project' style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '60px' }}>
          My <span style={{ color: '#03aad7' }}>Projects</span>
        </h1>
      </div>
      <div className='row'>
        <Project
          projectName='Members'
          projectDescription='Web application to manage team members with Mysql database support (Backend - Spring framework, Frontend - React Js)'
          imageSource='/project-images/Members/Members.png'
          gitSource='https://github.com/koznem24/Members'
        />

        <Project
          projectName='GNU Calculator'
          projectDescription='Basic Web-Calculator with GNU like interface written using ReactJS Library'
          imageSource='/project-images/GNUCalculator/GNUCalculator.png'
          gitSource='https://github.com/koznem24/Basic-GNU-Calculator-React-App'
        />

        <Project
          projectName='Online Store'
          projectDescription='Online Mobile Store web Application that can be used to organize local online market for used phones '
          imageSource='/project-images/OnlineStore/OnlineStore.png'
          gitSource='https://github.com/koznem24/Mobile-Store'
        />

        <Project
          projectName='Pet Clinic'
          projectDescription='Spring Pet Clinic example using Spring-Boot, Thymeleaf, AOP, MVC, Embedded Tomcat, Hibernate, and more. (Still Under Development)'
          imageSource='/project-images/PetClinic/PetClinic.png'
          gitSource='https://github.com/koznem24/sfg-pet-clinic'
        />
      </div>
      <About />
      <Contact />
    </React.Fragment>
  );
}

export default App;
