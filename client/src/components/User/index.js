//Reference the Project.js to pull each JS file.
import React from 'react';
import Dashboard from '../Dashboard';


function User() {
	const dashboard = [
		{
			name: 'Minamoto no Yoshitsune',
			description:
				'Access Tennessee is an app that strives to make this state more accommodating and accessible to all people.',
			image: '../../assets/images/hanzai_watchers.gif',
			
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
						<Dashboard dashboard={dashboard[0]}></Dashboard>
					</li>
					{/* <li className="padding">
						<Project dashboard={dashboard[1]}></Project>
					</li> */}
				</ul>
				{/* <ul className="flex-row mobile-row">
					<li className="padding">
						<Project dashboard={dashboard[2]}></Project>
					</li>
					<li className="padding">
						<Project dashboard={dashboard[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project dashboard={dashboard[4]}></Project>
					</li>
				</ul> */}
			</div>
		</section>
	);
}

//portfolio
export default User;