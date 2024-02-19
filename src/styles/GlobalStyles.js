import styled, { createGlobalStyle } from 'styled-components'
import { primaryColor, primaryDarkColor } from '../config/colors'

export default createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        border: none;
        outline: none;
        list-style: none;
        text-decoration: none;
    }

    body{
        font-family: sans-serif;
        background: ${primaryDarkColor};
    }

    html, body, #root{
        height: 100%;
    }

    button{
        color: #fff;
        cursor: pointer;
        font-weight: 700;
        padding: 10px 20px;
        border-radius: 4px;
        background: ${primaryColor};
    }

    a{
        color: #fff;
    }
`;

export const Container = styled.section`
    max-width: 360px;
    background: #fff;
    margin: 30px auto;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;