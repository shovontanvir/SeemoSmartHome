import React from 'react';

function Buttons(props){
  return (
    <a href={props.link}>
        <button type='button' className='btn btn-dark mt-2 ms-3 py-2'>
			<div class="d-flex align-items-center">
				<div class="flex-shrink-0">
					<img src={props.image} alt="placeholderImage" />
				</div>
				<div class="flex-grow-1 ms-2 text-start">
					<p style={{fontSize: ".5rem"}} className='my-0 d-none d-md-block'>{props.text}</p>
					<h6 className='my-0'>{props.text2}</h6>
					
				</div>
			</div>
        </button>
    </a>  
  );
};

export default Buttons;


