import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import Tilt from 'react-tilt';
import '../styles/Details.css';

const Details = (props) => {
	const local = JSON.parse(localStorage.getItem('hero'));
	let data = props?.history?.location?.query?.hero;
	const obj = data? data : local;
	localStorage.setItem('hero', JSON.stringify(obj));
	// console.log(obj);
	return (
		 <div className="Details">
		 	<div className="back">
		 		<Link to="/">Go back</Link>
		 	</div>

			<h1>{obj.name}</h1>
			<div className="main">
				<div className="left">
					<img 
						className="hero-img" 
						src={`${process.env.PUBLIC_URL}/assets/${obj.imgCard}`} 
						alt="img-Card"
					/>
					<span className="hero-type">{obj.type}</span>
					<div className="bars">
						<p>Durability: {obj.alive}/100 </p>
						<p>Offense: {obj.phy}/100 </p>
						<p>Skill Effects: {obj.mag}/100 </p>
						<p>Difficulty: {obj.diff}/100 </p>
					</div>
				</div>
				<div className="right">
					<div className="story">
						<h3>Story:</h3>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing, elit. Quibusdam, atque, voluptatibus? Voluptates, ipsa, vel distinctio sed possimus, consequatur quo ducimus odio laboriosam impedit doloribus fugiat. Architecto quam accusantium, aut repellat.</p>
					</div>
					<div className="equipments">
						Equipments:
						{obj.gear.out_pack.map(equip => {
							return (
								<img 
									key={Date.now()+(Math.random()*100)}
									src={equip.equip.icon} 
									alt={equip.equip.name}
									title={equip.equip.name} 
								/>
							)
						})}
					</div>
					<div className="equipments">
						Skills:
						{obj.skill.skill.map(skill => {
							return (
								<img 
									key={Date.now()+(Math.random()*100)}
									src={skill.icon} 
									alt={skill.name}
									title={skill.name} 
								/>
							)
						})}
					</div>
					<div className="equipments">
						Counters:
						<img 
							className="counter-hero"
							src={obj.counters.counters.icon} 
							alt={obj.counters.counters.name}
							title={obj.counters.counters.name} 
						/>
					</div>
					<div className="equipments">
						Countered by:
						<img 
							className="counter-hero"
							src={obj.counters.countered.icon} 
							alt={obj.counters.countered.name}
							title={obj.counters.countered.name} 
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default withRouter(Details);

/*

alive -> durability
phy -> offense
mag -> skill effects
diff -> difficulty

*/