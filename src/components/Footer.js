import React from 'react';
import { useState } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const handleSubmit = (event) => {
    //alert("submit");
    event.preventDefault();

    // Simple form validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setShowErrorAlert(true);
      return;
    }
    
    // Send the form data to the backend API
    fetch('/quotes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        setShowSuccessAlert(true);
        // Handle successful form submission here (e.g., show a success message)
        // console.log('Form submitted successfully');
        // alert('Form submitted successfully! We will contact you soon!');

      } else {
        // alert('Failed to submit form. Please try again later.');
        setShowErrorAlert(true);
        // Handle form submission failure here (e.g., show an error message)
        // console.error('Failed to submit form');
      }
    })
    .catch(error => {
      console.error('Error while submitting form:', error);
      setShowErrorAlert(true);
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className='footer-container'>

      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
            Contact Us -- Global Supply 
        </p>
        <p className='footer-subscription-text'>
        If you are interested in our products and want to know 
        more details, please leave a message here, 
        we will reply you as soon as we can.
        </p>
        <div className='input-areas'>
          <form onSubmit={handleSubmit}>
            <input
              className='footer-input'
              name='name'
              type='text'
              placeholder='Name'
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className='footer-input'
              name='phone'
              type='tel'
              placeholder='Phone'
              value={formData.phone}
              onChange={handleChange}
            /> <br />
            <input
              className='footer-input-mes'
              name='message'
              type='text'
              placeholder='Message'
              value={formData.message}
              onChange={handleChange}
            /> <br />
           {/* <Button buttonStyle='btn--outline'>Submit</Button> */}
            <input type='submit' value="Submit"/>
          </form>
        </div>

      {/* Success Alert */}
      {showSuccessAlert && (
        <div className='alert success-alert'>
          Submitted successfully! We will contact you soon!
          <button className='close-button' onClick={() => setShowSuccessAlert(false)}>Close</button>
        </div>
      )}

      {/* Error Alert */}
      {showErrorAlert && (
        <div className='alert error-alert'>
          Sorry! Failed to submit form. Please make sure all fields are filled.
          <button className='close-button' onClick={() => setShowErrorAlert(false)}>Close</button>
        </div>
      )}

      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/get-a-quote'>How it works</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Address</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
        <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Global Supply
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>Global Supply © 2022-2023 Wanpin Cai</small>
          {/* <Button buttonStyle='btn--outline'>Backend Login</Button> */}
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
