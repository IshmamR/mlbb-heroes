import React, { useEffect } from 'react';
import Card from './Card';
import Heroes from '../data/heroes.json';
import '../styles/Cards.css';

const Cards = (props) => {
	// console.log(props);
	useEffect(() => {
		// console.log('');
	}, [])
	return (
		<div className="Cards">
			{Heroes.heroData.map(hero => {
				return (
					<Card 
						data={hero} 
						key={(Date.now()+(Math.random()*100))+hero.heroId} 
					/>
				)
			})}
		</div>
	)
}

export default Cards;