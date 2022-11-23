import './HeaderDos.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserContext } from '../../context/UserContext/UserContext';
import { LoggedInContext } from '../../context/LoggedInContext/LoggedInContext';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';



const Header = () => {

	const { items } = useContext(CartContext);
	const { user } = useContext(UserContext);

	const { loggedIn } = useContext(LoggedInContext);
	const navigate = useNavigate();


	const doubleWay = () => {
		console.log(loggedIn);
		loggedIn ? navigate("/") : navigate("/login");
	}



	return (
		<>
	
			<Navbar expand="lg" className='navbar'>
				<Container className="">
					<Navbar.Brand href="/">Söd</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="/shop">Shop</Nav.Link>

							<div className='iconsHeader'>
								<Link to="/cart"><i className="fa fa-shopping-cart" aria-hidden="true">{items.length}</i></Link>
								<Link to="/wishlist"><i className="fa fa-heart" aria-hidden="true"></i></Link>
								<a><div onClick={doubleWay}><i className="fa fa-user" aria-hidden="true"></i> {user.name}</div></a>
							</div>


							<NavDropdown title={user.name} id="basic-nav-dropdown">

								<NavDropdown.Item href="/user">User</NavDropdown.Item>
								<NavDropdown.Item href="/order">
									Orders
								</NavDropdown.Item>
								<NavDropdown.Item href="/Something">Something</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">
									Log out
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		






			{/* <header>
				<div className="wrapperHeader">
					<Link to="/" className="logo">Söd</Link>
					<nav>
						<Link to="/">Home</Link>
						<Link to="/shop">Shop</Link>
						<Link to="/shop">About us</Link>




					</nav>

				</div>
			</header> */}

		</>
	)
};

export default Header;


