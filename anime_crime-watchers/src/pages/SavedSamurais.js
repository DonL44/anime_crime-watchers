// import React from "react";
// import {
//   Container,
//   Card,
//   Button,
// } from "react-bootstrap";

// import Auth from "../utils/auth";
// import { removesamuraiId } from "../utils/localStorage";

// import { useQuery, useMutation } from "@apollo/client";
// import { QUERY_ME } from "../utils/queries";
// import { REMOVE_SAMURAI } from "../utils/mutations";

// const Savedsamurais = () => {
//   const { data: userData } = useQuery(QUERY_ME);
//   const [deletesamurai, { error }] = useMutation(REMOVE_SAMURAI);

//   // create function that accepts the samurai's mongo _id value as param and deletes the samurai from the database
//   const handleDeletesamurai = async (samuraiId) => {
//     const token = Auth.loggedIn() ? Auth.getToken() : null;

//     if (!token) {
//       return false;
//     }

//     try {
//       await deletesamurai({ variables: { samuraiId } });

//       // upon success, remove samurai's id from localStorage
//       removesamuraiId(samuraiId);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // if data isn't here yet, say so
//   if (!userData) {
//     return <h2>LOADING...</h2>;
//   }

//   return (
//     <>
//       {/* <Jumbotron fluid className="text-light bg-dark"> */}
//         <Container>
//           <h1>Viewing saved samurais!</h1>
//         </Container>
//       {/* </Jumbotron> */}
//       <Container>
//         <h2>
//           {userData.me.savedsamurais.length
//             ? `Viewing ${userData.me.savedsamurais.length} saved ${
//                 userData.me.savedsamurais.length === 1 ? "samurai" : "samurais"
//               }:`
//             : "You have no saved samurais!"}
//         </h2>
//         {/* <CardColumns>
//           {userData.me.savedsamurais.map((samurai) => {
//             return (
//               <Card key={samurai.samuraiId} border="dark">
//                 {samurai.image ? (
//                   <Card.Img
//                     src={samurai.image}
//                     alt={`The cover for ${samurai.title}`}
//                     variant="top"
//                   />
//                 ) : null}
//                 <Card.Body>
//                   <Card.Title>{samurai.title}</Card.Title>
//                   <p className="small">Authors: {samurai.authors}</p>
//                   <Card.Text>{samurai.description}</Card.Text>
//                   <Button
//                     className="btn-block btn-danger"
//                     onClick={() => handleDeletesamurai(samurai.samuraiId)}
//                   >
//                     Delete this samurai!
//                   </Button>
//                 </Card.Body>
//                 {error && <div>Something went wrong...</div>}
//               </Card>
//             );
//           })}
//         </CardColumns> */}
//       </Container>
//     </>
//   );
// };

// export default Savedsamurais;