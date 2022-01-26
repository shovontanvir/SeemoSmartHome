import React from 'react';

function Media(props) {
	return(
		<div class="d-flex align-items-center my-3">
			<div class="flex-shrink-0">
				<img src={props.image} alt="placeholderImage" />
			</div>
			<div class="flex-grow-1 ms-3">
                <h6 style={{fontSize: ".875rem"}} className='my-0'>{props.text}</h6>
                <p style={{fontSize: ".75rem"}} className='my-0 text-secondary d-none d-md-block'>
                    <span className='me-2'>{props.date}</span>
                        |	
                    <span className='ms-2'>{props.readingtime} min read</span>
                </p>
            </div>
        </div>
	);
}

export default Media;



