import React from 'react';
import Socials from './Socials';
import Media from './Media';
import blogheader from '../images/blogdescription.png';
import seemO from '../images/seem-O.png';
import facebook from '../images/facebook.png';
import youtube from '../images/youtube.png';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';
import banner from '../images/blogbanner.png';
import recents1 from '../images/recents-1.png';
import recents2 from '../images/recents-2.png';
import recents3 from '../images/recents-3.png';


function BlogDescription(props) {
	return(
		<p className="mb-5 fs-5">{props.description}</p>
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
			<div className='my-4'>
				<img src={props.src} alt='blog header' width='100%' />
			</div>
			<h1 style={{fontSize: '3.1875rem'}} className='fw-bold'>{props.heading}</h1>
			<div className="row justify-content-between">
				<div className="col">
					<Media image={seemO} text="Author" date="January 21, 2022" readingtime="4" />
				</div>
				<div className="col text-end">
					<Socials src={facebook} alt='facebook' />
                    <Socials src={youtube} alt='youtube' />
                    <Socials src={twitter} alt='twitter' />
                    <Socials src={linkedin} alt='linkedin' />
				</div>
			</div>

			<hr className='my-4 border border-secondary' />

			<div className="my-3">
				<p style={{fontSize: ".75rem"}} className='my-0'>
					<span className='me-2 text-secondary'>{props.category}</span>
						|	
					<span className='ms-2'>{props.subcategory}</span>
				</p>
			</div>
			<div className="row">
				<div className="col-9  pe-5">
					<BlogDescription description="Apple today named eight app and game developers receiving an Apple Design Award, each one selected for being thoughtful and creative. Apple Design Award winners bring distinctive new ideas to life and demonstrate deep mastery of Apple technology. The apps spring up from developers large and small, in every part of the world, and provide users with new ways of working, creating, and playing." />

					<BlogDescription description='“Every year, app and game developers demonstrate exceptional craftsmanship and we’re honoring the best of the best,” said Ron Okamoto, Apple’s vice president of Worldwide Developer Relations. “Receiving an Apple Design Award is a special and laudable accomplishment. Past honorees have made some of the most noteworthy apps and games of all time. Through their vision, determination, and exacting standards, the winning developers inspire not only their peers in the Apple developer community, but all of us at Apple, too.”' />

					<div className="mb-5">
						<img src={banner} alt="banner" width="100%" />
					</div>

					<BlogDescription description='Apple today named eight app and game developers receiving an Apple Design Award, each one selected for being thoughtful and creative. Apple Design Award winners bring distinctive new ideas to life and demonstrate deep mastery of Apple technology. The apps spring up from developers large and small, in every part of the world, and provide users with new ways of working, creating, and playing.' />

					<BlogDescription description='“Every year, app and game developers demonstrate exceptional craftsmanship and we’re honoring the best of the best,” said Ron Okamoto, Apple’s vice president of Worldwide Developer Relations. “Receiving an Apple Design Award is a special and laudable accomplishment. Past honorees have made some of the most noteworthy apps and games of all time. Through their vision, determination, and exacting standards, the winning developers inspire not only their peers in the Apple developer community, but all of us at Apple, too.”' />
				</div>

				<div className="col-3">
					<div style={{backgroundColor: "#f5f5f5"}} className="p-4 rounded-3">
						<h4 className="fw-bold">Recent Post</h4>
						
						<hr className='my-2 border border-secondary' />

						<Media image={recents1} text="The best video doorbells you can buy today" date="January 21, 2022" readingtime="4" />

						<Media image={recents2} text="The best video doorbells you can buy today" date="January 21, 2022" readingtime="4" />

						<Media image={recents3} text="The best video doorbells you can buy today" date="January 21, 2022" readingtime="4" />

					</div>

					<div style={{backgroundColor: "#f5f5f5"}} className="my-5 p-4 rounded-3">
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

		</div>
    );
  }

const BlogPage = () => {
	return (
    	<section>
        	<div className='container'>
            	<div className='row'>
            		<div className='col-12 text-start'>
                		<Blog src={blogheader} heading='The best video doorbells you can buy today' author='Admin' date='January 21, 2022' readingtime='4' category='Home' subcategory='Lifestyle'  />
                	</div>
              	</div>
          	</div>
      	</section>
  );
};

export default BlogPage;
