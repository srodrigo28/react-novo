import { Container } from "../../styles/GlobalStyles";
import { Paragrafo, Title } from "./styled";

export function Page404(){
    return(
        <Container>
            <Title>
                Não Encontrada
            </Title>
            <button type="button">Voltar</button>
        </Container>
    )
}