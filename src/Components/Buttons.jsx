import React from 'react';
import '../Styles/Buttons.css';

function Buttons(props){
	const normal = props.normal
	let test = "btn btn-seemo "+props.class+" mt-2 py-2";
	if (normal)
		return(
			<a href={props.link}>
				<button type='button' className={test}>
					{props.text}
				</button>
			</a>
		)
	else
		return (
			<a href={props.link}>
				<button type='button' className={test}>
					<div class="d-flex align-items-center">
						<div class="flex-shrink-0">
							<img src={props.image} alt="placeholderImage" />
						</div>
						<div class="flex-grow-1 ms-2 text-start">
							<p style={{fontSize: ".5rem"}} className='my-0 d-none d-md-block'>{props.text}</p>
							<p className='my-0 fs-6'>{props.text2}</p>
							
						</div>
					</div>
				</button>
			</a>  
		);
};

export default Buttons;


