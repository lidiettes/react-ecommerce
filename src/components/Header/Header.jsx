import './Header.css';

import CounterApp from '../CounterApp/CounterApp';
import { Link } from 'react-router-dom';
import Items from '../../assets/db';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Header = () => {

	const { items, setItems } = useContext(CartContext);
	

	return (
		<>
			<header>
				<div className="wrapper">
					<Link to="/" className="logo">SödDesign</Link>

					<nav>
						<Link to="/">Home</Link>
						<a href="#">Shop</a>

						<Link to= "/shippingpage">Shipping page</Link>

						<Link className="cartBag" to="/cart">

							<svg className="bag bi bi-bag-fill" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" viewBox="0 0 16 16">
								<path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
							</svg>
							<p className="notification"> {items.length}</p> 
						</Link>



					</nav>
				</div>
			</header>

		</>
	)
};

export default Header;


