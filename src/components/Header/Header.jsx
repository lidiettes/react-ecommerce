import './Header.css';

import CounterApp from '../CounterApp/CounterApp';
import { Link } from 'react-router-dom';
import Items from '../../assets/db';
import { useContext, useEffect } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserContext } from '../../context/UserContext/UserContext';
import { OrdersContext } from '../../context/OrdersContext/OrdersContext';


const Header = () => {

	const { items, setItems } = useContext(CartContext);
	const { user, setUser } = useContext(UserContext);
	const {orders, setOrders}= useContext(OrdersContext);


	useEffect(() => {
        sessionStorage.setItem("user", JSON.stringify(user))
    }, [user])

	useEffect(() => {
        localStorage.setItem("order", JSON.stringify(orders))
    }, [orders])







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
							<Link to="/login"><i className="fa fa-user" aria-hidden="true"></i> {user.name}</Link>
							
						</div>

					</nav>
					
				</div>
			</header>

		</>
	)
};

export default Header;


