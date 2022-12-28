import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {} from "@fortawesome/free-solid-svg-icons"
import '../styles/about.css';

class About extends Component {
  render() {
    return (
      <div className='about' id='about'>
        <div id='wrapper'>
          <div className='container' id='container'>
            <div className='aboutMe'>
              <h2>Java Developer with Javascript skills</h2>
            </div>
            <div className='row'>
              <div class='col-lg-12 col-md-offset-1 col-sm-12'>
                <div class='about-right'>
                  <h5>
                    I am <span>Mukhammadali Shukhratov</span>. I am a simple ,
                    creative, enthusiastic and trustworthy person. I always like
                    to create something to help those who are not able to help
                    themselves. You will find me playing football or ping pong
                    when I am not coding.
                  </h5>
                  <br />
                  <h5>
                    I have vast experience in HTML5, CSS3, Javascript, React js
                    and on.{' '}
                  </h5>
                  <br />
                  <h5>
                    You can refer to my github{' '}
                    <a href='https://github.com/m1172'> page</a> to see all the
                    projects I have been working on.
                    <i className='fab fa-java fa-w-12 fa-2x ml-5'></i>{' '}
                    <i className='fab fa-js-square fa-w-12 fa-2x ml-4'></i>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
