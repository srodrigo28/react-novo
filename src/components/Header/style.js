import styled from "styled-components";
import { primaryColor } from "../../config/colors";

export const Nav = styled.nav`
    gap: 10px;
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: center;
    background: ${primaryColor};

    p{
        color: #fff;
        font-weight: 700;
    }
`