import React from 'react';
import '../Styles/Forms.css';
import '../Styles/Variables.css';
import Buttons from './Buttons';

const Forms = () => {
  return (
    <div>
        <form className="row mb-5">
            <div className="col-12 my-3">
                <h4 className='fw-bold fs-2'>Leave a Reply</h4>
                <h6 className='font-form fw-normal'>Your email address will not be published. Required fields are marked *</h6>
            </div>
            <div className="col-md-4 my-3">
                <label for="inputPassword4" className="form-label font-form">Name*</label>
                <input type="text" className="form-control" aria-label="First name" />
            </div>
            <div className="col-md-4 my-3">
                <label for="inputEmail4" className="form-label font-form">Email*</label>
                <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-4 my-3">
                <label for="inputWebsite" className="form-label font-form">Website</label>
                <input type="text" className="form-control" aria-label="First name" />
            </div>
            <div className="col-12 my-3">
                <label for="exampleFormControlTextarea1" className="form-label font-form">Write Your Comment Here*</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
            </div>

            <div className="col-12">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label className="form-check-label font-form" for="gridCheck">
                        Save my name, email, and website in this browser for the next time I comment.
                    </label>
                </div>
            </div>
            <div className="col-12 my-3">
                <Buttons normal="true" link="#" class="btn-seemoY rounded-pill px-4" text="Post Comment" /> 
            </div>
        </form>
    </div>
    );
};

export default Forms;
