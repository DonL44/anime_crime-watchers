import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About us</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/images/')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
				Hi, lorem.
				</p>
				
			</div>
		</section>
	);
}

export default About;