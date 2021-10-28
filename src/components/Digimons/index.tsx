import { Digimon } from "../../types/digimon";
import DigimonCard from "../DigimonCard";

interface DigimonsProps {
  digimons: Digimon[];
  isFavorite?: boolean;
}

const Digimons = ({ digimons, isFavorite = false }: DigimonsProps) => {
  return (
    <>
      {digimons.map((digimon, index) => (
        <DigimonCard key={index} digimon={digimon} isFavorite={isFavorite} />
      ))}
    </>
  );
};

export default Digimons;
