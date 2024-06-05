import React, { useEffect, useState, FC } from "react";
import "../assets/css/pokemonCard.css";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter, getHighResImageUrl } from "../pokemonUtils";
import { Loader } from "./Loader";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonListResponse {
  results: Pokemon[];
}

export const PokemonCard: FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${index}&limit=20`)
      .then((response) => response.json())
      .then((data: PokemonListResponse) => {
        setPokemons(data.results);
      });
  }, [index]);

  const handleNextClick = () => {
    const newIndex = index + 20;
    const newIndexMax = Math.min(newIndex, 1280);
    setIndex(newIndexMax);
  };

  const handlePreviousClick = () => {
    const newIndex = index - 20;
    const newIndexMax = Math.max(newIndex, 0);
    setIndex(newIndexMax);
  };

  const extractIdFromUrl = (url: any): any => {
    const parts = url.split("/");
    return parts[parts.length - 2];
  };

  return (
    <>
      <div className="header">
        {/* <img src={} alt="Pokebola" /> */}
        <h1>Pokédex</h1>
      </div>

      <div className="body">
        <ul className="pokemons">
          {pokemons.length > 1 ? (
            pokemons.map((pokemon) => (
              <li key={pokemon.url} className="pokemon">
                <Link to={`/pokemon/${extractIdFromUrl(pokemon.url)}`}>
                  <img
                    className="sprite"
                    src={getHighResImageUrl(extractIdFromUrl(pokemon.url))}
                    alt={pokemon.name}
                  />
                  <h2>{capitalizeFirstLetter(pokemon.name)}</h2>
                </Link>
              </li>
            ))
          ) : (
            <Loader />
          )}
        </ul>
        <div className="button">
          <button className="btn" onClick={handlePreviousClick}>
            Back
          </button>
          <button className="btn" onClick={handleNextClick}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};
