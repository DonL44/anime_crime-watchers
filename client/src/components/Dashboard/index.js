import React  from "react";
import Card from "react-bootstrap/Card";

function Dashboard(props) {

	return (
		<Card style={{ width: "18rem" }}>
						
			<div className="center">
				<Card.Body>
				
					<img
					src={require(`../../assets/images/${props.dashboard.image}`)}
					alt="about-me"
					className="photo"
				/>
					<Card.Title className="card-title">{props.dashboard.name}</Card.Title>
					<Card.Text className="card-text">{props.dashboard.description}</Card.Text>
					<Card.Subtitle className="card-subtitle">{props.dashboard.technologies} </Card.Subtitle>
					<Card.Link href={props.dashboard.deployed} target="_blank" className="card-link">
						{props.dashboard.name} Link
					</Card.Link>
					<br></br>
					<Card.Link href={props.dashboard.github} target="_blank" className="card-link">
						{props.dashboard.Linkname} Github
					</Card.Link>
				</Card.Body>
			</div>
		</Card>
	);
}

// project 
export default Dashboard;