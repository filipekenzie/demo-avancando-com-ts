import { createContext, ReactNode, useContext, useState } from "react";
import { Digimon } from "../../types/digimon";

interface FavoriteDigimonsProvidersProps {
  children: ReactNode;
}

interface FavoriteDigimonsProviderData {
  favorites: Digimon[];
  addDigimon: (digimon: Digimon) => void;
  deleteDigimon: (digimon: Digimon) => void;
}

const FavoriteDigimonContext = createContext<FavoriteDigimonsProviderData>(
  {} as FavoriteDigimonsProviderData
);

export const FavoriteDigimonsProvider = ({
  children,
}: FavoriteDigimonsProvidersProps) => {
  const [favorites, setFavorites] = useState<Digimon[]>([] as Digimon[]);

  const addDigimon = (digimon: Digimon) => {
    setFavorites([...favorites, digimon]);
  };

  const deleteDigimon = (digimonToBeDeleted: Digimon) => {
    const newList = favorites.filter(
      (digimon) => digimon.name !== digimonToBeDeleted.name
    );

    setFavorites(newList);
  };

  return (
    <FavoriteDigimonContext.Provider
      value={{ favorites, addDigimon, deleteDigimon }}
    >
      {children}
    </FavoriteDigimonContext.Provider>
  );
};

export const useFavoriteDigimons = () => useContext(FavoriteDigimonContext);
