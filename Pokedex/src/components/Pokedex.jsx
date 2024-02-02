import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Pokedex() {
  const [pokemons, setPokemon] = useState([]);
  const [prevUrl, setPrevUrl] = useState("");
  const [nextUrl, setNextUrl] = useState("");
  const [pokedexUrl, setPokedexUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );

  const fetchData = async () => {
    const response = await axios.get(pokedexUrl);
    const result = response.data.results;
    const pokemonUrl = result.map((url) => axios.get(url.url));
    const promises = await axios.all(pokemonUrl);
    const pokemonData = promises.map((data) => {
      const pokemon = data.data;

      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other.dream_world.front_default,
      };
    });

    setPokemon(pokemonData);
    setNextUrl(response.data.next);
    setPrevUrl(response.data.previous);
  };

  useEffect(() => {
    fetchData();
  }, [pokemons]);

  return (
    <>
      {pokemons.map((data) => (
        <div key={data.id} className="col col-sm-4 col-md-3 col-lg-2 col-xl-2">
          <Link to={`pokemon/${data.id}`} className="nav-link">
            <h6
              className="card-title text-center text-dark text-uppercase mb-2 fst-italic"
              style={{ letterSpacing: "5px" }}
            >
              {data.name}
            </h6>
            <img
              src={data.image}
              alt=""
              className="card-img-top mb-5"
              style={{ height: "150px" }}
            />
          </Link>
        </div>
      ))}

      <div className="d-flex justify-content-center mb-4 gap-2 ">
        <button
          disabled={prevUrl == null}
          className="btn btn-primary"
          onClick={() => setPokedexUrl(prevUrl)}
        >
          Previous
        </button>
        <button
          className="btn btn-primary"
          onClick={() => setPokedexUrl(nextUrl)}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Pokedex;
