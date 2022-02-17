import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>


      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            <i class="fa-regular fa-file"></i>
              FileShare
            </Link>
          </div>
          <div class='website-rights'>CityU FYP © 2021-2022</div>
          
          <div class='social-icons'>

            <div class='social-icon-link facebook'>
            <a target="_blank" href="https://github.com/briancodex/react-website-v1" className="source-code">Source Code</a>
              <i class="fa-brands fa-github" />
            </div>

          </div>
          
        </div>
      </section>
    </div>
  );
}

export default Footer;
