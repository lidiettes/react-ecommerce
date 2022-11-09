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

						<Link className="cartBag" to="/cart">

							<p>CART</p>
							<p className="notification"> {items.length}</p> 
						</Link>



					</nav>
				</div>
			</header>

		</>
	)
};

export default Header;


