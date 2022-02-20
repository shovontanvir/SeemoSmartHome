import React from 'react';
import Socials from './Socials';
import Media from './Media';
import blogheader from '../images/blogdescription.png';
import seemO from '../images/seem-O.png';
import facebook from '../images/facebook.png';
import youtube from '../images/youtube.png';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';
import indoor from '../images/indoor.png';
import recents1 from '../images/recents-1.png';
import recents2 from '../images/recents-2.png';
import recents3 from '../images/recents-3.png';
import banner from '../images/banner.png';
import Forms from './Forms';
import Buttons from './Buttons';


function BlogDescription(props) {
	return(
		<p className="mb-5 fs-6 fs-lg-5 lh-lg">{props.description}</p>
	);
}

function Tags(props) {
	return(
		<div className="col-4 text-center p-1 my-1">
			<a href="#" className='text-decoration-none text-dark'>
				<div className='border border-1 rounded-3 p-2'>
					<h6  style={{fontSize: ".75rem"}} className="my-0">{props.tag}</h6>
				</div>
			</a>
		</div>
	);
}

function Blog(props) {
    return (
		<div>
			<div style={{borderRadius: "15px"}} className='my-4'>
				<img src={props.src} alt='blog header' width='100%' />
			</div>
			<h1 style={{fontSize: 'calc(1.75rem + 1.5vw)'}} className='fw-bold'>{props.heading}</h1>
			<div className="row justify-content-between align-items-center">
				<div className="col">
					<Media flag="true" link="#" image={seemO} text="Author" date="January 21, 2022" readingtime="4" />
				</div>
				<div className="col text-end">
					<Socials link="#" class="d-inline-block ms-1 ms-sm-2 ms-md-3" src={facebook} alt='facebook' />
                    <Socials link="#" class="d-inline-block ms-1 ms-sm-2 ms-md-3" src={youtube} alt='youtube' />
                    <Socials link="#" class="d-inline-block ms-1 ms-sm-2 ms-md-3" src={twitter} alt='twitter' />
                    <Socials link="#" class="d-inline-block ms-1 ms-sm-2 ms-md-3" src={linkedin} alt='linkedin' />
				</div>
			</div>

			<hr className='mt-3 mb-4 border border-secondary' />

			<div className="my-3">
				<p style={{fontSize: ".75rem"}} className='my-0'>
					<span className='me-2 text-secondary'>
						<a href={props.categoryLink} className='text-decoration-none text-secondary'>{props.category}</a>
					</span>
						|	
					<span className='ms-2'>
						<a href={props.subcategoryLink} className='text-decoration-none text-dark'>{props.subcategory}</a>
					</span>
				</p>
			</div>
			<div className="row">
				<div className="col-lg-9 pe-lg-5">
					<BlogDescription description="Apple today named eight app and game developers receiving an Apple Design Award, each one selected for being thoughtful and creative. Apple Design Award winners bring distinctive new ideas to life and demonstrate deep mastery of Apple technology. The apps spring up from developers large and small, in every part of the world, and provide users with new ways of working, creating, and playing." />

					<BlogDescription description='“Every year, app and game developers demonstrate exceptional craftsmanship and we’re honoring the best of the best,” said Ron Okamoto, Apple’s vice president of Worldwide Developer Relations. “Receiving an Apple Design Award is a special and laudable accomplishment. Past honorees have made some of the most noteworthy apps and games of all time. Through their vision, determination, and exacting standards, the winning developers inspire not only their peers in the Apple developer community, but all of us at Apple, too.”' />

					<div className="row justify-content-between align-items-center mb-5 bg-light px-5 py-4 rounded-3">
						<div className="col-4 ms-2 ms-md-4 ms-lg-5">
							<img src={indoor} alt="banner" width='125px' />
						</div>
						<div className="col-5 text-center me-2 me-md-4 me-lg-5">
							<h2 className='fw-bold fs-1'>Indoor Camera</h2>
							<Buttons normal="true" link="#" class="rounded-pill btn-seemoY px-4" text="Shop Now" />
						</div>
					</div>

					<BlogDescription description='Apple today named eight app and game developers receiving an Apple Design Award, each one selected for being thoughtful and creative. Apple Design Award winners bring distinctive new ideas to life and demonstrate deep mastery of Apple technology. The apps spring up from developers large and small, in every part of the world, and provide users with new ways of working, creating, and playing.' />

					<BlogDescription description='“Every year, app and game developers demonstrate exceptional craftsmanship and we’re honoring the best of the best,” said Ron Okamoto, Apple’s vice president of Worldwide Developer Relations. “Receiving an Apple Design Award is a special and laudable accomplishment. Past honorees have made some of the most noteworthy apps and games of all time. Through their vision, determination, and exacting standards, the winning developers inspire not only their peers in the Apple developer community, but all of us at Apple, too.”' />

					<Forms />

				</div>

				<div className="col-lg-3">
					<div className="row justify-content-center align-items-center">
						<div className="col col-lg-12">
							<div className="row">
								<div style={{backgroundColor: "#f5f5f5"}} className="col-12 p-4 rounded-3">
									<h4 className="fw-bold">Recent Post</h4>
									
									<hr className='my-2 border border-secondary' />

									<Media flag='true' link="#" image={recents1} text="The best video doorbells you can buy today" date="January 21, 2022" readingtime="4" />

									<Media flag='true' link="#" image={recents2} text="The best video doorbells you can buy today" date="January 21, 2022" readingtime="4" />

									<Media flag='true' link="#" image={recents3} text="The best video doorbells you can buy today" date="January 21, 2022" readingtime="4" />

								</div>

								<div style={{backgroundColor: "#f5f5f5"}} className="col-6 col-lg-12 my-3 my-lg-5 p-4 rounded-3 w-100">
									<h4 className="fw-bold">All Tag</h4>
									
									<hr className='my-2 border border-secondary' />

									<div className="row jsutify-content-center px-2">
										<Tags tag="Doorbells" />
										<Tags tag="SEEMO" />
										<Tags tag="Best Video" />
										<Tags tag="Security" />
										<Tags tag="Intelligent" />
									</div>
								</div>
							</div>
						</div>

						<div className="col col-lg-12 d-none d-md-block">
							<div className="card text-white">
								<img src={banner} className="card-img" alt="..." />
								<div className="card-img-overlay d-flex align-items-end">
									<div className='my-3 px-3 py-5'>
										<span className="badge bg-{$semoY} text-dark my-3">60% OFF</span>
										<h2 className="card-title fw-bold">Kitchen Appliances</h2>
										<p className="card-text">For a perfect kitchen</p>
										<Buttons normal="true" link="#" class="rounded-pill btn-seemoY px-4" text="Shop Now" />
									</div>
								</div>
							</div>
						</div>
						
					</div>

				</div>
			</div>

		</div>
    );
  }

const BlogPage = () => {
	return (
    	<section>
        	<div className='container-fluid container-xl px-5 px-xl-0 mb-5'>
            	<div className='row'>
            		<div className='col-12 text-start'>
                		<Blog src={blogheader} heading='The best video doorbells you can buy today' author='Admin' date='January 21, 2022' readingtime='4' category='Home' categoryLink="#" subcategory='Lifestyle' subcategoryLink="#"  />
                	</div>
              	</div>
          	</div>
      	</section>
  );
};

export default BlogPage;
