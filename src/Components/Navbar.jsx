import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import seemoLogo from '../images/seemo-logo.png';
import telephone from '../images/telephone.png';
import cart from '../images/cart.png';
import '../Styles/Navbar.css';

function Navbar() {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light mx-0 px-xl-5 border-bottom border-color-gray-100">
				<div className="container-fluid seemo px-4">

					{/* Navbar Logo */}
					<div className="me-3 me-xl-4">
						<a className="navbar-brand" href="#">
							<img src={seemoLogo} alt='brand logo' width='140px' />
						</a>
					</div>

					{/* Hamburger button for small devices */}
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className='navbar-toggler-icon'></span>
					</button>

					{/* Navigation menu items */}
					<div className="collapse navbar-collapse justify-content-between " id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link" href="#">Home</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">About</a>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Product
								</a>
								<ul className="dropdown-menu bg-white" aria-labelledby="navbarDropdown">
									<li><a className="dropdown-item" href="#">Action</a></li>
									<li><a className="dropdown-item" href="#">Another action</a></li>
									<li><a className="dropdown-item" href="#">Something else here</a></li>
								</ul>
							</li>
							<li className="nav-item">
								<a className="nav-link" href='#'>Blogs</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href='#'>Support</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href='#'>Contact</a>
							</li>
						</ul>
						<div className="d-none d-lg-flex align-items-center">
							<a className="navbar-brand" href="#">
								<div className="row align-items-center">
									<div className="col px-0">
										<img src={telephone} alt='cart' />
									</div>
									<div className="col d-none d-xl-block text-start">
										<h6 style={{fontSize: "14px"}} className='my-0 text-secondary'>Make a call</h6>
										<h6 style={{fontSize: "18px"}} className='fs-6 my-0'>09 63877 3366</h6>
									</div>
								</div>
							</a>
							<div className="ms-2">
								<a className="navbar-brand" href="#">
									<img src={cart} alt='cart' />
									<sup className='ms-1'>[0]</sup>
								</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
