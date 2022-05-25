//Reference the Project.js to pull each JS file.
import React from 'react';
import Dashboard from '../Dashboard';


function User() {
	const users = [
		{
			name: 'Emperor Meiji',
			description:
				'Japanese Emperor',
			image: '#',
			technologies: [
				'Emperor', 
				' Leader',
				' Strong',
				
			],
		},
		{
			name: 'Marco Polo',
			description:
				'Traveler',
			image: '#',
			technologies: [
				'Business',
				' Leader',
				' Traveler',
				
			],
		},
		{
			name: 'Confucius',
			description:
				'Teacher',
			image: '#',
			technologies: [
				' Chinese Teacher',
				'Political Leader',
	
			],
			
		},
		{
			name: 'Nintendo Yamaha',
			description:
				'Gamer and Musician',
			image: '#',
			technologies: ['Animal Crossings', ' Piano', '  Hacker'],
			
		},
			];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Reports</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Dashboard users={users[0]}></Dashboard>
					</li>
					<li className="padding">
						<Dashboard users={users[1]}></Dashboard>
					</li> 
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Dashboard users={users[2]}></Dashboard>
					</li>
					<li className="padding">
						<Dashboard users={users[3]}></Dashboard>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Dashboard users={users[4]}></Dashboard>
					</li>
				</ul>
			</div>
		</section>
	);
}

//portfolio
export default User;