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
				<div className="wrapperHeader">
					{/* <Link to="/" className="logo">Söd</Link> */}

					<nav>
						
						<Link to="/">Home</Link>
						<a href="#">Shop</a>
						<a href="#">About us</a>
						<Link to="/shippingpage">Shipping page</Link>
						<div className='iconsHeader'>
						
							<Link to="/cart"><i className="fa fa-shopping-cart" aria-hidden="true">{items.length}</i></Link>
							<Link to="/wishlist"><i className="fa fa-heart" aria-hidden="true"></i></Link>
							<Link to="/login"><i className="fa fa-user" aria-hidden="true"></i></Link>
						</div>

					</nav>

				</div>
			</header>

		</>
	)
};

export default Header;


