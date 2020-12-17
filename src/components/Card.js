import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt'
import '../styles/Card.css';

const Card = (props) => {
	const hero = props.data;
	const imgCard = hero.imgCard;
	// console.log(hero);
	return (
		<div className="Card">
			<Link to={{ pathname: `/hero/${props.data.heroId}`, query: {hero} }} >
			<Tilt className="Tilt" options={{ max : 25 }} style={{ height: 330, width: 210 }} >
				<div className="Tilt-inner">
					<img 
						className="Card-img" 
						src={`${process.env.PUBLIC_URL}/assets/${imgCard}`} 
						alt={hero.name} 
						style={{ height: 330, width: 210 }} 
					/>
					<div className="overlay"></div>
				</div>
			</Tilt>
			</Link>
		</div>
	)
}

export default Card;