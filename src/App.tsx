import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Digimon } from "./types/digimon";
import { Container } from "./components/DigimonCard/styles";
import { FavoritesListContainer, ListContainer } from "./styles";
import Digimons from "./components/Digimons";
import { useFavoriteDigimons } from "./Providers/FavoriteDigimons";

function App() {
  const { favorites } = useFavoriteDigimons();

  const [digimons, setDigimons] = useState<Digimon[]>([] as Digimon[]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetch("https://digimon-api.vercel.app/api/digimon")
      .then((response) => response.json())
      .then((response) => setDigimons([...response]))
      .catch(() => setError("Algo deu errado..."));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <FavoritesListContainer>
            <Digimons digimons={favorites} isFavorite={true} />
          </FavoritesListContainer>
          <ListContainer>
            <Digimons digimons={digimons} />
          </ListContainer>
        </Container>
      </header>
    </div>
  );
}

export default App;
