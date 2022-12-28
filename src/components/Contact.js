import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import '../styles/contact.css';
import Modal from 'react-modal';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      email: '',
      mobileNumber: '',
      topic: '',
      message: '',
      renderModal: false,
      errorMessage: '',
    };
  }

  componentDidMount() {
    this.setState({
      renderModal: false,
    });
  }

  fullNameController = (event) => {
    // input field controller
    this.setState({ fullName: event.target.value });
  };

  emailController = (event) => {
    // input field controller
    this.setState({ email: event.target.value });
  };

  mobileNumberController = (event) => {
    // input field controller
    this.setState({ mobileNumber: event.target.value });
  };

  topicController = (event) => {
    // input field controller
    this.setState({ topic: event.target.value });
  };

  messageController = (event) => {
    // input field controller
    this.setState({ message: event.target.value });
  };

  handleSubmit = (event) => {
    // Submit handling
    if (this.verify()) {
      this.setState({
        renderModal: true,
      });
      axios
        .post('http://192.168.123.118:8080/portfolio/sendMail', this.state)
        .then((res) => {
          console.log(res);
        });
    }
  };

  verify = () => {
    if (
      this.state.fullName.split().length != 0 &&
      this.state.email.split().length != 0 &&
      this.state.email.includes('@') &&
      this.state.mobileNumber.split().length != 0 &&
      this.state.topic.length > 0 &&
      this.state.message.length > 5
    ) {
      this.setState({
        errorMessage: '',
      });
      return true;
    } else {
      this.setState({
        errorMessage: 'Please, fill in all the fields above',
      });
      return false;
    }
  };

  changeState = () => {
    this.setState({
      fullName: '',
      email: '',
      mobileNumber: '',
      topic: '',
      message: '',
      renderModal: false,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Modal isOpen={this.state.renderModal}>
          <div class='container h-100'>
            <div class='row align-items-center h-100'>
              <div class='col-8 mx-auto'>
                <div class='card h-100 border-success justify-content-center p-5'>
                  <div className='text-center justify-content-center align-self-center'>
                    <h2>Your Message has been sent successfully.</h2>
                    <h2>I will reach you back as soon as possible</h2>
                    <button
                      className='btn btn-success mt-3'
                      onClick={this.changeState}
                    >
                      OK
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
        <section className='contact py-5 bg-dark' id='contact'>
          <div id='Contact' className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <h1>
                  <span style={{ color: '#fff' }}>Get in </span>
                  <span style={{ color: '#03aad7' }}>touch</span>
                </h1>
                <hr />
              </div>
              <div className='col-md-6'>
                <div className='address'>
                  <h5>Address:</h5>
                  <ul className='list-unstyled'>
                    <li> Poland, Slaskie</li>
                    <li> PO Box 40-061</li>
                  </ul>
                </div>
                <div className='email'>
                  <h5>Email:</h5>
                  <ul className='list-unstyled'>
                    <li> muhshuh200@gmail.com</li>
                  </ul>
                </div>
                <div className='phone'>
                  <h5>Phone:</h5>
                  <ul className='list-unstyled'>
                    <li> +48 739 401 592</li>
                  </ul>
                </div>
                <hr />
                <div className='social'>
                  <ul className='list-inline list-unstyled'>
                    <li className='list-inline-item'>
                      <a
                        href='https://www.facebook.com/muhammadali.shuhratov.50'
                        target='_blank'
                      >
                        <i className='fa fa-facebook-square fa-2x'></i>
                      </a>
                    </li>
                    <li className='list-inline-item'>
                      <a href='https://t.me/mu1172' target='_blank'>
                        <i class='fab fa-telegram fa-2x'></i>
                      </a>
                    </li>
                    <li className='list-inline-item'>
                      <a href='https://wa.me/998932571172' target='_blank'>
                        <i class='fab fa-whatsapp fa-2x'></i>
                      </a>
                    </li>
                    <li className='list-inline-item'>
                      <a
                        href='https://www.linkedin.com/in/mukhammadali-shukhratov/'
                        target='_blank'
                      >
                        <i className='fab fa-linkedin-in fa-2x'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='card'>
                  <div className='card-body'>
                    <form>
                      <div className='form-row'>
                        <div className='form-group col-md-6'>
                          {/* Needs Control */}
                          <input
                            id='Full Name'
                            name='Full Name'
                            placeholder='Full Name'
                            className='form-control'
                            type='text'
                            value={this.state.fullName}
                            onChange={this.fullNameController}
                          />
                        </div>
                        <div className='form-group col-md-6'>
                          {/* Needs Control */}
                          <input
                            type='email'
                            className='form-control'
                            id='inputEmail4'
                            placeholder='Email'
                            value={this.state.email}
                            onChange={this.emailController}
                          />
                        </div>
                      </div>
                      <div className='form-row'>
                        <div className='form-group col-md-6'>
                          {/* Needs Control */}
                          <input
                            id='Mobile No.'
                            name='Mobile No.'
                            placeholder='Mobile No.'
                            className='form-control'
                            required='required'
                            type='text'
                            value={this.state.mobileNumber}
                            onChange={this.mobileNumberController}
                          />
                        </div>
                        <div className='form-group col-md-6'>
                          {/* Needs Control */}
                          <select
                            id='inputState'
                            className='form-control'
                            value={this.state.topic}
                            onChange={this.topicController}
                          >
                            <option selected>Choose ...</option>
                            <option> Job Offer</option>
                            <option> Complaint</option>
                            <option> Feedback</option>
                          </select>
                        </div>
                        <div className='form-group col-md-12'>
                          {/* Needs Control */}
                          <textarea
                            id='comment'
                            name='comment'
                            cols='40'
                            rows='5'
                            placeholder='Your Message'
                            className='form-control'
                            value={this.state.message}
                            onChange={this.messageController}
                          ></textarea>
                        </div>
                      </div>

                      <div className='form-row'>
                        <button
                          type='button'
                          value='Submit'
                          className='btn btn-danger'
                          onClick={this.handleSubmit}
                        >
                          Submit
                        </button>{' '}
                        <span class='ml-4' style={{ color: 'red' }}>
                          {this.state.errorMessage}
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Contact;
