import React from 'react';
import Media from './Media';
import seemoLogo from '../images/seemo-logo.png';
import appStore from '../images/appStore.png';
import playStore from '../images/playStore.png';
import Buttons from './Buttons';

const Download = () => {
  return (
      <section className=' p-0 border-top'>
          <div className="container py-5">
              <div className="row align-items-center justify-content-between">
                    <div className="col text-start d-none d-md-block">
                        <img src={seemoLogo} alt='brand logo' width='120px' />
                        <p className='my-3'>Seemo Intelligent Living is an initiative of B-Trac Solutions Ltd. which is a sister concern of Bangla Trac Ltd. Launched in 2017, it is the first in Bangladesh in home security and automation industry. </p>
                    </div>
                    <div className="col text-center text-md-end">
                        <div className="d-block d-md-none mb-3">    
                            <img src={seemoLogo} alt='brand logo' width='120px' />
                            <p className='my-3'>Seemo Intelligent Living is an initiative of B-Trac Solutions Ltd. which is a sister concern of Bangla Trac Ltd. Launched in 2017, it is the first in Bangladesh in home security and automation industry. </p>
                        </div>
                        <h6>Download our app</h6>
                        <Buttons link="#" image={appStore} text="Available on the" text2="App Store" />
                        <Buttons link="#" image={playStore} text="Get it on" text2="Google Play" />
                    </div>
              </div>
          </div>
      </section>
  );
};

export default Download;
