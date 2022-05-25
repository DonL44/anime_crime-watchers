import React  from "react";
import Card from "react-bootstrap/Card";

function Dashboard(props) {

	return (
		<Card style={{ width: "18rem" }}>
						
			<div className="center">
				<Card.Body>
				
					{/* <image
					src={require(`../../assets/images/${props.users.image}`)}
					alt="user's profile picture"
					className="photo"
				/> */}
					<Card.Title className="card-title">name</Card.Title>
					<Card.Text className="card-text">Description</Card.Text>
					<Card.Subtitle className="card-subtitle">Tech </Card.Subtitle>
					<Card.Link target="_blank" className="card-link">
						Link
					</Card.Link>
					<br></br>
					
				</Card.Body>
			</div>
		</Card>
	);
}

// project 
export default Dashboard;