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
        <div className='col text-start px-0'>
            <div className={props.classname}>
                <img src={props.src} alt={props.alt} className='me-1 me-md-2 me-lg-3' />
                <span className='align-middle text-secondary'>{props.info}</span>
            </div>
        </div>
    );
  }


const NavInfo = () => {
  return (
      <>
      
        <section className='mx-0 px-xl-5 navinfo d-none d-sm-block'>
            <div className='container-fluid seemo px-4'>
                <div className='row navinfo justify-content-lg-betwen align-items-center'>
                    <div className='col'>
                        <div className="row align-items-center">
                            <Info src={weather} alt="weather" info=' 38°C ' />
                            <Info classname='d-none d-lg-block' src={clock} alt='date' info='January 24, 2022' />
                        </div>
                    </div>
                    <div className='col ms-md-auto text-end px-0'>
                        <span className='align-middle text-secondary'>Follow us:</span>
                        <Socials src={facebook} alt='facebook' />
                        <Socials src={youtube} alt='youtube' />
                        <Socials src={twitter} alt='twitter' />
                        <Socials src={linkedin} alt='linkedin' />
                    </div>
                </div>
            </div>
        </section>
      
      </>
  );
};

export default NavInfo;
