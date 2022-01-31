import React from 'react';

function Media(props) {
    const flag = props.flag;
    if (flag)
        return(
            <div class="d-flex align-items-center my-3">
                <div class="flex-shrink-0">
                    <a href={props.link}>
                        <img src={props.image} alt="placeholderImage" />
                    </a>
                </div>
                <div class="flex-grow-1 ms-3">
                    <h6 style={{fontSize: ".875rem"}} className='my-0'>
                        <a href={props.link} className='text-decoration-none text-dark'>{props.text}</a>
                    </h6>
                    <p style={{fontSize: ".75rem"}} className='my-0 text-secondary d-none d-md-block'>
                        <span className='me-2'>{props.date}</span>
                            |	
                        <span className='ms-2'>{props.readingtime} min read</span>
                    </p>
                </div>
            </div>
    	);

    else
        return(
            <div class="d-flex align-items-center my-3">
                <div class="flex-shrink-0">
                    <img src={props.image} alt="placeholderImage" />
                </div>
                <div class="flex-grow-1 ms-3 text-start">
                    <h6 style={{fontSize: ".875rem"}} className='fw-bold'>{props.text}</h6>
                    <p style={{fontSize: ".75rem"}} className='mb-0 text-secondary d-none d-md-block'>{props.text2}</p>
                </div>
            </div>
        );

}



export default Media;



