import React from 'react';

const Forms = () => {
  return (
    <div>
        <form className="row">
            <div className="col-12 my-3">
                <h4 className='fw-bold'>Leave a Reply</h4>
            </div>
            <div className="col-md-4 my-3">
                <label for="inputPassword4" className="form-label">Name*</label>
                <input type="text" className="form-control" placeholder="Name" aria-label="First name" />
            </div>
            <div className="col-md-4 my-3">
                <label for="inputEmail4" className="form-label">Email*</label>
                <input type="email" className="form-control" placeholder="Email" id="inputEmail4" />
            </div>
            <div className="col-4 my-3">
                <label for="inputWebsite" className="form-label">Website</label>
                <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
            </div>
            <div className="col-12 my-3">
                <label for="exampleFormControlTextarea1" className="form-label">Write Your Comment Here*</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
            </div>

            <div className="col-12">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label className="form-check-label" for="gridCheck">
                        Save my name, email, and website in this browser for the next time I comment.
                    </label>
                </div>
            </div>
            <div className="col-12 my-3">
                <button type="submit" className="btn btn-warning rounded-pill px-4">Post Comment</button>
            </div>
        </form>
    </div>
    );
};

export default Forms;
