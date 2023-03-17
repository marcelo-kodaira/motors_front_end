import { useContext } from "react";
import { MenuContext } from "../../contexts/menuContext";
import { Container, ContainerButtons } from "./style";

export const Standard = () => {
  const { getCoordinates } = useContext(MenuContext);
  return (
    <Container>
      <div>
        <h1>Velocidade e experiência em um lugar feito para você</h1>
        <p>Um ambiente feito para você explorar o seu melhor</p>
        <ContainerButtons>
          <button onClick={() => getCoordinates("cars")}>Carros</button>
          <button onClick={() => getCoordinates("motorbikes")}>Motos</button>
        </ContainerButtons>
      </div>
    </Container>
  );
};
