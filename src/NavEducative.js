import React from 'react';
import { Link } from 'react-router-dom';

const NavEducative=()=>{
    return (    
        <nav className="div_nav">
			<div>
				<Link to="/my_educative_pwa" className="hyperlinks">Home</Link>
			</div>
			<div>
				<Link to="/about" className="hyperlinks">About Educative</Link>
			</div>
		</nav>
    )

}

export default NavEducative;