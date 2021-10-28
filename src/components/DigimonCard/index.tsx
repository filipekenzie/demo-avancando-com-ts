import { useFavoriteDigimons } from "../../Providers/FavoriteDigimons";
import { Digimon } from "../../types/digimon";
import Button from "../Button";
import { Container, Image } from "./styles";

interface DigimonCardProps {
  digimon: Digimon;
  isFavorite?: boolean;
}

const DigimonCard = ({ digimon, isFavorite = false }: DigimonCardProps) => {
  const { name, level, img } = digimon;

  const { deleteDigimon, addDigimon } = useFavoriteDigimons();

  return (
    <Container>
      <div>{name}</div>
      <Image src={img}></Image>
      <div>{level}</div>
      {isFavorite ? (
        <Button deleted={true} onClick={() => deleteDigimon(digimon)}>
          Remove
        </Button>
      ) : (
        <Button onClick={() => addDigimon(digimon)}> Add</Button>
      )}
    </Container>
  );
};

export default DigimonCard;
