import React from "react";
import { Route, Routes } from "react-router-dom";
import Podex from "../components/Pokedex";
import PokemonDetails from "../components/PokemonDetails";

function PokeRotes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Podex/>} />
        <Route path="/pokemon/:id" element={<PokemonDetails/>} />
      </Routes>
    </>
  );
}

export default PokeRotes;