import "./App.css";
import PokemonCard from "./Components/PokemonCard";
import { useState } from "react";

const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "charmander",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
	},
	{
		name: "squirtle",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
	},
	{
		name: "pikachu",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
	},
	{
		name: "mew",
	},
];

const App = () => {
	const  [pokemonIndex, setPokemonIndex] = useState(0);
	const decrementIndex = () => {
		if (pokemonIndex > 0) {
			setPokemonIndex(pokemonIndex - 1);
		}
	};
	const incrementIndex = () => {
		if (pokemonIndex < pokemonList.length - 1) {
			setPokemonIndex(pokemonIndex + 1);
		}
	};

	return (
		<div>
			<PokemonCard pokemon={pokemonList[pokemonIndex]} />

			<button type="button" onClick={() => decrementIndex()}>
				Précedent
			</button>
			<button type="button" onClick={() => incrementIndex()}>
				Suivant
			</button>
		</div>
	);
};

export default App;
