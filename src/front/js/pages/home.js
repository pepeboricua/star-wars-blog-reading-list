import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CharacterCard from "../component/CharacterCard";
import StarshipCard from "../component/StarshipCard";
import PlanetCard from "../component/PlanetCard";

export const Home = () => {
	const { store, actions } = useContext(Context);
		console.log(store.people)
	return (
		<div className="text-center mt-5">
			<h2>CHARACTERS</h2>
				<div>
					{store.people.map((person, index) => {
						return(
							<CharacterCard banana={person} id={index} />
						)
					})}
				</div>
		
			<h2>STARSHIPS</h2>
				<div>
					{store.starships.map((starship, index) => {
						return(
							<StarshipCard apple={starship} id={index} />
						)	
					})}
				</div>
			<h2>PLANETS</h2>
				<div>
					{store.planets.map((planets, index) => {
						return(
							<PlanetCard orange={planets} id={index} />
						)	
					})}
				</div>
			</div>
	);
};
