import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CharacterCard from "../component/CharacterCard";

export const Home = () => {
	const { store, actions } = useContext(Context);
		console.log(store.people)
	return (
		<div className="text-center mt-5">
			<h2>CHARACTERS</h2>
			<div>
				{store.people.map((person, index) => {
					return(
						<CharacterCard banana={person} />
					)
				})}
			</div>
		</div>
	);
};
