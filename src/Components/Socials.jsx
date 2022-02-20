import React from 'react';
import '../Styles/Socials.css';

function Socials(props) {
    return (
        <a href={props.link}>
          <div className={props.class}>
            <img src={props.src} alt={props.alt} className="socials" />
          </div>
        </a>
    );
  }

export default Socials;
