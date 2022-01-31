import React from 'react';
import Media from './Media';
import Socials from './Socials';
import feature1 from '../images/feature1.png';
import feature2 from '../images/feature2.png';
import feature3 from '../images/feature3.png';
import feature4 from '../images/feature4.png';
import facebookY from '../images/facebook-y.png';
import youtubeY from '../images/youtube-y.png';
import twitterY from '../images/twitter-y.png';
import linkedinY from '../images/linkedin-y.png';
import ssl from '../images/ssl.png';


const Footer = () => {
  return (
      <section style={{backgroundColor: "#f5f5f5"}} className='py-3' >
          <div className="container">
              <div className="row justify-content-center align-items-center">
                  <div className="col-12 border-bottom py-4">
                      <div className="row justify-content-between align-items-center">
                          <div className="col-6 col-md-3">
                              <Media image={feature1} text="Fast and free delivery" text2="Free delivery for all orders over BDT 3000" />
                          </div>
                          <div className="col-6 col-md-3">
                              <Media image={feature2} text="Money back guarantee" text2="We return money within 30 days" />
                          </div>
                          <div className="col-6 col-md-3">
                              <Media image={feature3} text="24/7 customer support" text2="Friday 24/7 customer support" />
                          </div>
                          <div className="col-6 col-md-3">
                              <Media image={feature4} text="Secure online payment" text2="We possess SSL / Secure сertificate " />
                          </div>
                      </div>
                  </div>
                  <div className="col-12 py-5">
					<div className="row align-items-center justify-content-between">
						<div className="col d-flex ps-0">
							<div className="pe-4 border-end border-dark">
								<a href="#" className='text-decoration-none text-secondary fs-6'>Home</a>
							</div>
							<div className="px-4 border-end border-dark">
								<a href="#" className='text-decoration-none text-secondary fs-6'>About</a>
							</div>
							<div className="px-4 border-end border-dark">
								<a href="#" className='text-decoration-none text-secondary fs-6'>Products</a>
							</div>
							<div className="px-4 border-end border-dark">
								<a href="#" className='text-decoration-none text-secondary fs-6'>Blogs</a>
							</div>
							<div className="px-4 border-end border-dark">
								<a href="#" className='text-decoration-none text-secondary fs-6'>Support</a>
							</div>
							<div className="px-4">
								<a href="#" className='text-decoration-none text-secondary fs-6'>Contact</a>
							</div>
						</div>
						<div className="col text-end pe-0">
							<Socials link="#" class="d-inline-block rounded-3 mx-2 py-1 px-2 bg-white" src={facebookY} alt='facebook' />
							<Socials link="#" class="d-inline-block rounded-3 mx-2 py-1 px-2 bg-white" src={youtubeY} alt='youtube' />
							<Socials link="#" class="d-inline-block rounded-3 mx-2 py-1 px-2 bg-white" src={twitterY} alt='twitter' />
							<Socials link="#" class="d-inline-block rounded-3 mx-2 py-1 px-2 bg-white" src={linkedinY} alt='linkedin' />
						</div>
					</div>
                  </div>
                  <div className="col-12 text-start ps-0">
					<div className="row align-items-center justify-content-between">
						<div className="col ps-0">
							<p style={{fontSize: ".75rem"}} className='mb-0'>&copy; All rights reserved. Made by <a href="https://www.btracsolutions.com/" className='text-decoration-none' target="_blank">B-Trac Solutions Limited</a> </p>
						</div>
						<div className="col pe-0">
							<a href="#">
								<img src={ssl} alt="ssl" />
							</a>
						</div>
					</div>
				  </div>
              </div>
          </div>
      </section>
  );
};

export default Footer;
