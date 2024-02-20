import { Container } from "../../styles/GlobalStyles";
import { Paragrafo, Title } from "./styled";
import { toast } from 'react-toastify';

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
            <button 
                type="button"
                onClick={ () => toast.error('Error')}
            >Enviar</button>
        </Container>
    )
}