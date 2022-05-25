import React  from "react";
import Card from "react-bootstrap/Card";

function Dashboard(props) {

	return (
		<Card style={{ width: "18rem" }}>
						
			<div className="center">
				<Card.Body>
				
					<image
					src={require(`../../assets/images/${props.users.imgage}`)}
					alt="user's profile picture"
					className="photo"
				/>
					<Card.Title className="card-title">{props.users.name}</Card.Title>
					<Card.Text className="card-text">{props.users.description}</Card.Text>
					<Card.Subtitle className="card-subtitle">{props.users.technologies} </Card.Subtitle>
					<Card.Link href={props.users.deployed} target="_blank" className="card-link">
						{props.users.name} Link
					</Card.Link>
					<br></br>
					
				</Card.Body>
			</div>
		</Card>
	);
}

// project 
export default Dashboard;