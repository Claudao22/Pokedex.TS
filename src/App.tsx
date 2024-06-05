import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokemonDetails } from "./components/PokemonDetails";
import { PokemonCard } from "./components/PokemonCard";
import "./assets/css/index.css";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PokemonCard />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
