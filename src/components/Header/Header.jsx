import './Header.css';

import CounterApp from '../CounterApp/CounterApp';
import { Link } from 'react-router-dom';
import Items from '../../assets/db';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {

	const { items, setItems } = useContext(CartContext);
	

	return (
		<>
			<header>
				<div className="wrapper">
					<Link to="/" className="logo">Söd</Link>

					<nav>
						<Link to="/">Home</Link>
						<a href="#">Shop</a>

						<Link to= "/shippingpage">Shipping page</Link>

						<Link  to="/cart">
						<i class="fa fa-shopping-cart" aria-hidden="true">{items.length}</i> 
						</Link>

						<i class="fa fa-heart" aria-hidden="true"></i>
						<i class="fa fa-user" aria-hidden="true"></i>
						



					</nav>
				</div>
			</header>

		</>
	)
};

export default Header;


