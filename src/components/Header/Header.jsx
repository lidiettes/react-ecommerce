import './Header.css';
import { Link, useNavigate } from 'react-router-dom';

import { useContext, useEffect } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserContext } from '../../context/UserContext/UserContext';
import { LoggedInContext } from '../../context/LoggedInContext/LoggedInContext';


const Header = () => {

	const { items} = useContext(CartContext);
	const { user} = useContext(UserContext);

	const {loggedIn} = useContext(LoggedInContext);
	const navigate= useNavigate();


	const doubleWay = ()=>{
		console.log(loggedIn);
		loggedIn ? navigate("/") : navigate ("/login");	}



	return (
		<>
			<header>
				<div className="wrapperHeader">
					<Link to="/" className="logo">Söd</Link>
					<nav>
						<Link to="/">Home</Link>
						<Link to="/shop">Shop</Link>
						<Link to="/shop">About us</Link>
						
						
						<div className='iconsHeader'>
						
							<Link to="/cart"><i className="fa fa-shopping-cart" aria-hidden="true">{items.length}</i></Link>
							<Link to="/wishlist"><i className="fa fa-heart" aria-hidden="true"></i></Link>
							<a><div onClick={doubleWay}><i className="fa fa-user" aria-hidden="true"></i> {user.name}</div></a>
							
						</div>

					</nav>
					
				</div>
			</header>

		</>
	)
};

export default Header;


