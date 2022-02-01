import React from 'react';
import '../Styles/NavInfo.css';
import weather from '../images/weather.png';
import clock from '../images/clock.png';
import facebook from '../images/facebook.png';
import youtube from '../images/youtube.png';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';
import Socials from './Socials';

function Info(props) {
    return (
            <div className={props.classname}>
                <img src={props.src} alt={props.alt} className='me-1 me-xl-2' />
                <span className='align-middle text-secondary'>{props.info}</span>
            </div>
    );
  }


const NavInfo = () => {
  return (
      <>
      
        <section className='mx-0 px-xl-5 navinfo d-none d-sm-block'>
            <div className='container-fluid seemo px-4'>
                <div className='row navinfo justify-content-between align-items-center'>
                    <div className='col-4 col-xl-5 col-xxl-4 text-start px-0 d-flex'>
                        <Info src={weather} alt="weather" info=' 38°C ' />
                        <Info classname='d-none d-lg-block ms-auto' src={clock} alt='date' info='January 24, 2022' />
                    </div>
                    <div className='col ms-md-auto text-end px-0'>
                        <span className='align-middle text-secondary'>Follow us:</span>
                        <Socials link="#" class="d-inline-block ms-1 ms-sm-2 ms-md-3" src={facebook} alt='facebook' />
                        <Socials link="#" class="d-inline-block ms-1 ms-sm-2 ms-md-3" src={youtube} alt='youtube' />
                        <Socials link="#" class="d-inline-block ms-1 ms-sm-2 ms-md-3" src={twitter} alt='twitter' />
                        <Socials link="#" class="d-inline-block ms-1 ms-sm-2 ms-md-3" src={linkedin} alt='linkedin' />
                    </div>
                </div>
            </div>
        </section>
      
      </>
  );
};

export default NavInfo;
