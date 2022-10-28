import './Header.css';

import CounterApp from '../CounterApp/CounterApp';

const Header = () => {
return (
    <>
        <header>
		<div className="wrapper">
			<div className="logo">Söy</div>
			
			<nav>
				<a href="#">Home</a>
				<a href="#">Shop</a>
				<a href="#">About us</a>
				<a href="#">Contact</a>
				
                <svg className="bag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-bag-fill" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
</svg>
 
<div class="bag">  <CounterApp /> </div>
            	
			</nav>
		</div>
	    </header>

    </>
)
};

export default Header;


