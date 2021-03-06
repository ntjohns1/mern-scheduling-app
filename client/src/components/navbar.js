import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Auth from '../utils/auth';
import '../App.css';

export default function Navigation() {
    const loggedStatus = Auth.loggedIn();
	const logout = (event) => {
		event.preventDefault();
		Auth.logout();
	  };
    return (
        <>
            <Navbar
                collapseOnSelect
                sticky='top'
                expand='lg'
                variant='dark'
                className='mb-3'
                style={{ backgroundColor: '#00334E' }}>
                <Navbar.Brand className='header-nav px-3'>
					<FontAwesomeIcon icon={'play-circle'}/> Music Notes
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav
						className='ms-auto px-3'>
						<Nav.Link style={{ color: 'white' }} as={Link} to='/'>
							Home
						</Nav.Link>
						{loggedStatus && (
							<Nav.Link style={{ color: 'white' }} onClick={logout}>
							Logout
							</Nav.Link>
						)}
						{!loggedStatus && (
							<Nav.Link style={{ color: 'white' }} as={Link} to='/signup'>
								Sign Up
							</Nav.Link>
						)}
						{!loggedStatus && (
							<Nav.Link style={{ color: 'white' }} as={Link} to='/login'>
								Log In
							</Nav.Link>
						)}
					</Nav>
				</Navbar.Collapse>    
            </Navbar>
        </>
    )
}



