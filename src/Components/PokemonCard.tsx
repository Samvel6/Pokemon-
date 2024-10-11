function PokemonCard () {
    const pokemon = {
     name: "bulbasur",
     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    };

    return (
        <figure>
            <figcaption>{pokemon.name}</figcaption>

        <img src={pokemon.img} alt={pokemon.name} />

        </figure>
    );
}





    
       
export default PokemonCard;
