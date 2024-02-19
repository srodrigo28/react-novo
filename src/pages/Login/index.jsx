import { Container } from "../../styles/GlobalStyles";
import { Paragrafo, Title } from "./styled";

export function Login(){
    return(
        <Container>
            <Title>
                Login
                <small>Oie</small>
            </Title>
            <Paragrafo>
                Lorem ipsum dolor sit amet consectetur
            </Paragrafo>
            <button type="button">Enviar</button>
        </Container>
    )
}