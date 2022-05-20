import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Hanzai Watchers
      </NavLink>
      <NavLink
        to='/About'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        About
      </NavLink>
      <NavLink
        to='/Login'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Login
      </NavLink>
      <NavLink
        to='/Sign'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Sign Up
      </NavLink>
      <NavLink
        to='/Blog'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Blog
      </NavLink>
      {/* <NavLink
        to='/Products'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Products
      </NavLink> */}
      <NavLink
        to='/Contact'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Contact Us
      </NavLink>
      <NavLink
        to='/Submit'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Submit a Crime Tip
      </NavLink>
    </nav>
  );
};
export default Navbar;

// import React, { useState } from 'react';

// import Auth from '../utils/auth';

// const AppNavbar = () => {

//   const [showModal, setShowModal] = useState(false);

//   return (
//     <>
//       <Navbar bg='dark' variant='dark' expand='lg'>
//         <Container fluid>
//           <Navbar.Brand as={Link} to='/'>
//             Hanzai Watchers
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls='navbar' />
//           <Navbar.Collapse id='navbar'>
//             <Nav className='ml-auto'>
//               <Nav.Link as={Link} to='/'>
//                 Submit a Crime Tip
//               </Nav.Link>
      
//               {Auth.loggedIn() ? (
//                 <>
//                   <Nav.Link as={Link} to='/saved'>
//                     See Your Samurai
//                   </Nav.Link>
//                   <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
//                 </>
//               ) : (
//                 <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
//               )}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
 
//       <Modal
//         size='lg'
//         show={showModal}
//         onHide={() => setShowModal(false)}
//         aria-labelledby='signup-modal'>
    
//         <Tab.Container defaultActiveKey='login'>
//           <Modal.Header closeButton>
//             <Modal.Title id='signup-modal'>
//               <Nav variant='pills'>
//                 <Nav.Item>
//                   <Nav.Link eventKey='login'>Login</Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                   <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
//                 </Nav.Item>
//               </Nav>
//             </Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <Tab.Content>
//               <Tab.Pane eventKey='login'>
//                 <LoginForm handleModalClose={() => setShowModal(false)} />
//               </Tab.Pane>
//               <Tab.Pane eventKey='signup'>
//                 <SignUpForm handleModalClose={() => setShowModal(false)} />
//               </Tab.Pane>
//             </Tab.Content>
//           </Modal.Body>
//         </Tab.Container>
//       </Modal>
//     </>
//   );
// };

// export default AppNavbar;