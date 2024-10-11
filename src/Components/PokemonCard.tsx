const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",
    },
];

function PokemonCard() {
	const pokemon = {
		name: pokemonList[1].name,
		img: pokemonList[1].imgSrc,
	};

	return (
		<figure>
			{ pokemon.img != null ? <img src={pokemon.img} alt={pokemon.name} /> : <p>???</p>}

			<figcaption>{pokemon.name}</figcaption>
		</figure>
	);
}

export default PokemonCard;
