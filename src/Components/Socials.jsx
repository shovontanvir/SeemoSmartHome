import React from 'react';

function Socials(props) {
    return (
        <a href={props.link}>
          <div className={props.class}>
            <img src={props.src} alt={props.alt} />
          </div>
        </a>
    );
  }

export default Socials;
