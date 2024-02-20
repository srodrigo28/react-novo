import { Container } from "../../styles/GlobalStyles";
import { Paragrafo, Title } from "./styled";
import { toast } from 'react-toastify';

import axios from "../../services/axios";
import { useEffect } from "react";

export function Login(){
    useEffect(() => {
        async function getData(){
            const response = await axios.get('/login');
            const {data} = response;
            console.log(data);
        }
        getData();
    }, [])
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