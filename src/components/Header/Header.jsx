import './HeaderDos.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
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
	const { user, setUser } = useContext(UserContext);
	const { loggedIn, setLoggedIn } = useContext(LoggedInContext);
	const navigate = useNavigate();


	const doubleWay = () => {
		console.log(user);
		user ? navigate("/myaccount") : navigate("/login");
	}

	const logOut = () => {
		//esto de abajo da usuario undefi
        // const deleteUser = localStorage.removeItem('user');
		//pongo abajo unos corchetes vacios y lo soluciono, ya no sale undefined
		setUser(false);
		setLoggedIn(false);
		navigate("/")
    }

	

	return (
		<>
	
			<Navbar expand="lg" className='navbar'>
				<Container className="">
					<Navbar.Brand className="brand" href="/">Söd</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="/shop">Shop</Nav.Link>

							<div className='iconsHeader'>
								<Link to="/cart"><i className="fa fa-shopping-cart" aria-hidden="true">{items.length}</i></Link>
								<Link to="/wishlist"><i className="fa fa-heart" aria-hidden="true"></i></Link>
								<div onClick={doubleWay}><i className="fa fa-user" aria-hidden="true"></i> </div>
							</div>

							{ user ? (
							<>
							<NavDropdown title={ user.name } id="basic-nav-dropdown">
								<NavDropdown.Item href="/myaccount">My account</NavDropdown.Item>
								<NavDropdown.Item href="/myorders">
									My orders
								</NavDropdown.Item>
								<NavDropdown.Item href="/Something">Something</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item>
									<div onClick={logOut}>
									Log out
									</div>
								</NavDropdown.Item>
							</NavDropdown>
							</>	
                            ) : null }
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		


		</>
	)
};

export default Header;


