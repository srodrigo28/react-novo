import { Container } from "../../styles/GlobalStyles";
import { Input, Title } from "./styled";
import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";

export function Login(){

    const dispatch = useDispatch();

    function handleClick(e){
        e.preventDefault()

        dispatch({
            type: 'BOTAO_CLICADO'
        });
    }

    return(
        <Container>
            <Title>
                Login
            </Title>
            <Input type="text" placeholder="email" />
            <Input type="text" placeholder="***************" />

            <p>não é cadastrado?<span>  Cadastra-se</span></p>
            <button 
                type="button"
                onClick={ () => toast.error('Error')}
            >Enviar
            </button>
            <button 
                type="button"
                onClick={ handleClick}
            >Enviar 2
            </button>
        </Container>
    )
}