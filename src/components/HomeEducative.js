import React from 'react';
import logo_react from '../logo_react.png'
const HomeEducative=()=>{
    console.log("hello ");
    console.log(process.env.PUBLIC_URL)
    return (
        <><div className="banner">
		<h1> Welcome to Educative's React.js Progressive Web App</h1>
        </div><div className="next_properties">
                    <div className="image">
                        <img
                            src={logo_react}
                            alt="Educative's App"
                         />
                    </div>
		</div></>
    
    )
}

export default HomeEducative;